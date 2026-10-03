import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { ProjectDoc, Track } from '../src/types.ts';
import {
  RoutingError,
  assertCanDeleteBus,
  commitRouting,
  createDefaultBuses,
  isTrackAudibleInDoc,
  normalizeProjectDoc,
  validateRouting,
} from '../src/lib/routing.ts';

function track(id: string, busId: string, over: Partial<Track> = {}): Track {
  return {
    id,
    name: id,
    sourceType: 'tone',
    busId,
    loop: true,
    muted: false,
    solo: false,
    gain: 0.8,
    channel: 0,
    color: '#fff',
    position: { x: 0, y: 0, z: 0 },
    status: 'ready',
    ...over,
  };
}

function doc(): ProjectDoc {
  return {
    version: 2,
    routeVersion: 1,
    buses: createDefaultBuses(),
    tracks: [track('a', 'bus-a'), track('b', 'bus-b')],
    listener: { position: { x: 0, y: 0, z: 3 }, yaw: 0, pitch: 0, earHeight: 0 },
    spatial: {
      distanceModel: 'inverse',
      refDistance: 1,
      rolloffFactor: 1,
      maxDistance: 30,
      positionTimeConstant: 0.06,
      hrtfIR: 'none',
    },
    masterGain: 0.9,
    masterMuted: false,
    savedAt: 0,
  };
}

describe('持久化多总线路由', () => {
  it('v1 工程迁移为 v2：两条声轨轮流归属两个总线，主输出状态保留', () => {
    const v1 = {
      version: 1,
      tracks: [track('a', 'missing'), track('b', 'missing')],
      listener: doc().listener,
      spatial: doc().spatial,
      busGain: 0.5,
      masterGain: 0.7,
      savedAt: 123,
    } as unknown as Parameters<typeof normalizeProjectDoc>[0];
    const restored = normalizeProjectDoc(v1);
    assert.equal(restored.version, 2);
    assert.equal(restored.tracks[0].busId, 'bus-a');
    assert.equal(restored.tracks[1].busId, 'bus-b');
    assert.equal(restored.masterGain, 0.7);
    assert.equal(restored.masterMuted, false);
  });

  it('每条轨必须恰好归属一个有效总线；悬空成员校验失败', () => {
    const d = doc();
    d.tracks[0].busId = 'gone';
    assert.throws(() => validateRouting(d.buses, d.tracks), RoutingError);
  });

  it('直接自环和经过后代的循环都原子拒绝', () => {
    const d = doc();
    assert.throws(
      () =>
        commitRouting(d, (draft) => {
          draft.buses[0].parentId = draft.buses[0].id;
        }),
      /循环/,
    );
    assert.equal(d.buses[0].parentId, null);
    assert.equal(d.routeVersion, 1);

    const withChild = commitRouting(d, (draft) => {
      draft.buses.push({ id: 'bus-c', name: 'C', parentId: 'bus-a', gain: 1, muted: false, solo: false, color: '#fff' });
    });
    assert.throws(
      () =>
        commitRouting(withChild, (draft) => {
          draft.buses.find((b) => b.id === 'bus-a')!.parentId = 'bus-c';
        }),
      /循环/,
    );
    assert.equal(withChild.buses.find((b) => b.id === 'bus-a')!.parentId, null);
  });

  it('删除仍有成员或子总线的总线失败，旧图和 routeVersion 保留', () => {
    const d = doc();
    assert.throws(() => assertCanDeleteBus(d, 'bus-a'), /成员/);
    const nested = commitRouting(d, (draft) => {
      draft.tracks = [];
      draft.buses.push({ id: 'bus-c', name: 'C', parentId: 'bus-a', gain: 1, muted: false, solo: false, color: '#fff' });
    });
    assert.throws(() => assertCanDeleteBus(nested, 'bus-a'), /子总线/);
    assert.equal(nested.buses.length, 3);
    assert.equal(nested.routeVersion, 2);
  });

  it('移动成员是成功事务；routeVersion 每次成功加一', () => {
    const d = doc();
    const next = commitRouting(d, (draft) => {
      draft.tracks[0].busId = 'bus-b';
    });
    assert.equal(next.tracks[0].busId, 'bus-b');
    assert.equal(next.routeVersion, 2);
    assert.equal(d.tracks[0].busId, 'bus-a');
  });

  it('总线独奏时其他总线静音，但独奏总线中已 M 的轨仍静音；轨 M/S 优先级一致', () => {
    const d = doc();
    d.tracks[0].muted = true;
    d.buses[0].solo = true;
    assert.equal(isTrackAudibleInDoc(d.tracks[0], d), false);
    assert.equal(isTrackAudibleInDoc(d.tracks[1], d), false);
    d.tracks[0].muted = false;
    assert.equal(isTrackAudibleInDoc(d.tracks[0], d), true);

    d.buses[0].solo = false;
    d.tracks[1].solo = true;
    d.tracks[0].solo = true;
    assert.equal(isTrackAudibleInDoc(d.tracks[0], d), true);
    assert.equal(isTrackAudibleInDoc(d.tracks[1], d), true);
    d.tracks[0].solo = false;
    assert.equal(isTrackAudibleInDoc(d.tracks[0], d), false);
  });
});
