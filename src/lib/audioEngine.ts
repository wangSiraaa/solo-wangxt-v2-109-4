/**
 * AudioEngine —— Web Audio 核心，与 React 状态解耦。
 *
 * 每条声轨的固定空间链：
 *   AudioBufferSourceNode ─► ChannelSplitter(原始 L/R 选择)
 *      ─► trackGain ─► PannerNode(HRTF)
 *
 * 可持久化监听总线（可嵌套但严禁成环）：
 *   panner ─► busGain ─► busMeter ─► parentBusGain / masterGain
 *   masterGain ─► masterMeter ─► analyser ─► destination
 *
 * 关键约定：
 *  - 迁移总线只断开并重接 PannerNode 的输出，绝不 stop/start BufferSource；
 *    PannerNode 的位置参数和文件 L/R 选择均保持不变。
 *  - 优先级（高到低）：masterMute / busMute（含祖先）→ bus solo 子树隔离
 *    → track solo 隔离 → track mute → track gain → bus gain → master gain。
 *  - 每个总线表与主表都串联在对应 GainNode 输出后的真实链路上，
 *    AudioWorklet 不可用时退回到同样串联的 AnalyserNode。
 */
import { MASTER_METER_ID, type Bus, type LevelState, type ListenerState, type MeterLevels, type SpatialSettings, type Track, type UnlockState } from '../types';
import { createDefaultBuses } from './routing';
import { forwardVector } from './spatial';
import { createSampleBuffer } from './samples';

interface TrackVoice {
  trackId: string;
  spec: Track;
  source: AudioBufferSourceNode;
  trackGain: GainNode;
  panner: PannerNode;
  busId: string;
  playing: boolean;
  consumed: boolean; // source 是否已 start 过（结束后必须重建才能再播）
  startedAt: number;
  offset: number;
  duration: number;
}

interface BusNodes {
  spec: Bus;
  gain: GainNode;
  analyser: AnalyserNode;
  worklet: AudioWorkletNode | null;
}

interface RoutingState {
  buses: Bus[];
  tracks: Track[];
  masterGain: number;
  masterMuted: boolean;
}

export type EngineUnlockListener = (state: UnlockState) => void;
export type EngineLevelListener = (levels: MeterLevels) => void;
export type EngineEndedListener = (trackId: string) => void;

export class DecodeError extends Error {
  trackId: string;
  constructor(trackId: string, message: string) {
    super(message);
    this.name = 'DecodeError';
    this.trackId = trackId;
  }
}

function emptyLevels(): LevelState {
  return { l: 0, r: 0, clipL: false, clipR: false };
}

export class AudioEngine {
  ctx: AudioContext | null = null;
  unlock: UnlockState = 'locked';

  private masterGain: GainNode | null = null;
  private masterAnalyser: AnalyserNode | null = null;
  private masterWorklet: AudioWorkletNode | null = null;
  private timeDomainBuf: Float32Array<ArrayBuffer> = new Float32Array(new ArrayBuffer(8192));
  private peakWorkletReady = false;
  private workletFailed = false;
  private workletGeneration = 0;
  private insertingWorklets: Promise<void> | null = null;
  private disposed = false;

  private busNodes = new Map<string, BusNodes>();
  private voices = new Map<string, TrackVoice>();
  private buffers = new Map<string, AudioBuffer>();
  private pendingFiles = new Map<string, Blob>();

  private spatial: SpatialSettings | null = null;
  private routing: RoutingState = {
    buses: createDefaultBuses(),
    tracks: [],
    masterGain: 0.9,
    masterMuted: false,
  };
  private meterLevels: MeterLevels = { [MASTER_METER_ID]: emptyLevels() };
  /** 由 UI 注入的最新已校验文档读取器，保证解锁后立即 ensureTrack 时也能拿到刚提交的总线。 */
  private getLatestRouting: (() => RoutingState | null) | null = null;

  private unlockListeners = new Set<EngineUnlockListener>();
  private levelListeners = new Set<EngineLevelListener>();
  private endedListeners = new Set<EngineEndedListener>();
  private rafHandle = 0;

  onUnlock(fn: EngineUnlockListener): () => void {
    this.unlockListeners.add(fn);
    fn(this.unlock);
    return () => {
      this.unlockListeners.delete(fn);
    };
  }
  onLevels(fn: EngineLevelListener): () => void {
    this.levelListeners.add(fn);
    return () => {
      this.levelListeners.delete(fn);
    };
  }
  onEnded(fn: EngineEndedListener): () => void {
    this.endedListeners.add(fn);
    return () => {
      this.endedListeners.delete(fn);
    };
  }

