/**
 * 路由图纯函数测试：
 *  - 不变量：每轨恰好归属一条有效总线、图无环、版本单调
 *  - 事务原子性：循环路由 / 删除有成员的总线 → 抛错且入参不被修改（旧图保留）
 *  - v1 持久化文档迁移与损坏数据修复（悬空成员、环、空总线表）
 */
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  DEFAULT_BUS_ID,
  MASTER_OUTPUT_ID,
  RoutingError,
  addBus,
  createDefaultRouting,
  findDanglingMembers,
  moveTrackToBus,
  normalizeDoc,
  outputChain,
  patchBus,
  removeBus,
  setBusOutput,
  validateRouting,
  wouldCreateCycle,
} from '../src/lib/routing.ts';
import type { RoutingGraph, Track } from '../src/types.ts';

function track(id: string, busId: string = DEFAULT_BUS_ID): Track {
  return {
    id,
    name: `轨 ${id}`,
    sourceType: 'tone',
    loop: true,
    muted: false,
    solo: false,
    busId,
    gain: 0.9,
    channel: 0,
    color: '#fff',
    position: { x: 0, y: 0, z: 0 },
    status: 'pending',
  };
}

function threeBuses(): { r: RoutingGraph; a: string; b: string; c: string } {
  const r0 = createDefaultRouting();
  const r1 = addBus(r0, [], 'B');
  const r2 = addBus(r1.routing, [], 'C');
  return { r: r2.routing, a: DEFAULT_BUS_ID, b: r1.busId, c: r2.busId };
}

describe('路由图事务与不变量', () => {
  it('默认路由：一条总线输出到主输出，版本为 1', () => {
    const r = createDefaultRouting();
    assert.equal(r.version, 1);
    assert.equal(r.buses.length, 1);
    assert.equal(r.buses[0].output, MASTER_OUTPUT_ID);
    validateRouting(r, []);
  });

  it('新增总线推进版本且旧图不被修改（不可变事务）', () => {
    const r0 = createDefaultRouting();
    const before = JSON.stringify(r0);
    const { routing: r1, busId } = addBus(r0, []);
    assert.equal(r1.version, 2);
    assert.equal(r1.buses.length, 2);
    assert.ok(r1.buses.some((b) => b.id === busId));
    assert.equal(JSON.stringify(r0), before, '原图未被修改');
  });

  it('每条轨恰好归属一条有效总线：迁移后归属更新，悬空校验通过', () => {
    const { r, b } = (() => {
      const r0 = createDefaultRouting();
      const r1 = addBus(r0, [], 'B');
      return { r: r1.routing, b: r1.busId };
    })();
    const tracks = [track('t1'), track('t2')];
    const { routing, tracks: next } = moveTrackToBus(r, tracks, 't1', b);
    assert.equal(next.find((t) => t.id === 't1')!.busId, b);
    assert.equal(next.find((t) => t.id === 't2')!.busId, DEFAULT_BUS_ID);
    validateRouting(routing, next);
    assert.equal(findDanglingMembers(routing, next).length, 0);
    assert.equal(routing.version, r.version + 1);
  });

  it('迁移到不存在的总线：原子失败，tracks 引用不变', () => {
    const r = createDefaultRouting();
    const tracks = [track('t1')];
    assert.throws(() => moveTrackToBus(r, tracks, 't1', 'bus-ghost'), RoutingError);
    // 无返回值即无提交；调用方仍持有旧 tracks
    assert.equal(tracks[0].busId, DEFAULT_BUS_ID);
  });

  it('直接自环与间接循环路由都被拒绝，旧图保持不变', () => {
    const { r, a, b, c } = threeBuses();
    // 自环
    assert.throws(() => setBusOutput(r, [], a, a), RoutingError);
    // 构造 B → A，然后 A → B 会成环
    const r1 = setBusOutput(r, [], b, a).routing;
    assert.equal(r1.buses.find((x) => x.id === b)!.output, a);
    assert.throws(() => setBusOutput(r1, [], a, b), RoutingError);
    // 三级：C → B，B → A，再尝试 A → C（间接环）
    const r2 = setBusOutput(r1, [], c, b).routing;
    assert.ok(wouldCreateCycle(r2.buses, a, c));
    assert.throws(() => setBusOutput(r2, [], a, c), RoutingError);
    // 失败未产生任何提交：r2 中 A 仍输出 master，链完整无环
    assert.equal(r2.buses.find((x) => x.id === a)!.output, MASTER_OUTPUT_ID);
    validateRouting(r2, []);
    assert.deepEqual(outputChain(r2.buses, c), [c, b, a]);
  });

  it('删除仍有成员的总线：原子失败并保留旧图；移出成员后可删除', () => {
    const r0 = createDefaultRouting();
    const { routing: r1, busId: b } = addBus(r0, []);
    let tracks = [track('t1'), track('t2')];
    tracks = moveTrackToBus(r1, tracks, 't2', b).tracks;

    const before = JSON.stringify({ r: r1, tracks });
    assert.throws(
      () => removeBus(r1, tracks, b),
      (err: unknown) => err instanceof RoutingError && /仍有 1 条声轨/.test((err as Error).message),
    );
    assert.equal(JSON.stringify({ r: r1, tracks }), before, '失败后旧图与成员原样保留');

    // 移出成员后删除成功，版本推进
    const r2 = moveTrackToBus(r1, tracks, 't2', DEFAULT_BUS_ID);
    const r3 = removeBus(r2.routing, r2.tracks, b);
    assert.equal(r3.routing.buses.length, 1);
    validateRouting(r3.routing, r3.tracks);
  });

  it('删除最后一条总线被拒绝', () => {
    const r = createDefaultRouting();
    assert.throws(() => removeBus(r, [], DEFAULT_BUS_ID), RoutingError);
  });

  it('删除有下级级联的总线时，下级重挂到被删总线的原输出', () => {
    const { r, a, b, c } = threeBuses();
    // B → A，C → B；删除 B 后 C 应重挂到 A
    const r1 = setBusOutput(r, [], b, a).routing;
    const r2 = setBusOutput(r1, [], c, b).routing;
    const r3 = removeBus(r2, [], b);
    assert.equal(r3.routing.buses.find((x) => x.id === c)!.output, a);
    validateRouting(r3.routing, []);
  });

  it('总线参数修补（增益/静音/独奏/名称）推进版本', () => {
    const r = createDefaultRouting();
    const { routing: r1 } = patchBus(r, [], DEFAULT_BUS_ID, { gain: 0.5, muted: true });
    const bus = r1.buses[0];
    assert.equal(bus.gain, 0.5);
    assert.equal(bus.muted, true);
    assert.equal(r1.version, r.version + 1);
    assert.throws(() => patchBus(r, [], 'ghost', { gain: 1 }), RoutingError);
  });

  it('validateRouting 拒绝悬空成员与空总线表', () => {
    const r = createDefaultRouting();
    assert.throws(() => validateRouting(r, [track('t1', 'ghost')]), /悬空成员/);
    assert.throws(() => validateRouting({ version: 1, buses: [] }, []), /至少需要一条总线/);
  });
});

