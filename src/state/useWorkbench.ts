import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { MASTER_METER_ID, type Bus, type LevelState, type ListenerState, type MeterLevels, type NamedProject, type ProjectDoc, type SourceType, type SpatialSettings, type Track, type UnlockState } from '../types';
import { engine } from '../lib/engineInstance';
import { DecodeError } from '../lib/audioEngine';
import * as idb from '../lib/idb';
import { SAMPLE_LABELS } from '../lib/samples';
import {
  RoutingError,
  assertCanDeleteBus,
  commitRouting,
  createBus,
  createDefaultBuses,
  defaultBusIdForTrack,
  descendantBusIds,
} from '../lib/routing';

const COLORS = ['#e8734a', '#4ecdc4', '#ffe066', '#a78bfa', '#f472b6', '#34d399', '#60a5fa'];

const DEFAULT_SPATIAL: SpatialSettings = {
  distanceModel: 'inverse',
  refDistance: 1,
  rolloffFactor: 1,
  maxDistance: 30,
  positionTimeConstant: 0.06,
  hrtfIR: 'none',
};

const DEFAULT_LISTENER: ListenerState = {
  position: { x: 0, y: 0, z: 3 },
  yaw: 0,
  pitch: 0,
  earHeight: 0,
};

let counter = 0;
function uid(prefix: string): string {
  counter += 1;
  return `${prefix}-${Date.now().toString(36)}-${counter}`;
}

function sampleTrack(type: Exclude<SourceType, 'file'>, index: number, busId: string): Track {
  const presets: Record<Exclude<SourceType, 'file'>, { position: Track['position']; loop: boolean }> = {
    pulse: { position: { x: -3, y: 0, z: 0 }, loop: true },
    tone: { position: { x: 3, y: 0, z: 0 }, loop: true },
    duoA: { position: { x: -2, y: 0, z: 0 }, loop: true },
    duoB: { position: { x: 2, y: 0, z: 0 }, loop: true },
  };
  const p = presets[type];
  return {
    id: uid('trk'),
    name: SAMPLE_LABELS[type],
    sourceType: type,
    busId,
    loop: p.loop,
    muted: false,
    solo: false,
    gain: 0.9,
    channel: 0,
    color: COLORS[index % COLORS.length],
    position: { ...p.position },
    status: 'pending',
  };
}

function emptyDoc(): ProjectDoc {
  return {
    version: 2,
    routeVersion: 1,
    buses: createDefaultBuses(),
    tracks: [],
    listener: { ...DEFAULT_LISTENER, position: { ...DEFAULT_LISTENER.position } },
    spatial: { ...DEFAULT_SPATIAL },
    masterGain: 0.9,
    masterMuted: false,
    savedAt: 0,
  };
}

const EMPTY_LEVEL: LevelState = { l: 0, r: 0, clipL: false, clipR: false };
const INITIAL_METERS: MeterLevels = { [MASTER_METER_ID]: EMPTY_LEVEL };

export interface WorkbenchApi {
  doc: ProjectDoc;
  unlock: UnlockState;
  unlockError: string | null;
  playingIds: Set<string>;
  levels: MeterLevels;
  selectedId: string | null;
  projects: NamedProject[];
  loadedProjectId: string | null;
  loadedProjectName: string | null;
  saveState: 'idle' | 'saving' | 'saved';
  globalError: string | null;
  selectTrack: (id: string | null) => void;
  unlockAudio: () => Promise<void>;
  addSample: (type: Exclude<SourceType, 'file'>, busId?: string) => Promise<void>;
  addFiles: (files: FileList | File[], busId?: string) => Promise<void>;
  removeTrack: (id: string) => Promise<void>;
  updateTrack: (id: string, patch: Partial<Omit<Track, 'id' | 'busId'>>) => void;
  moveTrack: (id: string, position: Track['position']) => void;
  moveTrackToBus: (id: string, busId: string) => void;
  addBus: (parentId?: string | null) => void;
  updateBus: (id: string, patch: Partial<Omit<Bus, 'id'>>) => void;
  deleteBus: (id: string) => void;
  setListener: (
    patch:
      | Partial<Omit<ListenerState, 'position'>>
      | { position: Partial<ListenerState['position']> },
  ) => void;
  setSpatial: (patch: Partial<SpatialSettings>) => void;
  setMasterGain: (v: number) => void;
  setMasterMuted: (muted: boolean) => void;
  play: (id: string) => Promise<void>;
  pause: (id: string) => void;
  stop: (id: string) => void;
  seek: (id: string, offsetSec: number) => Promise<void>;
  togglePlay: (id: string) => Promise<void>;
  playAll: () => Promise<void>;
  stopAll: () => void;
  clearClips: (id?: string) => void;
  saveProjectAs: (name: string) => Promise<void>;
  loadProject: (id: string) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  newProject: () => Promise<void>;
  dismissGlobalError: () => void;
}