  private emitUnlock() {
    this.unlockListeners.forEach((fn) => fn(this.unlock));
  }

  /** 必须在用户手势中调用；与“未解锁”分别上报明确的失败状态 */
  async resume(): Promise<void> {
    if (this.unlock === 'unlocked' && this.ctx) {
      if (this.ctx.state === 'suspended') await this.ctx.resume();
      return;
    }
    this.unlock = 'unlocking';
    this.emitUnlock();
    const previousCtx = this.ctx;
    this.ctx = null;
    try {
      const Ctor: typeof AudioContext =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!Ctor) throw new Error('当前浏览器不支持 Web Audio API');
      const ctx = new Ctor();
      this.ctx = ctx;
      const latest = this.getLatestRouting?.();
      if (latest) this.routing = latest;
      this.disposed = false;
      this.workletFailed = false;
      this.buildGraph(ctx);
      if (ctx.state === 'suspended') await ctx.resume();
      if (ctx.state !== 'running') {
        throw new Error('AudioContext 被浏览器策略阻止，未能进入 running 状态');
      }
      if (previousCtx) void previousCtx.close();
      this.unlock = 'unlocked';
      this.emitUnlock();
      this.startMeterLoop();
      void this.ensurePeakWorklets(ctx);
    } catch (err) {
      if (this.ctx) void this.ctx.close();
      else if (previousCtx) void previousCtx.close();
      this.ctx = null;
      this.unlock = 'failed';
      this.emitUnlock();
      throw err;
    }
  }

  private buildGraph(ctx: AudioContext) {
    this.masterGain = ctx.createGain();
    this.masterAnalyser = ctx.createAnalyser();
    this.masterAnalyser.fftSize = 2048;
    this.timeDomainBuf = new Float32Array(new ArrayBuffer(this.masterAnalyser.fftSize * 4));
    this.masterWorklet = null;
    this.peakWorkletReady = false;
    this.workletGeneration += 1;
    this.insertingWorklets = null;
    this.busNodes.clear();
    this.voices.clear();
    this.buffers.clear();
    this.pendingFiles.clear();
    this.meterLevels = { [MASTER_METER_ID]: emptyLevels() };

    for (const bus of this.routing.buses) this.createBusNode(ctx, bus);
    this.reconnectBuses();
    this.applyMasterGain();

    // worklet 加载前使用同样串联在真实链上的 analyser 作为回退表。
    this.masterGain.connect(this.masterAnalyser);
    this.masterAnalyser.connect(ctx.destination);
  }

  private createBusNode(ctx: AudioContext, bus: Bus): BusNodes {
    const gain = ctx.createGain();
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 2048;
    const nodes: BusNodes = { spec: { ...bus }, gain, analyser, worklet: null };
    this.busNodes.set(bus.id, nodes);
    this.meterLevels[bus.id] = emptyLevels();
    gain.connect(analyser);
    return nodes;
  }

  private reconnectBuses() {
    if (!this.ctx) return;
    for (const nodes of this.busNodes.values()) {
      nodes.analyser.disconnect();
      const parentId = nodes.spec.parentId;
      const parent = parentId ? this.busNodes.get(parentId) : null;
      if (parentId && !parent) continue;
      nodes.analyser.connect(parent ? parent.gain : this.masterGain!);
    }
  }

  private reconcileBuses(ctx: AudioContext, buses: Bus[]) {
    const previousParents = new Map([...this.busNodes].map(([id, nodes]) => [id, nodes.spec.parentId]));
    const next = new Map<string, Bus>();
    for (const bus of buses) next.set(bus.id, bus);

    for (const id of [...this.busNodes.keys()]) {
      if (!next.has(id)) {
        const old = this.busNodes.get(id)!;
        this.disconnectBusNode(old);
        this.busNodes.delete(id);
        delete this.meterLevels[id];
      }
    }

    let parentsChanged = false;
    for (const bus of buses) {
      let nodes = this.busNodes.get(bus.id);
      if (!nodes) {
        nodes = this.createBusNode(ctx, bus);
        parentsChanged = true;
      }
      if (previousParents.get(bus.id) !== bus.parentId) parentsChanged = true;
      nodes.spec = { ...bus };
      nodes.gain.gain.setTargetAtTime(bus.muted ? 0 : bus.gain, ctx.currentTime, 0.01);
    }
    if (parentsChanged || this.busNodes.size !== buses.length) this.reconnectBuses();

    // worklet 已可用时，为后增总线补装真实逐采样表。
    if (this.peakWorkletReady) void this.insertAvailableWorklets(ctx);
  }

  private disconnectBusNode(nodes: BusNodes) {
    try {
      nodes.gain.disconnect();
      nodes.analyser.disconnect();
      nodes.worklet?.disconnect();
    } catch {
      /* node may already be disconnected */
    }
  }

  /**
   * 逐采样峰值/削波检测器串联在每个 bus/master GainNode 之后。
   * Worklet 源码以 Blob 注入，无需额外网络资源。
   */
  private async ensurePeakWorklets(ctx: AudioContext): Promise<boolean> {
    if (this.peakWorkletReady || this.workletFailed) return this.peakWorkletReady;
    const generation = this.workletGeneration;
    try {
      const workletSource = `
class MeterProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() { return []; }
  process(inputs, outputs) {
    const in0 = inputs[0] || [];
    const out0 = outputs[0] || [];
    const l = in0[0];
    const r = in0[1] || in0[0];
    const ol = out0[0];
    const or = out0[1] || out0[0];
    let peakL = 0, peakR = 0, clipL = false, clipR = false;
    if (l && ol) {
      for (let i = 0; i < l.length; i++) {
        const vl = l[i];
        const al = Math.abs(vl);
        if (al > peakL) peakL = al;
        if (al >= 1.0) clipL = true;
        ol[i] = vl;
      }
    }
    if (r && or) {
      for (let i = 0; i < r.length; i++) {
        const vr = r[i];
        const ar = Math.abs(vr);
        if (ar > peakR) peakR = ar;
        if (ar >= 1.0) clipR = true;
        or[i] = vr;
      }
    }
    this.port.postMessage({ l: peakL, r: peakR, clipL, clipR });
    return true;
  }
}
registerProcessor('routing-meter', MeterProcessor);
`;
      const blob = new Blob([workletSource], { type: 'application/javascript' });
      const url = URL.createObjectURL(blob);
      try {
        await ctx.audioWorklet.addModule(url);
      } finally {
        URL.revokeObjectURL(url);
      }
      if (this.disposed || this.ctx !== ctx || generation !== this.workletGeneration) return false;
      this.peakWorkletReady = true;
      await this.insertAvailableWorklets(ctx, generation);
      return true;
    } catch {
      if (generation === this.workletGeneration) this.workletFailed = true;
      return false;
    }
  }

  private insertAvailableWorklets(ctx: AudioContext, generation = this.workletGeneration): Promise<void> {
    if (
      !this.peakWorkletReady ||
      this.ctx !== ctx ||
      generation !== this.workletGeneration ||
      this.insertingWorklets
    ) {
      return this.insertingWorklets ?? Promise.resolve();
    }
    const job = this.insertWorkletNodes(ctx, generation);
    this.insertingWorklets = job;
    void job.finally(() => {
      if (this.insertingWorklets === job) this.insertingWorklets = null;
    });
    return job;
  }

  private async insertWorkletNodes(ctx: AudioContext, generation: number): Promise<void> {
    const insert = async (
      id: string,
      source: GainNode,
      analyser: AnalyserNode,
      existing: AudioWorkletNode | null,
    ): Promise<AudioWorkletNode | null> => {
      if (
        existing ||
        !this.peakWorkletReady ||
        this.ctx !== ctx ||
        generation !== this.workletGeneration
      ) {
        return existing;
      }
      const node = new AudioWorkletNode(ctx, 'routing-meter', {
        numberOfInputs: 1,
        numberOfOutputs: 1,
        outputChannelCount: [2],
      });
      node.channelCount = 2;
      node.channelInterpretation = 'speakers';
      source.disconnect();
      source.connect(node);
      node.connect(analyser);
      node.port.onmessage = (e: MessageEvent<Omit<LevelState, never>>) => {
        this.recordWorkletLevel(id, e.data);
      };
      return node;
    };

    if (this.masterGain && this.masterAnalyser) {
      this.masterWorklet = await insert(
        MASTER_METER_ID,
        this.masterGain,
        this.masterAnalyser,
        this.masterWorklet,
      );
    }
    for (const nodes of this.busNodes.values()) {
      nodes.worklet = await insert(nodes.spec.id, nodes.gain, nodes.analyser, nodes.worklet);
    }
  }

  private recordWorkletLevel(id: string, d: LevelState) {
    const prev = this.meterLevels[id] ?? emptyLevels();
    this.meterLevels[id] = {
      l: d.l,
      r: d.r,
      clipL: prev.clipL || d.clipL,
      clipR: prev.clipR || d.clipR,
    };
  }

  clearClipLatch(id?: string) {
    if (id) {
      const level = this.meterLevels[id];
      if (level) this.meterLevels[id] = { ...level, clipL: false, clipR: false };
      return;
    }
    for (const key of Object.keys(this.meterLevels)) {
      this.meterLevels[key] = { ...this.meterLevels[key], clipL: false, clipR: false };
    }
  }

  private startMeterLoop() {
    const tick = () => {
      if (!this.peakWorkletReady) {
        this.pollAnalyser(MASTER_METER_ID, this.masterAnalyser ?? null);
        for (const [id, nodes] of this.busNodes) this.pollAnalyser(id, nodes.analyser);
      }
      // 复制给 UI，避免调用方持有引擎内部表。
      const snapshot = Object.fromEntries(
        Object.entries(this.meterLevels).map(([id, v]) => [id, { ...v }]),
      );
      this.levelListeners.forEach((fn) => fn(snapshot));
      this.rafHandle = requestAnimationFrame(tick);
    };
    this.rafHandle = requestAnimationFrame(tick);
  }

  private pollAnalyser(id: string, analyser: AnalyserNode | null) {
    if (!analyser) return;
    analyser.getFloatTimeDomainData(this.timeDomainBuf);
    let peak = 0;
    for (let i = 0; i < this.timeDomainBuf.length; i++) {
      const a = Math.abs(this.timeDomainBuf[i]);
      if (a > peak) peak = a;
    }
    const prev = this.meterLevels[id] ?? emptyLevels();
    const clip = peak >= 1;
    this.meterLevels[id] = {
      l: peak,
      r: peak,
      clipL: prev.clipL || clip,
      clipR: prev.clipR || clip,
    };
  }

  // ---------- 全局参数与路由 ----------

  setSpatialSettings(s: SpatialSettings) {
    this.spatial = s;
    if (!this.ctx) return;
    for (const v of this.voices.values()) {
      v.panner.distanceModel = s.distanceModel;
      v.panner.refDistance = s.refDistance;
      v.panner.rolloffFactor = s.rolloffFactor;
      v.panner.maxDistance = s.maxDistance;
    }
  }

  setRoutingProvider(fn: (() => RoutingState | null) | null) {
    this.getLatestRouting = fn;
  }

  /** 完整替换路由/成员/总线状态。调用方必须已经通过 routing 校验。 */
  syncRouting(state: RoutingState) {
    this.routing = {
      buses: state.buses.map((b) => ({ ...b })),
      tracks: state.tracks.map((t) => ({ ...t })),
      masterGain: state.masterGain,
      masterMuted: state.masterMuted,
    };
    if (!this.ctx) return;
    this.reconcileBuses(this.ctx, state.buses);
    this.applyMasterGain();
    for (const track of state.tracks) {
      const voice = this.voices.get(track.id);
      if (voice) this.updateVoiceLive(voice, track, state.buses, state.tracks);
    }
  }

  private applyMasterGain() {
    if (!this.ctx || !this.masterGain) return;
    const value = this.routing.masterMuted ? 0 : this.routing.masterGain;
    this.masterGain.gain.setTargetAtTime(value, this.ctx.currentTime, 0.01);
  }

  /** 听者位置/朝向；朝向定义与 spatial.ts、Three.js 相机严格一致 */
  setListener(l: ListenerState) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const f = forwardVector(l.yaw, l.pitch);
    const u = localUp(l.yaw, l.pitch);
    const li = this.ctx.listener;
    const set = (p: AudioParam | undefined, v: number) => {
      if (p) p.setTargetAtTime(v, t, 0.02);
    };
    set(li.positionX, l.position.x);
    set(li.positionY, l.position.y);
    set(li.positionZ, l.position.z);
    set(li.forwardX, f.x);
    set(li.forwardY, f.y);
    set(li.forwardZ, f.z);
    set(li.upX, u.x);
    set(li.upY, u.y);
    set(li.upZ, u.z);
  }

  private effectiveTrackGain(track: Track, buses: Bus[], allTracks: Track[]): number {
    if (track.muted || this.routing.masterMuted) return 0;
    const byId = new Map(buses.map((b) => [b.id, b]));
    let cur: string | null = track.busId;
    const chain: Bus[] = [];
    const guard = new Set<string>();
    while (cur) {
      if (guard.has(cur)) return 0; // 引擎只接受已校验图，这里防御性处理。
      guard.add(cur);
      const bus = byId.get(cur);
      if (!bus) return 0;
      chain.push(bus);
      cur = bus.parentId;
    }

    const soloBusIds = buses.filter((b) => b.solo).map((b) => b.id);
    if (soloBusIds.length > 0) {
      const active = new Set<string>();
      for (const soloId of soloBusIds) {
        let id: string | null = soloId;
        const seen = new Set<string>();
        while (id && !seen.has(id)) {
          seen.add(id);
          active.add(id);
          id = byId.get(id)?.parentId ?? null;
        }
      }
      if (!chain.some((b) => active.has(b.id))) return 0;
    } else if (allTracks.some((t) => t.solo) && !track.solo) {
      return 0;
    }
    if (chain.some((b) => b.muted)) return 0;
    return track.gain;
  }

  // ---------- 声轨缓冲与节点 ----------

  /**
   * 确保声轨缓冲与节点就绪。
   * 已存在的 voice 只做实时参数更新（位置/增益/总线/loop），绝不重启源。
   */
  async ensureTrack(track: Track): Promise<void> {
    if (!this.ctx || this.unlock !== 'unlocked') return;

    let buffer = this.buffers.get(track.id);
    if (!buffer) {
      if (track.sourceType === 'file') {
        const blob = this.pendingFiles.get(track.id);
        if (!blob) return; // Blob 尚未由 UI 从 IndexedDB 注入
        try {
          const arr = await blob.arrayBuffer();
          // slice(0)：decodeAudioData 会 detach ArrayBuffer，保留原始 Blob 不受影响
          buffer = await this.ctx.decodeAudioData(arr.slice(0));
        } catch (err) {
          throw new DecodeError(
            track.id,
            `音频解码失败：${err instanceof Error ? err.message : '不支持的编码或文件损坏'}`,
          );
        }
      } else {
        buffer = createSampleBuffer(this.ctx, track.sourceType);
      }
      this.buffers.set(track.id, buffer);
    }

    const existing = this.voices.get(track.id);
    if (!existing) {
      this.voices.set(track.id, this.createVoice(track, buffer));
    } else {
      this.updateVoiceLive(existing, track, this.routing.buses, this.routing.tracks);
    }
  }

  /** 文件 Blob 在解锁后由 UI 层提供（来自 IndexedDB，全程本地） */
  setFileBlob(trackId: string, blob: Blob) {
    this.pendingFiles.set(trackId, blob);
  }

  dropBuffer(trackId: string) {
    this.buffers.delete(trackId);
  }

  private createVoice(track: Track, buffer: AudioBuffer): TrackVoice {
    const ctx = this.ctx!;
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.loop = track.loop;

    const trackGain = ctx.createGain();
    trackGain.gain.value = this.effectiveTrackGain(
      track,
      this.routing.buses,
      this.routing.tracks.some((t) => t.id === track.id) ? this.routing.tracks : [...this.routing.tracks, track],
    );

    const panner = new PannerNode(ctx, {
      panningModel: 'HRTF',
      distanceModel: this.spatial?.distanceModel ?? 'inverse',
      refDistance: this.spatial?.refDistance ?? 1,
      rolloffFactor: this.spatial?.rolloffFactor ?? 1,
      maxDistance: this.spatial?.maxDistance ?? 100,
      positionX: track.position.x,
      positionY: track.position.y,
      positionZ: track.position.z,
    });

    // 立体声文件：HRTF 需要单声道输入，显式选取文件原始左/右声道
    if (buffer.numberOfChannels <= 1) {
      source.connect(trackGain);
    } else {
      const splitter = ctx.createChannelSplitter(buffer.numberOfChannels);
      source.connect(splitter);
      const ch = Math.min(track.channel, buffer.numberOfChannels - 1);
      splitter.connect(trackGain, ch);
    }
    trackGain.connect(panner);

    const bus = this.busNodes.get(track.busId);
    if (!bus) throw new Error(`声轨「${track.name}」指向无效总线，无法建立音频节点`);
    panner.connect(bus.gain);

    const voice: TrackVoice = {
      trackId: track.id,
      spec: track,
      source,
      trackGain,
      panner,
      busId: track.busId,
      playing: false,
      consumed: false,
      startedAt: 0,
      offset: 0,
      duration: buffer.duration,
    };

    source.onended = () => {
      if (!voice.playing) return; // stop() 触发的 onended 忽略
      const latest = voice.spec;
      voice.playing = false;
      voice.consumed = true;
      voice.offset = 0;
      // 以最新参数立即重建待播 voice，保证自然结束后再次按播放不会对已结束 source start
      const fresh = this.createVoice(latest, buffer);
      fresh.offset = 0;
      this.voices.set(track.id, fresh);
      this.endedListeners.forEach((fn) => fn(track.id));
    };
    return voice;
  }

  /** 实时参数更新：不触碰 source —— 换总线/移动声源都不会重启音轨 */
  private updateVoiceLive(voice: TrackVoice, track: Track, buses: Bus[], allTracks: Track[]) {
    const ctx = this.ctx!;
    const t = ctx.currentTime;
    const tau = Math.max(0.005, this.spatial?.positionTimeConstant ?? 0.05);

    // 迁移总线：只重接 panner 输出；source/trackGain/panner 节点身份和位置均不变。
    if (voice.busId !== track.busId) {
      const target = this.busNodes.get(track.busId);
      if (!target) throw new Error(`目标总线不存在：${track.busId}`);
      // disconnect 会先移除 PannerNode 的全部（规范上仅一条）总线输出，再接唯一新总线。
      voice.panner.disconnect();
      voice.panner.connect(target.gain);
      voice.busId = track.busId;
    }

    voice.panner.positionX.setTargetAtTime(track.position.x, t, tau);
    voice.panner.positionY.setTargetAtTime(track.position.y, t, tau);
    voice.panner.positionZ.setTargetAtTime(track.position.z, t, tau);
    voice.panner.distanceModel = this.spatial?.distanceModel ?? voice.panner.distanceModel;

    voice.trackGain.gain.setTargetAtTime(this.effectiveTrackGain(track, buses, allTracks), t, 0.01);
    if (voice.source.loop !== track.loop) voice.source.loop = track.loop;
    voice.spec = track;
  }

  /**
   * 高频实时同步：只更新 AudioParam 与 panner 的一条输出连接。
   * 不创建 BufferSource、不 stop/start，移动或换总线均不重启。
   */
  syncTracks(tracks: Track[]) {
    if (!this.ctx) return;
    this.routing.tracks = tracks.map((t) => ({ ...t }));
    for (const tr of tracks) {
      const v = this.voices.get(tr.id);
      if (v) this.updateVoiceLive(v, tr, this.routing.buses, tracks);
    }
  }

  getChannelCount(trackId: string): number | null {
    return this.buffers.get(trackId)?.numberOfChannels ?? null;
  }

  /**
   * 重建声轨输入图（切换立体声文件的 L/R 声道时使用）。
   * 保持播放偏移；若原本在播放，从同一位置继续。总线迁移严禁走此路径。
   */
  async rebuildVoiceGraph(track: Track): Promise<void> {
    await this.ensureTrack(track);
    const old = this.voices.get(track.id);
    const buf = this.buffers.get(track.id);
    if (!old || !buf) return;
    const wasPlaying = old.playing;
    const offset = wasPlaying ? this.currentOffset(old) : old.offset;
    const nv = this.replaceVoice(old, track, buf, offset);
    if (wasPlaying) {
      nv.source.start(this.ctx!.currentTime, offset);
      nv.startedAt = this.ctx!.currentTime;
      nv.playing = true;
      nv.consumed = true;
    }
  }

  // ---------- 传输控制 ----------

  async playTrack(track: Track): Promise<void> {
    await this.ensureTrack(track);
    let voice = this.voices.get(track.id);
    if (!voice) return;
    if (voice.playing) return;
    if (voice.consumed) {
      const buf = this.buffers.get(track.id)!;
      voice = this.replaceVoice(voice, track, buf, voice.offset);
    }
    const ctx = this.ctx!;
    voice.source.start(ctx.currentTime, voice.offset % voice.duration);
    voice.startedAt = ctx.currentTime;
    voice.playing = true;
    voice.consumed = true;
  }

  pauseTrack(track: Track) {
    const voice = this.voices.get(track.id);
    if (!voice || !voice.playing) return;
    voice.offset = this.currentOffset(voice);
    this.replaceVoice(voice, track, this.buffers.get(track.id)!, voice.offset);
  }

  stopTrack(track: Track) {
    const voice = this.voices.get(track.id);
    if (!voice) return;
    if (voice.playing || voice.consumed) {
      this.replaceVoice(voice, track, this.buffers.get(track.id)!, 0);
    } else {
      voice.offset = 0;
    }
  }

  /** 跳转：offsetSec 秒处；autoplay=true 时立即继续播放 */
  async seekTrack(track: Track, offsetSec: number, autoplay: boolean) {
    await this.ensureTrack(track);
    const voice = this.voices.get(track.id);
    const buf = this.buffers.get(track.id);
    if (!voice || !buf) return;
    const offset = track.loop
      ? ((offsetSec % buf.duration) + buf.duration) % buf.duration
      : Math.min(Math.max(0, offsetSec), buf.duration);
    const nv = this.replaceVoice(voice, track, buf, offset);
    if (autoplay) {
      nv.source.start(this.ctx!.currentTime, offset);
      nv.startedAt = this.ctx!.currentTime;
      nv.playing = true;
      nv.consumed = true;
    }
  }

  /**
   * 停止旧节点并按最新参数重建（仅用于暂停/停止/跳转/L-R 输入选择）。
   * 位置移动和总线迁移严禁走此路径。
   */
  private replaceVoice(
    old: TrackVoice,
    track: Track,
    buffer: AudioBuffer,
    offset: number,
  ): TrackVoice {
    try {
      old.source.onended = null;
      old.source.stop();
    } catch {
      /* 已停止 */
    }
    old.source.disconnect();
    old.trackGain.disconnect();
    old.panner.disconnect();
    const nv = this.createVoice(track, buffer);
    nv.offset = offset;
    this.voices.set(track.id, nv);
    return nv;
  }

  private currentOffset(v: TrackVoice): number {
    let p = v.offset + (this.ctx!.currentTime - v.startedAt);
    p = v.spec.loop ? ((p % v.duration) + v.duration) % v.duration : Math.min(p, v.duration);
    return p;
  }

  removeTrack(trackId: string) {
    const voice = this.voices.get(trackId);
    if (voice) {
      try {
        voice.source.onended = null;
        voice.source.stop();
      } catch {
        /* ignore */
      }
      voice.source.disconnect();
      voice.trackGain.disconnect();
      voice.panner.disconnect();
    }
    this.voices.delete(trackId);
    this.buffers.delete(trackId);
    this.pendingFiles.delete(trackId);
  }

  getProgress(trackId: string): number | null {
    const v = this.voices.get(trackId);
    if (!v) return null;
    return v.playing ? this.currentOffset(v) : v.offset;
  }

  getDuration(trackId: string): number | null {
    return this.buffers.get(trackId)?.duration ?? null;
  }

  isPlaying(trackId: string): boolean {
    return this.voices.get(trackId)?.playing ?? false;
  }

  dispose() {
    this.disposed = true;
    this.workletGeneration += 1;
    cancelAnimationFrame(this.rafHandle);
    for (const id of [...this.voices.keys()]) this.removeTrack(id);
    for (const nodes of this.busNodes.values()) this.disconnectBusNode(nodes);
    this.busNodes.clear();
    void this.ctx?.close();
    this.ctx = null;
    this.masterGain = null;
    this.masterAnalyser = null;
    this.masterWorklet = null;
    this.peakWorkletReady = false;
    this.workletFailed = false;
    this.unlock = 'locked';
  }
}

/**
 * 听者本地 +Y(上) 经 yaw(绕世界Y，正值右转) 与 pitch(绕本地右向量，正值抬头)
 * 后的世界上方向量。满足 right = forward × up。
 */
function localUp(yaw: number, pitch: number): { x: number; y: number; z: number } {
  const cp = Math.cos(pitch);
  const sp = Math.sin(pitch);
  return {
    x: -sp * Math.sin(yaw),
    y: cp,
    z: sp * Math.cos(yaw),
  };
}
