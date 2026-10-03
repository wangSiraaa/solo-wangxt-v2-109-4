/**
 * 路由图纯函数模块 —— 与 React / Web Audio 完全解耦，可独立测试。
 *
 * 不变量（所有事务函数共同保证）：
 *  1. 至少存在一条总线；
 *  2. 每条声轨的 busId 恰好指向一条存在的总线（无悬空成员）；
 *  3. 总线 output 指向 'master' 或另一条总线，且沿 output 链不成环（DAG）；
 *  4. 每次成功的事务使 version 严格 +1。
 *
 * 事务语义：所有函数都是纯函数，先完整校验再一次性返回新对象；
 * 校验失败抛 RoutingError，绝不部分修改入参 —— 调用方保留旧图即为原子回滚。
 */
import type { Bus, ProjectDoc, RoutingGraph, Track } from '../types';

/** 主输出在路由图中的固定 id */
export const MASTER_OUTPUT_ID = 'master';
/** 默认总线 id（新工程与 v1 迁移共用，保持稳定以便测试与恢复） */
export const DEFAULT_BUS_ID = 'bus-main';

export class RoutingError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RoutingError';
  }
}

const BUS_COLORS = ['#4ecdc4', '#ffe066', '#a78bfa', '#f472b6', '#34d399', '#60a5fa', '#e8734a'];

let busCounter = 0;
function nextBusId(): string {
  busCounter += 1;
  return `bus-${Date.now().toString(36)}-${busCounter}`;
}

export function createDefaultRouting(): RoutingGraph {
  return {
    version: 1,
    buses: [
      {
        id: DEFAULT_BUS_ID,
        name: '总线 A',
        gain: 1,
        muted: false,
        solo: false,
        output: MASTER_OUTPUT_ID,
        color: BUS_COLORS[0],
      },
    ],
  };
}

// ---------- 校验 ----------

/** 沿 output 链从 startId 出发会经过的总线 id 序列（含起点，遇环截断） */
export function outputChain(buses: Bus[], startId: string): string[] {
  const byId = new Map(buses.map((b) => [b.id, b]));
  const chain: string[] = [];
  const seen = new Set<string>();
  let cur: Bus | undefined = byId.get(startId);
  while (cur && !seen.has(cur.id)) {
    seen.add(cur.id);
    chain.push(cur.id);
    if (cur.output === MASTER_OUTPUT_ID) break;
    cur = byId.get(cur.output);
  }
  return chain;
}

/** 把 busId 的输出改为 newOutput 是否会成环（newOutput 的下游链包含 busId 即成环） */
export function wouldCreateCycle(buses: Bus[], busId: string, newOutput: string): boolean {
  if (newOutput === MASTER_OUTPUT_ID) return false;
  if (newOutput === busId) return true;
  if (!buses.some((b) => b.id === newOutput)) return false; // 悬空目标另行报错
  return outputChain(buses, newOutput).includes(busId);
}

/** 校验整图；任何问题抛 RoutingError。供事务末尾与恢复时自检 */
export function validateRouting(routing: RoutingGraph, tracks: Track[]): void {
  if (routing.buses.length === 0) {
    throw new RoutingError('路由图至少需要一条总线');
  }
  const ids = new Set<string>();
  for (const b of routing.buses) {
    if (ids.has(b.id)) throw new RoutingError(`总线 id 重复：${b.id}`);
    ids.add(b.id);
    if (b.output !== MASTER_OUTPUT_ID && !ids.has(b.output) && !routing.buses.some((x) => x.id === b.output)) {
      throw new RoutingError(`总线「${b.name}」的输出指向不存在的总线`);
    }
  }
  for (const b of routing.buses) {
    const chain = outputChain(routing.buses, b.id);
    // 链未终止于 master 且长度达到总线数上限 → 存在环
    const last = routing.buses.find((x) => x.id === chain[chain.length - 1]);
    if (last && last.output !== MASTER_OUTPUT_ID && chain.includes(last.output)) {
      throw new RoutingError(`总线「${b.name}」的输出链存在循环`);
    }
  }
  for (const t of tracks) {
    if (!ids.has(t.busId)) {
      throw new RoutingError(`声轨「${t.name}」归属的总线不存在（悬空成员）`);
    }
  }
}