export function useWorkbench(): WorkbenchApi {
  const [doc, setDoc] = useState<ProjectDoc>(emptyDoc);
  const [unlock, setUnlock] = useState<UnlockState>('locked');
  const [unlockError, setUnlockError] = useState<string | null>(null);
  const [playingIds, setPlayingIds] = useState<Set<string>>(new Set());
  const [levels, setLevels] = useState<MeterLevels>(INITIAL_METERS);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [projects, setProjects] = useState<NamedProject[]>([]);
  const [loadedProjectId, setLoadedProjectId] = useState<string | null>(null);
  const [loadedProjectName, setLoadedProjectName] = useState<string | null>(null);
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved'>('idle');
  const [globalError, setGlobalError] = useState<string | null>(null);

  const docRef = useRef(doc);
  docRef.current = doc;
  const initDone = useRef(false);

  const reportError = useCallback((err: unknown) => {
    if (err instanceof RoutingError) {
      setGlobalError(err.message);
    } else {
      setGlobalError(err instanceof Error ? err.message : String(err));
    }
  }, []);

  /** React 状态事务：先克隆和完整校验，通过后才替换；失败时旧图原样保留。 */
  const commitDoc = useCallback((recipe: (draft: ProjectDoc) => void): boolean => {
    try {
      const next = commitRouting(docRef.current, recipe);
      setDoc(next);
      return true;
    } catch (err) {
      reportError(err);
      return false;
    }
  }, [reportError]);

  // ---------- 初始化：恢复会话与工程列表，绝不自动播放 ----------
  useEffect(() => {
    if (initDone.current) return;
    initDone.current = true;
    let cancelled = false;
    (async () => {
      try {
        const [session, list] = await Promise.all([idb.loadSession(), idb.listProjects()]);
        if (cancelled) return;
        setProjects(list);
        if (session) {
          // 恢复全部参数，但播放状态一律归零（不擅自自动播放）。
          // 文件轨标记 pending，待音频解锁后重新注入 Blob 解码。
          setDoc({
            ...session,
            tracks: session.tracks.map((t) => ({
              ...t,
              status: 'pending',
              errorMessage: undefined,
            })),
          });
        }
      } catch (err) {
        if (!cancelled) reportError(`读取本地工程失败：${err instanceof Error ? err.message : String(err)}`);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [reportError]);

  // ---------- 引擎事件订阅 ----------
  useEffect(() => engine.onUnlock(setUnlock), []);
  useEffect(() => engine.onLevels(setLevels), []);

  useEffect(() => {
    return engine.onEnded((trackId) => {
      setPlayingIds((prev) => {
        if (!prev.has(trackId)) return prev;
        const next = new Set(prev);
        next.delete(trackId);
        return next;
      });
    });
  }, []);

  // ---------- 全局参数同步到音频链 ----------
  useEffect(() => {
    engine.setSpatialSettings(doc.spatial);
  }, [doc.spatial]);

  useEffect(() => {
    engine.setListener(doc.listener);
  }, [doc.listener]);

  useEffect(() => {
    engine.setRoutingProvider(() => {
      const d = docRef.current;
      return {
        buses: d.buses,
        tracks: d.tracks,
        masterGain: d.masterGain,
        masterMuted: d.masterMuted,
      };
    });
    return () => engine.setRoutingProvider(null);
  }, []);

  // 仪表拓扑随路由恢复/变化；峰值和 CLIP 锁存不持久化，缺失表先显示真实意义上的零值。
  useEffect(() => {
    setLevels((prev) => {
      const next: MeterLevels = { [MASTER_METER_ID]: prev[MASTER_METER_ID] ?? EMPTY_LEVEL };
      for (const bus of doc.buses) next[bus.id] = prev[bus.id] ?? EMPTY_LEVEL;
      let changed = Object.keys(next).length !== Object.keys(prev).length;
      if (!changed) for (const key of Object.keys(prev)) if (!(key in next)) changed = true;
      return changed ? next : prev;
    });
  }, [doc.buses]);

  // 总线结构、成员归属、M/S/G、主输出状态一起作为已校验路由事务同步。
  useEffect(() => {
    engine.syncRouting({
      buses: doc.buses,
      tracks: doc.tracks,
      masterGain: doc.masterGain,
      masterMuted: doc.masterMuted,
    });
  }, [doc.buses, doc.tracks, doc.masterGain, doc.masterMuted]);

  // ---------- 解锁后：同步全部声轨（解码/合成 + 参数），但不播放 ----------
  useEffect(() => {
    if (unlock !== 'unlocked') return;
    let cancelled = false;
    (async () => {
      engine.setSpatialSettings(docRef.current.spatial);
      engine.setListener(docRef.current.listener);
      engine.syncRouting({
        buses: docRef.current.buses,
        tracks: docRef.current.tracks,
        masterGain: docRef.current.masterGain,
        masterMuted: docRef.current.masterMuted,
      });

      // 注入文件 Blob
      for (const t of docRef.current.tracks) {
        if (t.sourceType === 'file' && t.blobKey && t.status !== 'ready') {
          try {
            const blob = await idb.getBlob(t.blobKey);
            if (blob) engine.setFileBlob(t.id, blob);
            else if (!cancelled) {
              patchTrack(t.id, { status: 'decode-error', errorMessage: '本地音频 Blob 缺失' });
            }
          } catch {
            if (!cancelled) {
              patchTrack(t.id, { status: 'decode-error', errorMessage: '读取本地音频失败' });
            }
          }
        }
      }
      for (const t of docRef.current.tracks) {
        if (cancelled) return;
        try {
          await engine.ensureTrack(t);
          if (cancelled) return;
          // 解码期间声轨可能已被删除
          if (!docRef.current.tracks.some((x) => x.id === t.id)) {
            engine.removeTrack(t.id);
            continue;
          }
          const dur = engine.getDuration(t.id);
          const ch = engine.getChannelCount(t.id);
          patchTrack(t.id, {
            status: 'ready',
            errorMessage: undefined,
            duration: dur ?? t.duration,
            channels: ch ?? t.channels,
          });
        } catch (err) {
          if (cancelled) return;
          if (err instanceof DecodeError) {
            patchTrack(t.id, { status: 'decode-error', errorMessage: err.message });
          }
        }
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [unlock]);

  // ---------- 自动保存会话（参数，不保存播放状态），防抖 ----------
  const saveTimer = useRef<number | undefined>(undefined);
  useEffect(() => {
    if (!initDone.current) return;
    setSaveState('saving');
    window.clearTimeout(saveTimer.current);
    saveTimer.current = window.setTimeout(async () => {
      const snapshot: ProjectDoc = {
        ...docRef.current,
        savedAt: Date.now(),
      };
      try {
        await idb.saveSession(snapshot);
        setSaveState('saved');
        window.setTimeout(() => setSaveState('idle'), 1200);
      } catch {
        setSaveState('idle');
      }
    }, 500);
    return () => window.clearTimeout(saveTimer.current);
  }, [doc]);

  function patchTrack(id: string, patch: Partial<Track>) {
    setDoc((d) => {
      const track = d.tracks.find((t) => t.id === id);
      if (!track) return d;
      return {
        ...d,
        // 状态/时长变化是一次已完成的本地声轨事务，也递增路由版本。
        routeVersion: d.routeVersion + 1,
        tracks: d.tracks.map((t) => (t.id === id ? { ...t, ...patch } : t)),
      };
    });
  }

  const selectTrack = useCallback((id: string | null) => setSelectedId(id), []);

  const unlockAudio = useCallback(async () => {
    setUnlockError(null);
    try {
      await engine.resume();
    } catch (err) {
      setUnlockError(err instanceof Error ? err.message : String(err));
    }
  }, []);

  const addSample = useCallback(async (type: Exclude<SourceType, 'file'>, busIdArg?: string) => {
    if (engine.unlock !== 'unlocked') {
      await unlockAudio();
      if ((engine.unlock as UnlockState) !== 'unlocked') return;
    }
    let created: Track | undefined;
    commitDoc((d) => {
      const busId = busIdArg ?? defaultBusIdForTrack(d.buses, d.tracks.length);
      if (!d.buses.some((b) => b.id === busId)) throw new RoutingError('dangling', '目标总线不存在');
      const next = sampleTrack(type, d.tracks.length, busId);
      d.tracks.push(next);
      created = next;
    });
    if (!created) return;
    if (engine.unlock === 'unlocked') {
      try {
        await engine.ensureTrack(created);
        const dur = engine.getDuration(created.id);
        const ch = engine.getChannelCount(created.id);
        patchTrack(created.id, {
          status: 'ready',
          duration: dur ?? undefined,
          channels: ch ?? undefined,
        });
      } catch {
        patchTrack(created.id, { status: 'decode-error', errorMessage: '样例合成失败' });
      }
    }
    setSelectedId(created.id);
  }, [commitDoc, unlockAudio]);

  const addFiles = useCallback(
    async (files: FileList | File[], busIdArg?: string) => {
      const arr = [...files];
      if (arr.length === 0) return;
      if (engine.unlock !== 'unlocked') {
        await unlockAudio();
        if ((engine.unlock as UnlockState) !== 'unlocked') return;
      }
      for (let i = 0; i < arr.length; i++) {
        const file = arr[i];
        const blobKey = uid('blob');
        let created: Track | undefined;
        const ordinal = i;
        const committed = commitDoc((d) => {
          const idx = d.tracks.length;
          const busId = busIdArg ?? defaultBusIdForTrack(d.buses, idx);
          if (!d.buses.some((b) => b.id === busId)) throw new RoutingError('dangling', '目标总线不存在');
          const next: Track = {
            id: uid('trk'),
            name: file.name,
            sourceType: 'file',
            blobKey,
            originalFileName: file.name,
            busId,
            loop: false,
            muted: false,
            solo: false,
            gain: 0.9,
            channel: 0,
            color: COLORS[(idx + ordinal) % COLORS.length],
            position: {
              x: Math.cos(((idx + ordinal) * 2 * Math.PI) / Math.max(arr.length, 1)) * 2.5,
              y: 0,
              z: Math.sin(((idx + ordinal) * 2 * Math.PI) / Math.max(arr.length, 1)) * 2.5,
            },
            status: 'pending',
          };
          d.tracks.push(next);
          created = next;
        });
        if (!committed || !created) continue;
        const createdTrack = created;
        try {
          await idb.putBlob(blobKey, file);
          patchTrack(createdTrack.id, { status: 'loading' });
        } catch {
          // Blob 事务失败时回滚刚加入的成员，保证路由和可用音频资源一致。
          commitDoc((d) => {
            d.tracks = d.tracks.filter((x) => x.id !== createdTrack.id);
          });
          setGlobalError('音频写入本地 IndexedDB 失败（浏览器存储可能已满）');
          continue;
        }

        engine.setFileBlob(createdTrack.id, file);
        try {
          if (!docRef.current.tracks.some((x) => x.id === createdTrack.id)) continue;
          await engine.ensureTrack(createdTrack);
          if (!docRef.current.tracks.some((x) => x.id === createdTrack.id)) {
            engine.removeTrack(createdTrack.id);
            continue;
          }
          const dur = engine.getDuration(createdTrack.id);
          const ch = engine.getChannelCount(createdTrack.id);
          patchTrack(createdTrack.id, {
            status: 'ready',
            duration: dur ?? undefined,
            channels: ch ?? undefined,
          });
        } catch (err) {
          if (!docRef.current.tracks.some((x) => x.id === createdTrack.id)) continue;
          if (err instanceof DecodeError) {
            patchTrack(createdTrack.id, { status: 'decode-error', errorMessage: err.message });
          } else {
            patchTrack(createdTrack.id, {
              status: 'decode-error',
              errorMessage: err instanceof Error ? err.message : String(err),
            });
          }
        }
      }
    },
    [commitDoc, unlockAudio],
  );

  const removeTrack = useCallback(async (id: string) => {
    const t = docRef.current.tracks.find((x) => x.id === id);
    engine.removeTrack(id);
    if (t?.blobKey) {
      try {
        await idb.deleteBlob(t.blobKey);
      } catch {
        /* 忽略清理失败；不影响路由图 */
      }
    }
    setPlayingIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
    commitDoc((d) => {
      d.tracks = d.tracks.filter((x) => x.id !== id);
    });
    setSelectedId((cur) => (cur === id ? null : cur));
  }, [commitDoc]);

  const updateTrack = useCallback(
    (id: string, patch: Partial<Omit<Track, 'id' | 'busId'>>) => {
      const prev = docRef.current.tracks.find((x) => x.id === id);
      patchTrack(id, patch);
      // 切换所选输入声道需要重建输入图（splitter 接线改变）；总线迁移不走这里。
      if (
        prev &&
        patch.channel !== undefined &&
        patch.channel !== prev.channel &&
        engine.unlock === 'unlocked'
      ) {
        const merged: Track = { ...prev, ...patch };
        void engine.rebuildVoiceGraph(merged).catch((err) => {
          if (err instanceof DecodeError) {
            patchTrack(id, { status: 'decode-error', errorMessage: err.message });
          }
        });
      }
    },
    [],
  );

  const moveTrack = useCallback((id: string, position: Track['position']) => {
    setDoc((d) => ({
      ...d,
      tracks: d.tracks.map((t) => (t.id === id ? { ...t, position: { ...position } } : t)),
    }));
  }, []);

  const moveTrackToBus = useCallback((id: string, busId: string) => {
    commitDoc((d) => {
      const track = d.tracks.find((t) => t.id === id);
      if (!track) throw new RoutingError('dangling', '声轨不存在');
      if (!d.buses.some((b) => b.id === busId)) throw new RoutingError('dangling', '目标总线不存在');
      track.busId = busId;
    });
  }, [commitDoc]);

  const addBus = useCallback((parentId: string | null = null) => {
    commitDoc((d) => {
      if (parentId !== null && !d.buses.some((b) => b.id === parentId)) {
        throw new RoutingError('dangling', '父总线不存在');
      }
      d.buses.push(createBus(uid('bus'), d.buses.length, parentId));
    });
  }, [commitDoc]);

  const updateBus = useCallback((id: string, patch: Partial<Omit<Bus, 'id'>>) => {
    commitDoc((d) => {
      const bus = d.buses.find((b) => b.id === id);
      if (!bus) throw new RoutingError('dangling', '总线不存在');
      if (patch.parentId !== undefined) {
        if (patch.parentId === id) throw new RoutingError('cycle', '总线不能连接到自身');
        if (patch.parentId !== null) {
          if (!d.buses.some((b) => b.id === patch.parentId)) {
            throw new RoutingError('dangling', '父总线不存在');
          }
          if (descendantBusIds(d.buses, id).has(patch.parentId)) {
            throw new RoutingError('cycle', '不能把总线移动到自己的子总线之下');
          }
        }
      }
      Object.assign(bus, patch);
    });
  }, [commitDoc]);

  const deleteBus = useCallback((id: string) => {
    try {
      // 先用旧图做业务校验；commitRouting 还会再次跑完整结构校验。
      assertCanDeleteBus(docRef.current, id);
      commitDoc((d) => {
        assertCanDeleteBus(d, id);
        d.buses = d.buses.filter((b) => b.id !== id);
      });
    } catch (err) {
      reportError(err);
    }
  }, [commitDoc, reportError]);

  const setListener = useCallback(
    (patch: Partial<ListenerState> | { position: Partial<ListenerState['position']> }) => {
      setDoc((d) => {
        if ('position' in patch) {
          return {
            ...d,
            listener: {
              ...d.listener,
              position: { ...d.listener.position, ...(patch as { position: Partial<ListenerState['position']> }).position },
            },
          };
        }
        return { ...d, listener: { ...d.listener, ...(patch as Partial<ListenerState>) } };
      });
    },
    [],
  );

  const setSpatial = useCallback((patch: Partial<SpatialSettings>) => {
    setDoc((d) => ({ ...d, spatial: { ...d.spatial, ...patch } }));
  }, []);

  const setMasterGain = useCallback((v: number) => {
    commitDoc((d) => {
      d.masterGain = v;
    });
  }, [commitDoc]);

  const setMasterMuted = useCallback((muted: boolean) => {
    commitDoc((d) => {
      d.masterMuted = muted;
    });
  }, [commitDoc]);

  // ---------- 传输 ----------
  const play = useCallback(
    async (id: string) => {
      if (engine.unlock !== 'unlocked') await unlockAudio();
      const t = docRef.current.tracks.find((x) => x.id === id);
      if (!t || t.status === 'decode-error') return;
      try {
        await engine.playTrack(t);
        setPlayingIds((prev) => new Set(prev).add(id));
      } catch (err) {
        if (err instanceof DecodeError) {
          patchTrack(id, { status: 'decode-error', errorMessage: err.message });
        } else {
          reportError(err);
        }
      }
    },
    [reportError, unlockAudio],
  );

  const pause = useCallback((id: string) => {
    const t = docRef.current.tracks.find((x) => x.id === id);
    if (!t) return;
    engine.pauseTrack(t);
    setPlayingIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const stop = useCallback((id: string) => {
    const t = docRef.current.tracks.find((x) => x.id === id);
    if (!t) return;
    engine.stopTrack(t);
    setPlayingIds((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }, []);

  const seek = useCallback(
    async (id: string, offsetSec: number) => {
      const t = docRef.current.tracks.find((x) => x.id === id);
      if (!t) return;
      const wasPlaying = engine.isPlaying(id);
      await engine.seekTrack(t, offsetSec, wasPlaying);
      setPlayingIds((prev) => {
        const next = new Set(prev);
        if (wasPlaying) next.add(id);
        else next.delete(id);
        return next;
      });
    },
    [],
  );

  const togglePlay = useCallback(
    async (id: string) => {
      if (engine.isPlaying(id)) pause(id);
      else await play(id);
    },
    [pause, play],
  );

  const playAll = useCallback(async () => {
    if (engine.unlock !== 'unlocked') await unlockAudio();
    for (const t of docRef.current.tracks) {
      if (t.status === 'decode-error') continue;
      try {
        await engine.playTrack(t);
        setPlayingIds((prev) => new Set(prev).add(t.id));
      } catch (err) {
        if (err instanceof DecodeError) {
          patchTrack(t.id, { status: 'decode-error', errorMessage: err.message });
        }
      }
    }
  }, [unlockAudio]);

  const stopAll = useCallback(() => {
    for (const t of docRef.current.tracks) engine.stopTrack(t);
    setPlayingIds(new Set());
  }, []);

  const clearClips = useCallback((id?: string) => {
    engine.clearClipLatch(id);
    setLevels((prev) => {
      if (!id) {
        return Object.fromEntries(Object.entries(prev).map(([key, v]) => [key, { ...v, clipL: false, clipR: false }]));
      }
      const v = prev[id];
      return v ? { ...prev, [id]: { ...v, clipL: false, clipR: false } } : prev;
    });
  }, []);

  // ---------- 具名工程 ----------
  const refreshProjects = useCallback(async () => {
    setProjects(await idb.listProjects());
  }, []);

  const saveProjectAs = useCallback(
    async (name: string) => {
      const id = loadedProjectId ?? uid('proj');
      const named: NamedProject = {
        id,
        name: name.trim() || `工程 ${new Date().toLocaleString()}`,
        savedAt: Date.now(),
        doc: { ...docRef.current, savedAt: Date.now() },
      };
      await idb.saveProject(named);
      setLoadedProjectId(id);
      setLoadedProjectName(named.name);
      await refreshProjects();
    },
    [loadedProjectId, refreshProjects],
  );

  const hydrateTracks = useCallback(async (restored: ProjectDoc) => {
    if (engine.unlock !== 'unlocked') return;
    engine.syncRouting({
      buses: restored.buses,
      tracks: restored.tracks,
      masterGain: restored.masterGain,
      masterMuted: restored.masterMuted,
    });
    for (const t of restored.tracks) {
      if (t.sourceType === 'file' && t.blobKey) {
        try {
          const blob = await idb.getBlob(t.blobKey);
          if (blob) engine.setFileBlob(t.id, blob);
          else patchTrack(t.id, { status: 'decode-error', errorMessage: '本地音频 Blob 缺失' });
        } catch {
          patchTrack(t.id, { status: 'decode-error', errorMessage: '读取本地音频失败' });
        }
      }
      try {
        await engine.ensureTrack(t);
        patchTrack(t.id, {
          status: 'ready',
          duration: engine.getDuration(t.id) ?? t.duration,
          channels: engine.getChannelCount(t.id) ?? t.channels,
          errorMessage: undefined,
        });
      } catch (err) {
        if (err instanceof DecodeError) {
          patchTrack(t.id, { status: 'decode-error', errorMessage: err.message });
        }
      }
    }
  }, []);

  const loadProject = useCallback(
    async (id: string) => {
      const p = await idb.getProject(id);
      if (!p) return;
      for (const t of docRef.current.tracks) engine.removeTrack(t.id);
      setPlayingIds(new Set());
      const restored: ProjectDoc = {
        ...p.doc,
        // 恢复本身是一次新的本地路由事务；播放状态仍一律停止。
        routeVersion: p.doc.routeVersion + 1,
        tracks: p.doc.tracks.map((t) => ({ ...t, status: 'pending' as const, errorMessage: undefined })),
      };
      setDoc(restored);
      setLoadedProjectId(p.id);
      setLoadedProjectName(p.name);
      setSelectedId(null);
      await hydrateTracks(restored);
    },
    [hydrateTracks],
  );

  const deleteProject = useCallback(
    async (id: string) => {
      await idb.deleteProject(id);
      if (loadedProjectId === id) {
        setLoadedProjectId(null);
        setLoadedProjectName(null);
      }
      await refreshProjects();
    },
    [loadedProjectId, refreshProjects],
  );

  const newProject = useCallback(async () => {
    for (const t of docRef.current.tracks) engine.removeTrack(t.id);
    setPlayingIds(new Set());
    setDoc(emptyDoc());
    setLoadedProjectId(null);
    setLoadedProjectName(null);
    setSelectedId(null);
  }, []);

  const dismissGlobalError = useCallback(() => setGlobalError(null), []);

  const api = useMemo<WorkbenchApi>(
    () => ({
      doc,
      unlock,
      unlockError,
      playingIds,
      levels,
      selectedId,
      projects,
      loadedProjectId,
      loadedProjectName,
      saveState,
      globalError,
      selectTrack,
      unlockAudio,
      addSample,
      addFiles,
      removeTrack,
      updateTrack,
      moveTrack,
      moveTrackToBus,
      addBus,
      updateBus,
      deleteBus,
      setListener,
      setSpatial,
      setMasterGain,
      setMasterMuted,
      play,
      pause,
      stop,
      seek,
      togglePlay,
      playAll,
      stopAll,
      clearClips,
      saveProjectAs,
      loadProject,
      deleteProject,
      newProject,
      dismissGlobalError,
    }),
    [
      doc,
      unlock,
      unlockError,
      playingIds,
      levels,
      selectedId,
      projects,
      loadedProjectId,
      loadedProjectName,
      saveState,
      globalError,
      selectTrack,
      unlockAudio,
      addSample,
      addFiles,
      removeTrack,
      updateTrack,
      moveTrack,
      moveTrackToBus,
      addBus,
      updateBus,
      deleteBus,
      setListener,
      setSpatial,
      setMasterGain,
      setMasterMuted,
      play,
      pause,
      stop,
      seek,
      togglePlay,
      playAll,
      stopAll,
      clearClips,
      saveProjectAs,
      loadProject,
      deleteProject,
      newProject,
      dismissGlobalError,
    ],
  );

  return api;
}
