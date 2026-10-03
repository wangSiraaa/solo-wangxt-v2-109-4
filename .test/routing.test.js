// test/routing.test.ts
import assert from "node:assert/strict";
import { describe, it } from "node:test";

// src/types.ts
var CURRENT_PROJECT_VERSION = 2;

// src/lib/routing.ts
var DEFAULT_BUS_IDS = ["bus-a", "bus-b"];
var BUS_COLORS = ["#4ecdc4", "#a78bfa", "#f472b6", "#34d399", "#60a5fa", "#ffe066"];
var RoutingError = class extends Error {
  code;
  constructor(code, message) {
    super(message);
    this.name = "RoutingError";
    this.code = code;
  }
};
function createDefaultBuses() {
  return [
    { id: DEFAULT_BUS_IDS[0], name: "\u603B\u7EBF A", parentId: null, gain: 1, muted: false, solo: false, color: BUS_COLORS[0] },
    { id: DEFAULT_BUS_IDS[1], name: "\u603B\u7EBF B", parentId: null, gain: 1, muted: false, solo: false, color: BUS_COLORS[1] }
  ];
}
function normalizeProjectDoc(raw) {
  const buses = raw.buses?.length ? raw.buses.map((b) => ({ ...b })) : createDefaultBuses();
  const validIds = new Set(buses.map((b) => b.id));
  const tracks = raw.tracks.map((t, i) => {
    const { busId: stored, ...rest } = t;
    const busId = stored && validIds.has(stored) ? stored : buses[i % buses.length].id;
    return { ...rest, busId };
  });
  const doc2 = {
    version: CURRENT_PROJECT_VERSION,
    routeVersion: typeof raw.routeVersion === "number" && raw.routeVersion >= 0 ? raw.routeVersion : 1,
    buses,
    tracks,
    listener: raw.listener,
    spatial: raw.spatial,
    masterGain: typeof raw.masterGain === "number" ? raw.masterGain : 0.9,
    masterMuted: raw.masterMuted ?? false,
    savedAt: raw.savedAt ?? 0,
    name: raw.name
  };
  validateRouting(doc2.buses, doc2.tracks);
  return doc2;
}
function validateRouting(buses, tracks) {
  if (buses.length === 0) {
    throw new RoutingError("empty-bus", "\u81F3\u5C11\u5FC5\u987B\u4FDD\u7559\u4E00\u4E2A\u6709\u6548\u603B\u7EBF");
  }
  const byId = /* @__PURE__ */ new Map();
  for (const bus of buses) {
    if (byId.has(bus.id)) throw new RoutingError("dangling", `\u603B\u7EBF id \u91CD\u590D\uFF1A${bus.id}`);
    byId.set(bus.id, bus);
  }
  for (const bus of buses) {
    if (bus.parentId !== null && !byId.has(bus.parentId)) {
      throw new RoutingError("dangling", `\u603B\u7EBF\u300C${bus.name}\u300D\u6307\u5411\u5DF2\u4E0D\u5B58\u5728\u7684\u7236\u603B\u7EBF`);
    }
  }
  for (const start of buses) {
    const seen = /* @__PURE__ */ new Set();
    let cur = start.id;
    while (cur) {
      if (seen.has(cur)) {
        throw new RoutingError("cycle", `\u68C0\u6D4B\u5230\u5FAA\u73AF\u8DEF\u7531\uFF1A${[...seen, cur].join(" \u2192 ")}`);
      }
      seen.add(cur);
      cur = byId.get(cur)?.parentId ?? null;
    }
  }
  for (const track2 of tracks) {
    if (!byId.has(track2.busId)) {
      throw new RoutingError("dangling", `\u58F0\u8F68\u300C${track2.name}\u300D\u6CA1\u6709\u5F52\u5C5E\u5230\u6709\u6548\u603B\u7EBF`);
    }
  }
}
function commitRouting(doc2, recipe) {
  const draft = structuredClone(doc2);
  recipe(draft);
  validateRouting(draft.buses, draft.tracks);
  draft.routeVersion = doc2.routeVersion + 1;
  return draft;
}
function assertCanDeleteBus(doc2, busId) {
  if (doc2.buses.length <= 1) {
    throw new RoutingError("empty-bus", "\u4E0D\u80FD\u5220\u9664\u6700\u540E\u4E00\u4E2A\u6709\u6548\u603B\u7EBF");
  }
  if (doc2.tracks.some((t) => t.busId === busId)) {
    throw new RoutingError("nonempty-bus", "\u8BE5\u603B\u7EBF\u4ECD\u6709\u58F0\u8F68\u6210\u5458\uFF0C\u8BF7\u5148\u8FC1\u79FB\u540E\u518D\u5220\u9664");
  }
  if (doc2.buses.some((b) => b.parentId === busId)) {
    throw new RoutingError("nonempty-bus", "\u8BE5\u603B\u7EBF\u4ECD\u6709\u5B50\u603B\u7EBF\uFF0C\u8BF7\u5148\u6539\u63A5\u5B50\u603B\u7EBF\u540E\u518D\u5220\u9664");
  }
}
function ancestorBusIds(buses, busId) {
  const byId = new Map(buses.map((b) => [b.id, b]));
  const out = /* @__PURE__ */ new Set();
  let cur = busId;
  while (cur && !out.has(cur)) {
    out.add(cur);
    cur = byId.get(cur)?.parentId ?? null;
  }
  return out;
}
function routeSnapshot(buses, tracks) {
  const soloBuses = buses.filter((b) => b.solo).map((b) => b.id);
  const soloAncestors = /* @__PURE__ */ new Set();
  soloBuses.forEach((id) => ancestorBusIds(buses, id).forEach((x) => soloAncestors.add(x)));
  const anyBusSolo = soloBuses.length > 0;
  const anyTrackSolo = tracks.some((t) => t.solo);
  return {
    anyBusSolo,
    anyTrackSolo,
    busActive: new Map(
      buses.map((b) => [b.id, !b.muted && (!anyBusSolo || soloAncestors.has(b.id))])
    )
  };
}
function isTrackAudibleInDoc(track2, doc2) {
  if (track2.muted || doc2.masterMuted) return false;
  const { anyTrackSolo, busActive } = routeSnapshot(doc2.buses, doc2.tracks);
  if (!busActive.get(track2.busId)) return false;
  if (anyTrackSolo && !track2.solo) return false;
  return true;
}