/** 悬空成员：busId 指向不存在总线的声轨 id 列表 */
export function findDanglingMembers(routing: RoutingGraph, tracks: Track[]): string[] {
  const ids = new Set(routing.buses.map((b) => b.id));
  return tracks.filter((t) => !ids.has(t.busId)).map((t) => t.id);
}

// ---------- 事务（纯函数，失败抛错即原子回滚） ----------

export interface RoutingTxn {
  routing: RoutingGraph;
  tracks: Track[];
}

function commit(routing: RoutingGraph, tracks: Track[]): RoutingTxn {
  const next: RoutingGraph = { ...routing, version: routing.version + 1 };
  validateRouting(next, tracks); // 提交前整体自检，失败则抛错、不返回任何部分结果
  return { routing: next, tracks };
}

/** 新增总线（默认输出到主输出） */
export function addBus(routing: RoutingGraph, tracks: Track[], name?: string): RoutingTxn & { busId: string } {
  const id = nextBusId();
  const bus: Bus = {
    id,
    name: name?.trim() || `总线 ${String.fromCharCode(65 + (routing.buses.length % 26))}`,
    gain: 1,
    muted: false,
    solo: false,
    output: MASTER_OUTPUT_ID,
    color: BUS_COLORS[routing.buses.length % BUS_COLORS.length],
  };
  const r = commit({ ...routing, buses: [...routing.buses, bus] }, tracks);
  return { ...r, busId: id };
}

/** 删除总线：仍有成员时原子失败（调用方保留旧图）；不允许删除最后一条总线 */
export function removeBus(routing: RoutingGraph, tracks: Track[], busId: string): RoutingTxn {
  const bus = routing.buses.find((b) => b.id === busId);
  if (!bus) throw new RoutingError('要删除的总线不存在');
  if (routing.buses.length <= 1) throw new RoutingError('至少保留一条总线，无法删除');
  const members = tracks.filter((t) => t.busId === busId);
  if (members.length > 0) {
    throw new RoutingError(
      `总线「${bus.name}」仍有 ${members.length} 条声轨，需先移出成员再删除`,
    );
  }
  // 以下级联总线改挂到被删总线的原输出，保持图连通
  const buses = routing.buses
    .filter((b) => b.id !== busId)
    .map((b) => (b.output === busId ? { ...b, output: bus.output } : b));
  return commit({ ...routing, buses }, tracks);
}

/** 把一条声轨迁移到另一条总线（目标必须存在） */
export function moveTrackToBus(
  routing: RoutingGraph,
  tracks: Track[],
  trackId: string,
  busId: string,
): RoutingTxn {
  if (!routing.buses.some((b) => b.id === busId)) {
    throw new RoutingError('目标总线不存在，无法迁移声轨');
  }
  const track = tracks.find((t) => t.id === trackId);
  if (!track) throw new RoutingError('要迁移的声轨不存在');
  if (track.busId === busId) return { routing, tracks }; // 无操作，不推进版本
  const nextTracks = tracks.map((t) => (t.id === trackId ? { ...t, busId } : t));
  return commit(routing, nextTracks);
}

/** 修改总线输出目标：自成环/间接成环/目标不存在均原子失败 */
export function setBusOutput(
  routing: RoutingGraph,
  tracks: Track[],
  busId: string,
  output: string,
): RoutingTxn {
  const bus = routing.buses.find((b) => b.id === busId);
  if (!bus) throw new RoutingError('总线不存在');
  if (output !== MASTER_OUTPUT_ID && !routing.buses.some((b) => b.id === output)) {
    throw new RoutingError('输出目标不存在');
  }
  if (wouldCreateCycle(routing.buses, busId, output)) {
    throw new RoutingError(`该输出会形成循环路由，已拒绝（「${bus.name}」保持原输出）`);
  }
  if (bus.output === output) return { routing, tracks };
  const buses = routing.buses.map((b) => (b.id === busId ? { ...b, output } : b));
  return commit({ ...routing, buses }, tracks);
}

