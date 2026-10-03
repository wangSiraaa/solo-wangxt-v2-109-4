// test/routing.test.ts
import assert from "node:assert/strict";
import { describe, it } from "node:test";

// src/lib/routing.ts
var MASTER_OUTPUT_ID = "master";
var DEFAULT_BUS_ID = "bus-main";
var RoutingError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "RoutingError";
  }
};
var BUS_COLORS = ["#4ecdc4", "#ffe066", "#a78bfa", "#f472b6", "#34d399", "#60a5fa", "#e8734a"];
var busCounter = 0;
function nextBusId() {
  busCounter += 1;
  return `bus-${Date.now().toString(36)}-${busCounter}`;
}
function createDefaultRouting() {
  return {
    version: 1,
    buses: [
      {
        id: DEFAULT_BUS_ID,
        name: "\u603B\u7EBF A",
        gain: 1,
        muted: false,
        solo: false,
        output: MASTER_OUTPUT_ID,
        color: BUS_COLORS[0]
      }
    ]
  };
}
function outputChain(buses, startId) {
  const byId = new Map(buses.map((b) => [b.id, b]));
  const chain = [];
  const seen = /* @__PURE__ */ new Set();
  let cur = byId.get(startId);
  while (cur && !seen.has(cur.id)) {
    seen.add(cur.id);
    chain.push(cur.id);
    if (cur.output === MASTER_OUTPUT_ID) break;
    cur = byId.get(cur.output);
  }
  return chain;
}
function wouldCreateCycle(buses, busId, newOutput) {
  if (newOutput === MASTER_OUTPUT_ID) return false;
  if (newOutput === busId) return true;
  if (!buses.some((b) => b.id === newOutput)) return false;
  return outputChain(buses, newOutput).includes(busId);
}
function validateRouting(routing, tracks) {
  if (routing.buses.length === 0) {
    throw new RoutingError("\u8DEF\u7531\u56FE\u81F3\u5C11\u9700\u8981\u4E00\u6761\u603B\u7EBF");
  }
  const ids = /* @__PURE__ */ new Set();
  for (const b of routing.buses) {
    if (ids.has(b.id)) throw new RoutingError(`\u603B\u7EBF id \u91CD\u590D\uFF1A${b.id}`);
    ids.add(b.id);
    if (b.output !== MASTER_OUTPUT_ID && !ids.has(b.output) && !routing.buses.some((x) => x.id === b.output)) {
      throw new RoutingError(`\u603B\u7EBF\u300C${b.name}\u300D\u7684\u8F93\u51FA\u6307\u5411\u4E0D\u5B58\u5728\u7684\u603B\u7EBF`);
    }
  }
  for (const b of routing.buses) {
    const chain = outputChain(routing.buses, b.id);
    const last = routing.buses.find((x) => x.id === chain[chain.length - 1]);
    if (last && last.output !== MASTER_OUTPUT_ID && chain.includes(last.output)) {
      throw new RoutingError(`\u603B\u7EBF\u300C${b.name}\u300D\u7684\u8F93\u51FA\u94FE\u5B58\u5728\u5FAA\u73AF`);
    }
  }
  for (const t of tracks) {
    if (!ids.has(t.busId)) {
      throw new RoutingError(`\u58F0\u8F68\u300C${t.name}\u300D\u5F52\u5C5E\u7684\u603B\u7EBF\u4E0D\u5B58\u5728\uFF08\u60AC\u7A7A\u6210\u5458\uFF09`);
    }
  }
}
function findDanglingMembers(routing, tracks) {
  const ids = new Set(routing.buses.map((b) => b.id));
  return tracks.filter((t) => !ids.has(t.busId)).map((t) => t.id);
}
function commit(routing, tracks) {
  const next = { ...routing, version: routing.version + 1 };
  validateRouting(next, tracks);
  return { routing: next, tracks };
}
function addBus(routing, tracks, name) {
  const id = nextBusId();
  const bus = {
    id,
    name: name?.trim() || `\u603B\u7EBF ${String.fromCharCode(65 + routing.buses.length % 26)}`,
    gain: 1,
    muted: false,
    solo: false,
    output: MASTER_OUTPUT_ID,
    color: BUS_COLORS[routing.buses.length % BUS_COLORS.length]
  };
  const r = commit({ ...routing, buses: [...routing.buses, bus] }, tracks);
  return { ...r, busId: id };
}
function removeBus(routing, tracks, busId) {
  const bus = routing.buses.find((b) => b.id === busId);
  if (!bus) throw new RoutingError("\u8981\u5220\u9664\u7684\u603B\u7EBF\u4E0D\u5B58\u5728");
  if (routing.buses.length <= 1) throw new RoutingError("\u81F3\u5C11\u4FDD\u7559\u4E00\u6761\u603B\u7EBF\uFF0C\u65E0\u6CD5\u5220\u9664");
  const members = tracks.filter((t) => t.busId === busId);
  if (members.length > 0) {
    throw new RoutingError(
      `\u603B\u7EBF\u300C${bus.name}\u300D\u4ECD\u6709 ${members.length} \u6761\u58F0\u8F68\uFF0C\u9700\u5148\u79FB\u51FA\u6210\u5458\u518D\u5220\u9664`
    );
  }
  const buses = routing.buses.filter((b) => b.id !== busId).map((b) => b.output === busId ? { ...b, output: bus.output } : b);
  return commit({ ...routing, buses }, tracks);
}
function moveTrackToBus(routing, tracks, trackId, busId) {
  if (!routing.buses.some((b) => b.id === busId)) {
    throw new RoutingError("\u76EE\u6807\u603B\u7EBF\u4E0D\u5B58\u5728\uFF0C\u65E0\u6CD5\u8FC1\u79FB\u58F0\u8F68");
  }
  const track2 = tracks.find((t) => t.id === trackId);
  if (!track2) throw new RoutingError("\u8981\u8FC1\u79FB\u7684\u58F0\u8F68\u4E0D\u5B58\u5728");
  if (track2.busId === busId) return { routing, tracks };
  const nextTracks = tracks.map((t) => t.id === trackId ? { ...t, busId } : t);
  return commit(routing, nextTracks);
}
function setBusOutput(routing, tracks, busId, output) {
  const bus = routing.buses.find((b) => b.id === busId);
  if (!bus) throw new RoutingError("\u603B\u7EBF\u4E0D\u5B58\u5728");
  if (output !== MASTER_OUTPUT_ID && !routing.buses.some((b) => b.id === output)) {
    throw new RoutingError("\u8F93\u51FA\u76EE\u6807\u4E0D\u5B58\u5728");
  }
  if (wouldCreateCycle(routing.buses, busId, output)) {
    throw new RoutingError(`\u8BE5\u8F93\u51FA\u4F1A\u5F62\u6210\u5FAA\u73AF\u8DEF\u7531\uFF0C\u5DF2\u62D2\u7EDD\uFF08\u300C${bus.name}\u300D\u4FDD\u6301\u539F\u8F93\u51FA\uFF09`);
  }
  if (bus.output === output) return { routing, tracks };
  const buses = routing.buses.map((b) => b.id === busId ? { ...b, output } : b);
  return commit({ ...routing, buses }, tracks);
}
function patchBus(routing, tracks, busId, patch) {
  if (!routing.buses.some((b) => b.id === busId)) throw new RoutingError("\u603B\u7EBF\u4E0D\u5B58\u5728");
  const buses = routing.buses.map((b) => b.id === busId ? { ...b, ...patch } : b);
  return commit({ ...routing, buses }, tracks);
}
function normalizeDoc(raw) {
  let routing;
  if (raw.routing && Array.isArray(raw.routing.buses) && raw.routing.buses.length > 0) {
    routing = {
      version: Math.max(1, raw.routing.version ?? 1),
      buses: raw.routing.buses.map((b, i) => ({
        id: b.id,
        name: b.name ?? `\u603B\u7EBF ${i + 1}`,
        gain: typeof b.gain === "number" ? b.gain : 1,
        muted: !!b.muted,
        solo: !!b.solo,
        output: b.output ?? MASTER_OUTPUT_ID,
        color: b.color ?? BUS_COLORS[i % BUS_COLORS.length]
      }))
    };
  } else {
    const def = createDefaultRouting();
    def.buses[0].gain = typeof raw.busGain === "number" ? raw.busGain : 1;
    routing = def;
  }
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
    })
  };
  const fallbackBus = routing.buses[0].id;
  const busIds = new Set(routing.buses.map((b) => b.id));
  const tracks = (raw.tracks ?? []).map((t) => ({
    ...t,
    busId: t.busId && busIds.has(t.busId) ? t.busId : fallbackBus
  }));
  const doc = {
    version: 2,
    tracks,
    listener: raw.listener,
    spatial: raw.spatial,
    routing,
    masterGain: typeof raw.masterGain === "number" ? raw.masterGain : 0.9,
    savedAt: raw.savedAt ?? 0,
    name: raw.name
  };
  validateRouting(doc.routing, doc.tracks);
  return doc;
}