// test/routing.test.ts
function track(id, busId, over = {}) {
  return {
    id,
    name: id,
    sourceType: "tone",
    busId,
    loop: true,
    muted: false,
    solo: false,
    gain: 0.8,
    channel: 0,
    color: "#fff",
    position: { x: 0, y: 0, z: 0 },
    status: "ready",
    ...over
  };
}
function doc() {
  return {
    version: 2,
    routeVersion: 1,
    buses: createDefaultBuses(),
    tracks: [track("a", "bus-a"), track("b", "bus-b")],
    listener: { position: { x: 0, y: 0, z: 3 }, yaw: 0, pitch: 0, earHeight: 0 },
    spatial: {
      distanceModel: "inverse",
      refDistance: 1,
      rolloffFactor: 1,
      maxDistance: 30,
      positionTimeConstant: 0.06,
      hrtfIR: "none"
    },
    masterGain: 0.9,
    masterMuted: false,
    savedAt: 0
  };
}
describe("\u6301\u4E45\u5316\u591A\u603B\u7EBF\u8DEF\u7531", () => {
  it("v1 \u5DE5\u7A0B\u8FC1\u79FB\u4E3A v2\uFF1A\u4E24\u6761\u58F0\u8F68\u8F6E\u6D41\u5F52\u5C5E\u4E24\u4E2A\u603B\u7EBF\uFF0C\u4E3B\u8F93\u51FA\u72B6\u6001\u4FDD\u7559", () => {
    const v1 = {
      version: 1,
      tracks: [track("a", "missing"), track("b", "missing")],
      listener: doc().listener,
      spatial: doc().spatial,
      busGain: 0.5,
      masterGain: 0.7,
      savedAt: 123
    };
    const restored = normalizeProjectDoc(v1);
    assert.equal(restored.version, 2);
    assert.equal(restored.tracks[0].busId, "bus-a");
    assert.equal(restored.tracks[1].busId, "bus-b");
    assert.equal(restored.masterGain, 0.7);
    assert.equal(restored.masterMuted, false);
  });
  it("\u6BCF\u6761\u8F68\u5FC5\u987B\u6070\u597D\u5F52\u5C5E\u4E00\u4E2A\u6709\u6548\u603B\u7EBF\uFF1B\u60AC\u7A7A\u6210\u5458\u6821\u9A8C\u5931\u8D25", () => {
    const d = doc();
    d.tracks[0].busId = "gone";
    assert.throws(() => validateRouting(d.buses, d.tracks), RoutingError);
  });
  it("\u76F4\u63A5\u81EA\u73AF\u548C\u7ECF\u8FC7\u540E\u4EE3\u7684\u5FAA\u73AF\u90FD\u539F\u5B50\u62D2\u7EDD", () => {
    const d = doc();
    assert.throws(
      () => commitRouting(d, (draft) => {
        draft.buses[0].parentId = draft.buses[0].id;
      }),
      /循环/
    );
    assert.equal(d.buses[0].parentId, null);
    assert.equal(d.routeVersion, 1);
    const withChild = commitRouting(d, (draft) => {
      draft.buses.push({ id: "bus-c", name: "C", parentId: "bus-a", gain: 1, muted: false, solo: false, color: "#fff" });
    });
    assert.throws(
      () => commitRouting(withChild, (draft) => {
        draft.buses.find((b) => b.id === "bus-a").parentId = "bus-c";
      }),
      /循环/
    );
    assert.equal(withChild.buses.find((b) => b.id === "bus-a").parentId, null);
  });
  it("\u5220\u9664\u4ECD\u6709\u6210\u5458\u6216\u5B50\u603B\u7EBF\u7684\u603B\u7EBF\u5931\u8D25\uFF0C\u65E7\u56FE\u548C routeVersion \u4FDD\u7559", () => {
    const d = doc();
    assert.throws(() => assertCanDeleteBus(d, "bus-a"), /成员/);
    const nested = commitRouting(d, (draft) => {
      draft.tracks = [];
      draft.buses.push({ id: "bus-c", name: "C", parentId: "bus-a", gain: 1, muted: false, solo: false, color: "#fff" });
    });
    assert.throws(() => assertCanDeleteBus(nested, "bus-a"), /子总线/);
    assert.equal(nested.buses.length, 3);
    assert.equal(nested.routeVersion, 2);
  });
  it("\u79FB\u52A8\u6210\u5458\u662F\u6210\u529F\u4E8B\u52A1\uFF1BrouteVersion \u6BCF\u6B21\u6210\u529F\u52A0\u4E00", () => {
    const d = doc();
    const next = commitRouting(d, (draft) => {
      draft.tracks[0].busId = "bus-b";
    });
    assert.equal(next.tracks[0].busId, "bus-b");
    assert.equal(next.routeVersion, 2);
    assert.equal(d.tracks[0].busId, "bus-a");
  });
  it("\u603B\u7EBF\u72EC\u594F\u65F6\u5176\u4ED6\u603B\u7EBF\u9759\u97F3\uFF0C\u4F46\u72EC\u594F\u603B\u7EBF\u4E2D\u5DF2 M \u7684\u8F68\u4ECD\u9759\u97F3\uFF1B\u8F68 M/S \u4F18\u5148\u7EA7\u4E00\u81F4", () => {
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