/** 更新总线参数（增益/静音/独奏/名称） */
export function patchBus(
  routing: RoutingGraph,
  tracks: Track[],
  busId: string,
  patch: Partial<Pick<Bus, 'gain' | 'muted' | 'solo' | 'name'>>,
): RoutingTxn {
  if (!routing.buses.some((b) => b.id === busId)) throw new RoutingError('总线不存在');
  const buses = routing.buses.map((b) => (b.id === busId ? { ...b, ...patch } : b));
  return commit({ ...routing, buses }, tracks);
}

// ---------- 恢复 / 迁移 ----------

interface LegacyDocV1 {
  version?: number;
  tracks?: Array<Partial<Track>>;
  listener?: ProjectDoc['listener'];
  spatial?: ProjectDoc['spatial'];
  /** v1 的单一总线增益 */
  busGain?: number;
  routing?: RoutingGraph;
  masterGain?: number;
  savedAt?: number;
  name?: string;
}

/**
 * 把任意历史/损坏的持久化文档规整为当前版本：
 *  - v1（单一 busGain）→ 迁移为一条默认总线，全部声轨挂入；
 *  - 缺失 busId 的声轨挂到首条总线（消除悬空成员）；
 *  - 成环的 output 链被打断并重挂 master；
 *  - 空总线表补一条默认总线。
 * 纯函数；播放状态不在此处（调用方负责一律置停）。
 */
export function normalizeDoc(raw: LegacyDocV1): ProjectDoc {
  let routing: RoutingGraph;
  if (raw.routing && Array.isArray(raw.routing.buses) && raw.routing.buses.length > 0) {
    routing = {
      version: Math.max(1, raw.routing.version ?? 1),
      buses: raw.routing.buses.map((b, i) => ({
        id: b.id,
        name: b.name ?? `总线 ${i + 1}`,
        gain: typeof b.gain === 'number' ? b.gain : 1,
        muted: !!b.muted,
        solo: !!b.solo,
        output: b.output ?? MASTER_OUTPUT_ID,
        color: b.color ?? BUS_COLORS[i % BUS_COLORS.length],
      })),
    };
  } else {
    // v1 迁移：单一 busGain → 一条默认总线
    const def = createDefaultRouting();
    def.buses[0].gain = typeof raw.busGain === 'number' ? raw.busGain : 1;
    routing = def;
  }

  // 修复 1：打断 output 环 / 悬空输出 → 重挂 master
  const ids = new Set(routing.buses.map((b) => b.id));
  routing = {
    ...routing,
    buses: routing.buses.map((b) => {
      if (b.output !== MASTER_OUTPUT_ID && !ids.has(b.output)) {
        return { ...b, output: MASTER_OUTPUT_ID };
      }
      if (b.output !== MASTER_OUTPUT_ID && wouldCreateCycle(routing.buses, b.id, b.output)) {
        return { ...b, output: MASTER_OUTPUT_ID };
      }
      return b;
    }),
  };

  // 修复 2：声轨悬空 busId → 首条总线
  const fallbackBus = routing.buses[0].id;
  const busIds = new Set(routing.buses.map((b) => b.id));
  const tracks: Track[] = (raw.tracks ?? []).map((t) => ({
    ...(t as Track),
    busId: t.busId && busIds.has(t.busId) ? t.busId : fallbackBus,
  }));

  const doc: ProjectDoc = {
    version: 2,
    tracks,
    listener: raw.listener as ProjectDoc['listener'],
    spatial: raw.spatial as ProjectDoc['spatial'],
    routing,
    masterGain: typeof raw.masterGain === 'number' ? raw.masterGain : 0.9,
    savedAt: raw.savedAt ?? 0,
    name: raw.name,
  };
  validateRouting(doc.routing, doc.tracks); // 规整后必须满足全部不变量
  return doc;
}