// test/routing.test.ts
function track(id, busId = DEFAULT_BUS_ID) {
  return {
    id,
    name: `\u8F68 ${id}`,
    sourceType: "tone",
    loop: true,
    muted: false,
    solo: false,
    busId,
    gain: 0.9,
    channel: 0,
    color: "#fff",
    position: { x: 0, y: 0, z: 0 },
    status: "pending"
  };
}
function threeBuses() {
  const r0 = createDefaultRouting();
  const r1 = addBus(r0, [], "B");
  const r2 = addBus(r1.routing, [], "C");
  return { r: r2.routing, a: DEFAULT_BUS_ID, b: r1.busId, c: r2.busId };
}
describe("\u8DEF\u7531\u56FE\u4E8B\u52A1\u4E0E\u4E0D\u53D8\u91CF", () => {
  it("\u9ED8\u8BA4\u8DEF\u7531\uFF1A\u4E00\u6761\u603B\u7EBF\u8F93\u51FA\u5230\u4E3B\u8F93\u51FA\uFF0C\u7248\u672C\u4E3A 1", () => {
    const r = createDefaultRouting();
    assert.equal(r.version, 1);
    assert.equal(r.buses.length, 1);
    assert.equal(r.buses[0].output, MASTER_OUTPUT_ID);
    validateRouting(r, []);
  });
  it("\u65B0\u589E\u603B\u7EBF\u63A8\u8FDB\u7248\u672C\u4E14\u65E7\u56FE\u4E0D\u88AB\u4FEE\u6539\uFF08\u4E0D\u53EF\u53D8\u4E8B\u52A1\uFF09", () => {
    const r0 = createDefaultRouting();
    const before = JSON.stringify(r0);
    const { routing: r1, busId } = addBus(r0, []);
    assert.equal(r1.version, 2);
    assert.equal(r1.buses.length, 2);
    assert.ok(r1.buses.some((b) => b.id === busId));
    assert.equal(JSON.stringify(r0), before, "\u539F\u56FE\u672A\u88AB\u4FEE\u6539");
  });
  it("\u6BCF\u6761\u8F68\u6070\u597D\u5F52\u5C5E\u4E00\u6761\u6709\u6548\u603B\u7EBF\uFF1A\u8FC1\u79FB\u540E\u5F52\u5C5E\u66F4\u65B0\uFF0C\u60AC\u7A7A\u6821\u9A8C\u901A\u8FC7", () => {
    const { r, b } = (() => {
      const r0 = createDefaultRouting();
      const r1 = addBus(r0, [], "B");
      return { r: r1.routing, b: r1.busId };
    })();
    const tracks = [track("t1"), track("t2")];
    const { routing, tracks: next } = moveTrackToBus(r, tracks, "t1", b);
    assert.equal(next.find((t) => t.id === "t1").busId, b);
    assert.equal(next.find((t) => t.id === "t2").busId, DEFAULT_BUS_ID);
    validateRouting(routing, next);
    assert.equal(findDanglingMembers(routing, next).length, 0);
    assert.equal(routing.version, r.version + 1);
  });
  it("\u8FC1\u79FB\u5230\u4E0D\u5B58\u5728\u7684\u603B\u7EBF\uFF1A\u539F\u5B50\u5931\u8D25\uFF0Ctracks \u5F15\u7528\u4E0D\u53D8", () => {
    const r = createDefaultRouting();
    const tracks = [track("t1")];
    assert.throws(() => moveTrackToBus(r, tracks, "t1", "bus-ghost"), RoutingError);
    assert.equal(tracks[0].busId, DEFAULT_BUS_ID);
  });
  it("\u76F4\u63A5\u81EA\u73AF\u4E0E\u95F4\u63A5\u5FAA\u73AF\u8DEF\u7531\u90FD\u88AB\u62D2\u7EDD\uFF0C\u65E7\u56FE\u4FDD\u6301\u4E0D\u53D8", () => {
    const { r, a, b, c } = threeBuses();
    assert.throws(() => setBusOutput(r, [], a, a), RoutingError);
    const r1 = setBusOutput(r, [], b, a).routing;
    assert.equal(r1.buses.find((x) => x.id === b).output, a);
    assert.throws(() => setBusOutput(r1, [], a, b), RoutingError);
    const r2 = setBusOutput(r1, [], c, b).routing;
    assert.ok(wouldCreateCycle(r2.buses, a, c));
    assert.throws(() => setBusOutput(r2, [], a, c), RoutingError);
    assert.equal(r2.buses.find((x) => x.id === a).output, MASTER_OUTPUT_ID);
    validateRouting(r2, []);
    assert.deepEqual(outputChain(r2.buses, c), [c, b, a]);
  });
  it("\u5220\u9664\u4ECD\u6709\u6210\u5458\u7684\u603B\u7EBF\uFF1A\u539F\u5B50\u5931\u8D25\u5E76\u4FDD\u7559\u65E7\u56FE\uFF1B\u79FB\u51FA\u6210\u5458\u540E\u53EF\u5220\u9664", () => {
    const r0 = createDefaultRouting();
    const { routing: r1, busId: b } = addBus(r0, []);
    let tracks = [track("t1"), track("t2")];
    tracks = moveTrackToBus(r1, tracks, "t2", b).tracks;
    const before = JSON.stringify({ r: r1, tracks });
    assert.throws(
      () => removeBus(r1, tracks, b),
      (err) => err instanceof RoutingError && /仍有 1 条声轨/.test(err.message)
    );
    assert.equal(JSON.stringify({ r: r1, tracks }), before, "\u5931\u8D25\u540E\u65E7\u56FE\u4E0E\u6210\u5458\u539F\u6837\u4FDD\u7559");
    const r2 = moveTrackToBus(r1, tracks, "t2", DEFAULT_BUS_ID);
    const r3 = removeBus(r2.routing, r2.tracks, b);
    assert.equal(r3.routing.buses.length, 1);
    validateRouting(r3.routing, r3.tracks);
  });
  it("\u5220\u9664\u6700\u540E\u4E00\u6761\u603B\u7EBF\u88AB\u62D2\u7EDD", () => {
    const r = createDefaultRouting();
    assert.throws(() => removeBus(r, [], DEFAULT_BUS_ID), RoutingError);
  });
  it("\u5220\u9664\u6709\u4E0B\u7EA7\u7EA7\u8054\u7684\u603B\u7EBF\u65F6\uFF0C\u4E0B\u7EA7\u91CD\u6302\u5230\u88AB\u5220\u603B\u7EBF\u7684\u539F\u8F93\u51FA", () => {
    const { r, a, b, c } = threeBuses();
    const r1 = setBusOutput(r, [], b, a).routing;
    const r2 = setBusOutput(r1, [], c, b).routing;
    const r3 = removeBus(r2, [], b);
    assert.equal(r3.routing.buses.find((x) => x.id === c).output, a);
    validateRouting(r3.routing, []);
  });
  it("\u603B\u7EBF\u53C2\u6570\u4FEE\u8865\uFF08\u589E\u76CA/\u9759\u97F3/\u72EC\u594F/\u540D\u79F0\uFF09\u63A8\u8FDB\u7248\u672C", () => {
    const r = createDefaultRouting();
    const { routing: r1 } = patchBus(r, [], DEFAULT_BUS_ID, { gain: 0.5, muted: true });
    const bus = r1.buses[0];
    assert.equal(bus.gain, 0.5);
    assert.equal(bus.muted, true);
    assert.equal(r1.version, r.version + 1);
    assert.throws(() => patchBus(r, [], "ghost", { gain: 1 }), RoutingError);
  });
  it("validateRouting \u62D2\u7EDD\u60AC\u7A7A\u6210\u5458\u4E0E\u7A7A\u603B\u7EBF\u8868", () => {
    const r = createDefaultRouting();
    assert.throws(() => validateRouting(r, [track("t1", "ghost")]), /悬空成员/);
    assert.throws(() => validateRouting({ version: 1, buses: [] }, []), /至少需要一条总线/);
  });
});
describe("\u6301\u4E45\u5316\u6062\u590D\u4E0E\u8FC1\u79FB", () => {
  it("v1 \u6587\u6863\u8FC1\u79FB\uFF1A\u5355\u4E00 busGain \u2192 \u9ED8\u8BA4\u603B\u7EBF\uFF0C\u5168\u90E8\u58F0\u8F68\u6302\u5165", () => {
    const v1 = {
      version: 1,
      tracks: [
        { ...track("t1"), busId: void 0 },
        { ...track("t2"), busId: void 0 }
      ].map(({ busId: _drop, ...rest }) => rest),
      // v1 声轨没有 busId 字段
      listener: { position: { x: 0, y: 0, z: 3 }, yaw: 0, pitch: 0, earHeight: 0 },
      spatial: {
        distanceModel: "inverse",
        refDistance: 1,
        rolloffFactor: 1,
        maxDistance: 30,
        positionTimeConstant: 0.06,
        hrtfIR: "none"
      },
      busGain: 0.66,
      masterGain: 0.8,
      savedAt: 123
    };
    const doc = normalizeDoc(v1);
    assert.equal(doc.version, 2);
    assert.equal(doc.routing.buses.length, 1);
    assert.equal(doc.routing.buses[0].gain, 0.66, "\u65E7 busGain \u8FC1\u79FB\u5230\u9ED8\u8BA4\u603B\u7EBF");
    assert.equal(doc.masterGain, 0.8);
    for (const t of doc.tracks) assert.equal(t.busId, DEFAULT_BUS_ID);
    validateRouting(doc.routing, doc.tracks);
  });
  it("\u635F\u574F\u6062\u590D\uFF1A\u60AC\u7A7A\u6210\u5458\u91CD\u6302\u9996\u6761\u603B\u7EBF\uFF0C\u6210\u73AF\u8F93\u51FA\u88AB\u6253\u65AD\u5230 master", () => {
    const broken = {
      version: 2,
      tracks: [track("t1", "ghost-bus")],
      listener: { position: { x: 0, y: 0, z: 3 }, yaw: 0, pitch: 0, earHeight: 0 },
      spatial: {
        distanceModel: "inverse",
        refDistance: 1,
        rolloffFactor: 1,
        maxDistance: 30,
        positionTimeConstant: 0.06,
        hrtfIR: "none"
      },
      routing: {
        version: 7,
        buses: [
          { id: "A", name: "A", gain: 1, muted: false, solo: false, output: "B", color: "#111" },
          { id: "B", name: "B", gain: 1, muted: false, solo: true, output: "A", color: "#222" }
        ]
      },
      masterGain: 0.9,
      savedAt: 1
    };
    const doc = normalizeDoc(broken);
    for (const b of doc.routing.buses) {
      const chain = outputChain(doc.routing.buses, b.id);
      const last = doc.routing.buses.find((x) => x.id === chain[chain.length - 1]);
      assert.equal(last.output, MASTER_OUTPUT_ID);
    }
    assert.equal(doc.tracks[0].busId, doc.routing.buses[0].id);
    assert.equal(doc.routing.buses.find((b) => b.id === "B").solo, true);
    validateRouting(doc.routing, doc.tracks);
  });
  it("\u5408\u6CD5 v2 \u6587\u6863\u539F\u6837\u901A\u8FC7\uFF08\u603B\u7EBF\u72B6\u6001\u4E0E\u6210\u5458\u5F52\u5C5E\u4FDD\u7559\uFF09", () => {
    const { r, b } = (() => {
      const r0 = createDefaultRouting();
      const r1 = addBus(r0, [], "B");
      return { r: r1.routing, b: r1.busId };
    })();
    const routing = {
      ...r,
      buses: r.buses.map((x) => x.id === b ? { ...x, gain: 0.4, muted: true } : x)
    };
    const tracks = [track("t1"), { ...track("t2"), busId: b }];
    const doc = normalizeDoc({
      version: 2,
      tracks,
      listener: { position: { x: 0, y: 0, z: 3 }, yaw: 0, pitch: 0, earHeight: 0 },
      spatial: {
        distanceModel: "inverse",
        refDistance: 1,
        rolloffFactor: 1,
        maxDistance: 30,
        positionTimeConstant: 0.06,
        hrtfIR: "none"
      },
      routing,
      masterGain: 0.7,
      savedAt: 5
    });
    assert.equal(doc.routing.buses.find((x) => x.id === b).gain, 0.4);
    assert.equal(doc.routing.buses.find((x) => x.id === b).muted, true);
    assert.equal(doc.tracks.find((t) => t.id === "t2").busId, b);
    assert.equal(doc.masterGain, 0.7);
  });
});
