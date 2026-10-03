import {
  CURRENT_PROJECT_VERSION,
  type Bus,
  type ProjectDoc,
  type Track,
} from '../types';

export const DEFAULT_BUS_IDS = ['bus-a', 'bus-b'] as const;

const BUS_COLORS = ['#4ecdc4', '#a78bfa', '#f472b6', '#34d399', '#60a5fa', '#ffe066'];

interface LegacyProject {
  version?: number;
  routeVersion?: number;
  buses?: Bus[];
  tracks: Array<Omit<Track, 'busId'> & { busId?: string }>;
  listener: ProjectDoc['listener'];
  spatial: ProjectDoc['spatial'];
  busGain?: number;
  masterGain?: number;
  masterMuted?: boolean;
  savedAt?: number;
  name?: string;
}

export class RoutingError extends Error {
  code: 'cycle' | 'dangling' | 'nonempty-bus' | 'empty-bus';
  constructor(code: RoutingError['code'], message: string) {
    super(message);
    this.name = 'RoutingError';
    this.code = code;
  }
}

export function createDefaultBuses(): Bus[] {
  return [
    { id: DEFAULT_BUS_IDS[0], name: '总线 A', parentId: null, gain: 1, muted: false, solo: false, color: BUS_COLORS[0] },
    { id: DEFAULT_BUS_IDS[1], name: '总线 B', parentId: null, gain: 1, muted: false, solo: false, color: BUS_COLORS[1] },
  ];
}

export function createBus(id: string, index: number, parentId: string | null = null): Bus {
  return {
    id,
    name: `总线 ${String.fromCharCode(65 + index)}`,
    parentId,
    gain: 1,
    muted: false,
    solo: false,
    color: BUS_COLORS[index % BUS_COLORS.length],
  };
}

export function defaultBusIdForTrack(buses: Bus[], trackIndex: number): string {
  return buses[trackIndex % Math.max(buses.length, 1)]?.id ?? DEFAULT_BUS_IDS[0];
}

/**
 * 归一化来自 IndexedDB/旧版本的文档。
 * 旧 v1：busGain 不再使用；track 无 busId，按声明顺序轮流归入两条本地总线。
 */
export function normalizeProjectDoc(raw: LegacyProject): ProjectDoc {
  const buses = raw.buses?.length ? raw.buses.map((b) => ({ ...b })) : createDefaultBuses();
  const validIds = new Set(buses.map((b) => b.id));
  const tracks: Track[] = raw.tracks.map((t, i) => {
    const { busId: stored, ...rest } = t;
    const busId = stored && validIds.has(stored) ? stored : buses[i % buses.length].id;
    return { ...rest, busId };
  });

  const doc: ProjectDoc = {
    version: CURRENT_PROJECT_VERSION,
    routeVersion: typeof raw.routeVersion === 'number' && raw.routeVersion >= 0 ? raw.routeVersion : 1,
    buses,
    tracks,
    listener: raw.listener,
    spatial: raw.spatial,
    masterGain: typeof raw.masterGain === 'number' ? raw.masterGain : 0.9,
    masterMuted: raw.masterMuted ?? false,
    savedAt: raw.savedAt ?? 0,
    name: raw.name,
  };
  validateRouting(doc.buses, doc.tracks);
  return doc;
}

export function validateRouting(buses: Bus[], tracks: Track[]): void {
  if (buses.length === 0) {
    throw new RoutingError('empty-bus', '至少必须保留一个有效总线');
  }

  const byId = new Map<string, Bus>();
  for (const bus of buses) {
    if (byId.has(bus.id)) throw new RoutingError('dangling', `总线 id 重复：${bus.id}`);
    byId.set(bus.id, bus);
  }
  for (const bus of buses) {
    if (bus.parentId !== null && !byId.has(bus.parentId)) {
      throw new RoutingError('dangling', `总线「${bus.name}」指向已不存在的父总线`);
    }
  }

  // 沿父链检测自环与任意长度环。
  for (const start of buses) {
    const seen = new Set<string>();
    let cur: string | null = start.id;
    while (cur) {
      if (seen.has(cur)) {
        throw new RoutingError('cycle', `检测到循环路由：${[...seen, cur].join(' → ')}`);
      }
      seen.add(cur);
      cur = byId.get(cur)?.parentId ?? null;
    }
  }

  for (const track of tracks) {
    if (!byId.has(track.busId)) {
      throw new RoutingError('dangling', `声轨「${track.name}」没有归属到有效总线`);
    }
  }
}

/** 提交前深拷贝并验证；任何异常都发生在调用方状态替换之前。 */
export function commitRouting(doc: ProjectDoc, recipe: (draft: ProjectDoc) => void): ProjectDoc {
  const draft: ProjectDoc = structuredClone(doc);
  recipe(draft);
  validateRouting(draft.buses, draft.tracks);
  draft.routeVersion = doc.routeVersion + 1;
  return draft;
}

export function assertCanDeleteBus(doc: ProjectDoc, busId: string): void {
  if (doc.buses.length <= 1) {
    throw new RoutingError('empty-bus', '不能删除最后一个有效总线');
  }
  if (doc.tracks.some((t) => t.busId === busId)) {
    throw new RoutingError('nonempty-bus', '该总线仍有声轨成员，请先迁移后再删除');
  }
  if (doc.buses.some((b) => b.parentId === busId)) {
    throw new RoutingError('nonempty-bus', '该总线仍有子总线，请先改接子总线后再删除');
  }
}

/** 返回自身及所有祖先，便于判断 bus 是否位于某个独奏总线子树之下。 */
export function ancestorBusIds(buses: Bus[], busId: string | null): Set<string> {
  const byId = new Map(buses.map((b) => [b.id, b]));
  const out = new Set<string>();
  let cur = busId;
  while (cur && !out.has(cur)) {
    out.add(cur);
    cur = byId.get(cur)?.parentId ?? null;
  }
  return out;
}

/** 返回该总线的所有后代，重接父总线时用于防止把节点移到自己的子树中。 */
export function descendantBusIds(buses: Bus[], busId: string): Set<string> {
  const out = new Set<string>();
  const walk = (id: string) => {
    for (const b of buses) {
      if (b.parentId === id && !out.has(b.id)) {
        out.add(b.id);
        walk(b.id);
      }
    }
  };
  walk(busId);
  return out;
}

export function routeSnapshot(buses: Bus[], tracks: Track[]) {
  const soloBuses = buses.filter((b) => b.solo).map((b) => b.id);
  const soloAncestors = new Set<string>();
  soloBuses.forEach((id) => ancestorBusIds(buses, id).forEach((x) => soloAncestors.add(x)));
  const anyBusSolo = soloBuses.length > 0;
  const anyTrackSolo = tracks.some((t) => t.solo);

  return {
    anyBusSolo,
    anyTrackSolo,
    busActive: new Map<string, boolean>(
      buses.map((b) => [b.id, !b.muted && (!anyBusSolo || soloAncestors.has(b.id))]),
    ),
  };
}

export function isTrackAudibleInDoc(track: Track, doc: ProjectDoc): boolean {
  if (track.muted || doc.masterMuted) return false;
  const { anyTrackSolo, busActive } = routeSnapshot(doc.buses, doc.tracks);
  if (!busActive.get(track.busId)) return false;
  if (anyTrackSolo && !track.solo) return false;
  return true;
}