describe('持久化恢复与迁移', () => {
  it('v1 文档迁移：单一 busGain → 默认总线，全部声轨挂入', () => {
    const v1 = {
      version: 1,
      tracks: [
        { ...track('t1'), busId: undefined as unknown as string },
        { ...track('t2'), busId: undefined as unknown as string },
      ].map(({ busId: _drop, ...rest }) => rest), // v1 声轨没有 busId 字段
      listener: { position: { x: 0, y: 0, z: 3 }, yaw: 0, pitch: 0, earHeight: 0 },
      spatial: {
        distanceModel: 'inverse',
        refDistance: 1,
        rolloffFactor: 1,
        maxDistance: 30,
        positionTimeConstant: 0.06,
        hrtfIR: 'none',
      },
      busGain: 0.66,
      masterGain: 0.8,
      savedAt: 123,
    };
    const doc = normalizeDoc(v1 as never);
    assert.equal(doc.version, 2);
    assert.equal(doc.routing.buses.length, 1);
    assert.equal(doc.routing.buses[0].gain, 0.66, '旧 busGain 迁移到默认总线');
    assert.equal(doc.masterGain, 0.8);
    for (const t of doc.tracks) assert.equal(t.busId, DEFAULT_BUS_ID);
    validateRouting(doc.routing, doc.tracks);
  });

  it('损坏恢复：悬空成员重挂首条总线，成环输出被打断到 master', () => {
    const broken = {
      version: 2,
      tracks: [track('t1', 'ghost-bus')],
      listener: { position: { x: 0, y: 0, z: 3 }, yaw: 0, pitch: 0, earHeight: 0 },
      spatial: {
        distanceModel: 'inverse',
        refDistance: 1,
        rolloffFactor: 1,
        maxDistance: 30,
        positionTimeConstant: 0.06,
        hrtfIR: 'none',
      },
      routing: {
        version: 7,
        buses: [
          { id: 'A', name: 'A', gain: 1, muted: false, solo: false, output: 'B', color: '#111' },
          { id: 'B', name: 'B', gain: 1, muted: false, solo: true, output: 'A', color: '#222' },
        ],
      },
      masterGain: 0.9,
      savedAt: 1,
    };
    const doc = normalizeDoc(broken as never);
    // 环被打断：所有 output 链最终到达 master
    for (const b of doc.routing.buses) {
      const chain = outputChain(doc.routing.buses, b.id);
      const last = doc.routing.buses.find((x) => x.id === chain[chain.length - 1])!;
      assert.equal(last.output, MASTER_OUTPUT_ID);
    }
    // 悬空成员挂到首条总线
    assert.equal(doc.tracks[0].busId, doc.routing.buses[0].id);
    // 总线状态（solo/gain）被保留
    assert.equal(doc.routing.buses.find((b) => b.id === 'B')!.solo, true);
    validateRouting(doc.routing, doc.tracks);
  });

  it('合法 v2 文档原样通过（总线状态与成员归属保留）', () => {
    const { r, b } = (() => {
      const r0 = createDefaultRouting();
      const r1 = addBus(r0, [], 'B');
      return { r: r1.routing, b: r1.busId };
    })();
    const routing: RoutingGraph = {
      ...r,
      buses: r.buses.map((x) => (x.id === b ? { ...x, gain: 0.4, muted: true } : x)),
    };
    const tracks = [track('t1'), { ...track('t2'), busId: b }];
    const doc = normalizeDoc({
      version: 2,
      tracks,
      listener: { position: { x: 0, y: 0, z: 3 }, yaw: 0, pitch: 0, earHeight: 0 },
      spatial: {
        distanceModel: 'inverse',
        refDistance: 1,
        rolloffFactor: 1,
        maxDistance: 30,
        positionTimeConstant: 0.06,
        hrtfIR: 'none',
      },
      routing,
      masterGain: 0.7,
      savedAt: 5,
    } as never);
    assert.equal(doc.routing.buses.find((x) => x.id === b)!.gain, 0.4);
    assert.equal(doc.routing.buses.find((x) => x.id === b)!.muted, true);
    assert.equal(doc.tracks.find((t) => t.id === 't2')!.busId, b);
    assert.equal(doc.masterGain, 0.7);
  });
});
