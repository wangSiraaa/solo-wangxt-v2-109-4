var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/types.ts
var CURRENT_PROJECT_VERSION, MASTER_METER_ID;
var init_types = __esm({
  "src/types.ts"() {
    "use strict";
    CURRENT_PROJECT_VERSION = 2;
    MASTER_METER_ID = "master";
  }
});

// src/lib/routing.ts
var routing_exports = {};
__export(routing_exports, {
  DEFAULT_BUS_IDS: () => DEFAULT_BUS_IDS,
  RoutingError: () => RoutingError,
  ancestorBusIds: () => ancestorBusIds,
  assertCanDeleteBus: () => assertCanDeleteBus,
  commitRouting: () => commitRouting,
  createBus: () => createBus,
  createDefaultBuses: () => createDefaultBuses,
  defaultBusIdForTrack: () => defaultBusIdForTrack,
  descendantBusIds: () => descendantBusIds,
  isTrackAudibleInDoc: () => isTrackAudibleInDoc,
  normalizeProjectDoc: () => normalizeProjectDoc,
  routeSnapshot: () => routeSnapshot,
  validateRouting: () => validateRouting
});
function createDefaultBuses() {
  return [
    { id: DEFAULT_BUS_IDS[0], name: "\u603B\u7EBF A", parentId: null, gain: 1, muted: false, solo: false, color: BUS_COLORS[0] },
    { id: DEFAULT_BUS_IDS[1], name: "\u603B\u7EBF B", parentId: null, gain: 1, muted: false, solo: false, color: BUS_COLORS[1] }
  ];
}
function createBus(id, index, parentId = null) {
  return {
    id,
    name: `\u603B\u7EBF ${String.fromCharCode(65 + index)}`,
    parentId,
    gain: 1,
    muted: false,
    solo: false,
    color: BUS_COLORS[index % BUS_COLORS.length]
  };
}
function defaultBusIdForTrack(buses2, trackIndex) {
  return buses2[trackIndex % Math.max(buses2.length, 1)]?.id ?? DEFAULT_BUS_IDS[0];
}
function normalizeProjectDoc(raw) {
  const buses2 = raw.buses?.length ? raw.buses.map((b) => ({ ...b })) : createDefaultBuses();
  const validIds = new Set(buses2.map((b) => b.id));
  const tracks = raw.tracks.map((t, i) => {
    const { busId: stored, ...rest } = t;
    const busId = stored && validIds.has(stored) ? stored : buses2[i % buses2.length].id;
    return { ...rest, busId };
  });
  const doc = {
    version: CURRENT_PROJECT_VERSION,
    routeVersion: typeof raw.routeVersion === "number" && raw.routeVersion >= 0 ? raw.routeVersion : 1,
    buses: buses2,
    tracks,
    listener: raw.listener,
    spatial: raw.spatial,
    masterGain: typeof raw.masterGain === "number" ? raw.masterGain : 0.9,
    masterMuted: raw.masterMuted ?? false,
    savedAt: raw.savedAt ?? 0,
    name: raw.name
  };
  validateRouting(doc.buses, doc.tracks);
  return doc;
}
function validateRouting(buses2, tracks) {
  if (buses2.length === 0) {
    throw new RoutingError("empty-bus", "\u81F3\u5C11\u5FC5\u987B\u4FDD\u7559\u4E00\u4E2A\u6709\u6548\u603B\u7EBF");
  }
  const byId = /* @__PURE__ */ new Map();
  for (const bus of buses2) {
    if (byId.has(bus.id)) throw new RoutingError("dangling", `\u603B\u7EBF id \u91CD\u590D\uFF1A${bus.id}`);
    byId.set(bus.id, bus);
  }
  for (const bus of buses2) {
    if (bus.parentId !== null && !byId.has(bus.parentId)) {
      throw new RoutingError("dangling", `\u603B\u7EBF\u300C${bus.name}\u300D\u6307\u5411\u5DF2\u4E0D\u5B58\u5728\u7684\u7236\u603B\u7EBF`);
    }
  }
  for (const start of buses2) {
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
  for (const track of tracks) {
    if (!byId.has(track.busId)) {
      throw new RoutingError("dangling", `\u58F0\u8F68\u300C${track.name}\u300D\u6CA1\u6709\u5F52\u5C5E\u5230\u6709\u6548\u603B\u7EBF`);
    }
  }
}
function commitRouting(doc, recipe) {
  const draft = structuredClone(doc);
  recipe(draft);
  validateRouting(draft.buses, draft.tracks);
  draft.routeVersion = doc.routeVersion + 1;
  return draft;
}
function assertCanDeleteBus(doc, busId) {
  if (doc.buses.length <= 1) {
    throw new RoutingError("empty-bus", "\u4E0D\u80FD\u5220\u9664\u6700\u540E\u4E00\u4E2A\u6709\u6548\u603B\u7EBF");
  }
  if (doc.tracks.some((t) => t.busId === busId)) {
    throw new RoutingError("nonempty-bus", "\u8BE5\u603B\u7EBF\u4ECD\u6709\u58F0\u8F68\u6210\u5458\uFF0C\u8BF7\u5148\u8FC1\u79FB\u540E\u518D\u5220\u9664");
  }
  if (doc.buses.some((b) => b.parentId === busId)) {
    throw new RoutingError("nonempty-bus", "\u8BE5\u603B\u7EBF\u4ECD\u6709\u5B50\u603B\u7EBF\uFF0C\u8BF7\u5148\u6539\u63A5\u5B50\u603B\u7EBF\u540E\u518D\u5220\u9664");
  }
}
function ancestorBusIds(buses2, busId) {
  const byId = new Map(buses2.map((b) => [b.id, b]));
  const out = /* @__PURE__ */ new Set();
  let cur = busId;
  while (cur && !out.has(cur)) {
    out.add(cur);
    cur = byId.get(cur)?.parentId ?? null;
  }
  return out;
}
function descendantBusIds(buses2, busId) {
  const out = /* @__PURE__ */ new Set();
  const walk = (id) => {
    for (const b of buses2) {
      if (b.parentId === id && !out.has(b.id)) {
        out.add(b.id);
        walk(b.id);
      }
    }
  };
  walk(busId);
  return out;
}
function routeSnapshot(buses2, tracks) {
  const soloBuses = buses2.filter((b) => b.solo).map((b) => b.id);
  const soloAncestors = /* @__PURE__ */ new Set();
  soloBuses.forEach((id) => ancestorBusIds(buses2, id).forEach((x) => soloAncestors.add(x)));
  const anyBusSolo = soloBuses.length > 0;
  const anyTrackSolo = tracks.some((t) => t.solo);
  return {
    anyBusSolo,
    anyTrackSolo,
    busActive: new Map(
      buses2.map((b) => [b.id, !b.muted && (!anyBusSolo || soloAncestors.has(b.id))])
    )
  };
}
function isTrackAudibleInDoc(track, doc) {
  if (track.muted || doc.masterMuted) return false;
  const { anyTrackSolo, busActive } = routeSnapshot(doc.buses, doc.tracks);
  if (!busActive.get(track.busId)) return false;
  if (anyTrackSolo && !track.solo) return false;
  return true;
}
var DEFAULT_BUS_IDS, BUS_COLORS, RoutingError;
var init_routing = __esm({
  "src/lib/routing.ts"() {
    "use strict";
    init_types();
    DEFAULT_BUS_IDS = ["bus-a", "bus-b"];
    BUS_COLORS = ["#4ecdc4", "#a78bfa", "#f472b6", "#34d399", "#60a5fa", "#ffe066"];
    RoutingError = class extends Error {
      code;
      constructor(code, message) {
        super(message);
        this.name = "RoutingError";
        this.code = code;
      }
    };
  }
});

// src/lib/spatial.ts
function forwardVector(yaw, pitch = 0) {
  return {
    x: Math.sin(yaw) * Math.cos(pitch),
    y: Math.sin(pitch),
    z: -Math.cos(yaw) * Math.cos(pitch)
  };
}
var init_spatial = __esm({
  "src/lib/spatial.ts"() {
    "use strict";
  }
});

// src/lib/samples.ts
var samples_exports = {};
__export(samples_exports, {
  SAMPLE_LABELS: () => SAMPLE_LABELS,
  createDuoBuffer: () => createDuoBuffer,
  createPulseBuffer: () => createPulseBuffer,
  createSampleBuffer: () => createSampleBuffer,
  createToneBuffer: () => createToneBuffer
});
function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = a + 1831565813 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function createPulseBuffer(ctx) {
  const sr = ctx.sampleRate;
  const dur = 1.6;
  const buf = ctx.createBuffer(1, Math.floor(sr * dur), sr);
  const data = buf.getChannelData(0);
  const pulseStarts = [0.05, 0.55, 1.05];
  for (const start of pulseStarts) {
    const s0 = Math.floor(start * sr);
    const n = Math.floor(0.05 * sr);
    for (let i = 0; i < n; i++) {
      const t = i / sr;
      const env = Math.pow(1 - i / n, 1.6);
      data[s0 + i] = Math.sin(2 * Math.PI * 1200 * t) * env * 0.9;
    }
  }
  return buf;
}
function createToneBuffer(ctx) {
  const sr = ctx.sampleRate;
  const dur = 3;
  const buf = ctx.createBuffer(1, Math.floor(sr * dur), sr);
  const data = buf.getChannelData(0);
  const n = data.length;
  for (let i = 0; i < n; i++) {
    const t = i / sr;
    const fade = Math.min(1, t / 0.02, (dur - t) / 0.05);
    data[i] = Math.sin(2 * Math.PI * 440 * t) * 0.5 * fade;
  }
  return buf;
}
function createDuoBuffer(ctx, _variant) {
  const sr = ctx.sampleRate;
  const dur = 4;
  const buf = ctx.createBuffer(1, Math.floor(sr * dur), sr);
  const data = buf.getChannelData(0);
  const rand = mulberry32(20260929);
  for (let i = 0; i < data.length; i++) {
    const t = i / sr;
    const noise = (rand() * 2 - 1) * 0.18;
    const tone = Math.sin(2 * Math.PI * 330 * t) * 0.28;
    const lfo = 0.5 + 0.5 * Math.sin(2 * Math.PI * 2 * t);
    const fade = Math.min(1, t / 0.05, (dur - t) / 0.1);
    data[i] = (noise + tone) * (0.6 + 0.4 * lfo) * fade;
  }
  return buf;
}
function createSampleBuffer(ctx, type) {
  switch (type) {
    case "pulse":
      return createPulseBuffer(ctx);
    case "tone":
      return createToneBuffer(ctx);
    case "duoA":
      return createDuoBuffer(ctx, "A");
    case "duoB":
      return createDuoBuffer(ctx, "B");
    default:
      throw new Error(`\u975E\u5185\u7F6E\u6837\u4F8B\u7C7B\u578B: ${type}`);
  }
}
var SAMPLE_LABELS;
var init_samples = __esm({
  "src/lib/samples.ts"() {
    "use strict";
    SAMPLE_LABELS = {
      pulse: "\u8109\u51B2\u6837\u4F8B\uFF08\u65B9\u4F4D\u6D4B\u8BD5\uFF09",
      tone: "\u5355\u97F3\u6837\u4F8B\uFF08\u58F0\u50CF/\u8DDD\u79BB\uFF09",
      duoA: "\u53CC\u58F0\u6E90 A\uFF08\u540C\u6B65\u5DE6\uFF09",
      duoB: "\u53CC\u58F0\u6E90 B\uFF08\u540C\u6B65\u53F3\uFF09"
    };
  }
});

// src/lib/audioEngine.ts
var audioEngine_exports = {};
__export(audioEngine_exports, {
  AudioEngine: () => AudioEngine,
  DecodeError: () => DecodeError
});
function emptyLevels() {
  return { l: 0, r: 0, clipL: false, clipR: false };
}
function localUp(yaw, pitch) {
  const cp = Math.cos(pitch);
  const sp = Math.sin(pitch);
  return {
    x: -sp * Math.sin(yaw),
    y: cp,
    z: sp * Math.cos(yaw)
  };
}
var DecodeError, AudioEngine;
var init_audioEngine = __esm({
  "src/lib/audioEngine.ts"() {
    "use strict";
    init_types();
    init_routing();
    init_spatial();
    init_samples();
    DecodeError = class extends Error {
      trackId;
      constructor(trackId, message) {
        super(message);
        this.name = "DecodeError";
        this.trackId = trackId;
      }
    };
    AudioEngine = class {
      ctx = null;
      unlock = "locked";
      masterGain = null;
      masterAnalyser = null;
      masterWorklet = null;
      timeDomainBuf = new Float32Array(new ArrayBuffer(8192));
      peakWorkletReady = false;
      workletFailed = false;
      workletGeneration = 0;
      insertingWorklets = null;
      disposed = false;
      busNodes = /* @__PURE__ */ new Map();
      voices = /* @__PURE__ */ new Map();
      buffers = /* @__PURE__ */ new Map();
      pendingFiles = /* @__PURE__ */ new Map();
      spatial = null;
      routing = {
        buses: createDefaultBuses(),
        tracks: [],
        masterGain: 0.9,
        masterMuted: false
      };
      meterLevels = { [MASTER_METER_ID]: emptyLevels() };
      /** 由 UI 注入的最新已校验文档读取器，保证解锁后立即 ensureTrack 时也能拿到刚提交的总线。 */
      getLatestRouting = null;
      unlockListeners = /* @__PURE__ */ new Set();
      levelListeners = /* @__PURE__ */ new Set();
      endedListeners = /* @__PURE__ */ new Set();
      rafHandle = 0;
      onUnlock(fn) {
        this.unlockListeners.add(fn);
        fn(this.unlock);
        return () => {
          this.unlockListeners.delete(fn);
        };
      }
      onLevels(fn) {
        this.levelListeners.add(fn);
        return () => {
          this.levelListeners.delete(fn);
        };
      }
      onEnded(fn) {
        this.endedListeners.add(fn);
        return () => {
          this.endedListeners.delete(fn);
        };
      }
      emitUnlock() {
        this.unlockListeners.forEach((fn) => fn(this.unlock));
      }
      /** 必须在用户手势中调用；与“未解锁”分别上报明确的失败状态 */
      async resume() {
        if (this.unlock === "unlocked" && this.ctx) {
          if (this.ctx.state === "suspended") await this.ctx.resume();
          return;
        }
        this.unlock = "unlocking";
        this.emitUnlock();
        const previousCtx = this.ctx;
        this.ctx = null;
        try {
          const Ctor = window.AudioContext ?? window.webkitAudioContext;
          if (!Ctor) throw new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 Web Audio API");
          const ctx = new Ctor();
          this.ctx = ctx;
          const latest = this.getLatestRouting?.();
          if (latest) this.routing = latest;
          this.disposed = false;
          this.workletFailed = false;
          this.buildGraph(ctx);
          if (ctx.state === "suspended") await ctx.resume();
          if (ctx.state !== "running") {
            throw new Error("AudioContext \u88AB\u6D4F\u89C8\u5668\u7B56\u7565\u963B\u6B62\uFF0C\u672A\u80FD\u8FDB\u5165 running \u72B6\u6001");
          }
          if (previousCtx) void previousCtx.close();
          this.unlock = "unlocked";
          this.emitUnlock();
          this.startMeterLoop();
          void this.ensurePeakWorklets(ctx);
        } catch (err) {
          if (this.ctx) void this.ctx.close();
          else if (previousCtx) void previousCtx.close();
          this.ctx = null;
          this.unlock = "failed";
          this.emitUnlock();
          throw err;
        }
      }
      buildGraph(ctx) {
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
        this.masterGain.connect(this.masterAnalyser);
        this.masterAnalyser.connect(ctx.destination);
      }
      createBusNode(ctx, bus) {
        const gain = ctx.createGain();
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 2048;
        const nodes = { spec: { ...bus }, gain, analyser, worklet: null };
        this.busNodes.set(bus.id, nodes);
        this.meterLevels[bus.id] = emptyLevels();
        gain.connect(analyser);
        return nodes;
      }
      reconnectBuses() {
        if (!this.ctx) return;
        for (const nodes of this.busNodes.values()) {
          nodes.analyser.disconnect();
          const parentId = nodes.spec.parentId;
          const parent = parentId ? this.busNodes.get(parentId) : null;
          if (parentId && !parent) continue;
          nodes.analyser.connect(parent ? parent.gain : this.masterGain);
        }
      }
      reconcileBuses(ctx, buses2) {
        const previousParents = new Map([...this.busNodes].map(([id, nodes]) => [id, nodes.spec.parentId]));
        const next = /* @__PURE__ */ new Map();
        for (const bus of buses2) next.set(bus.id, bus);
        for (const id of [...this.busNodes.keys()]) {
          if (!next.has(id)) {
            const old = this.busNodes.get(id);
            this.disconnectBusNode(old);
            this.busNodes.delete(id);
            delete this.meterLevels[id];
          }
        }
        let parentsChanged = false;
        for (const bus of buses2) {
          let nodes = this.busNodes.get(bus.id);
          if (!nodes) {
            nodes = this.createBusNode(ctx, bus);
            parentsChanged = true;
          }
          if (previousParents.get(bus.id) !== bus.parentId) parentsChanged = true;
          nodes.spec = { ...bus };
          nodes.gain.gain.setTargetAtTime(bus.muted ? 0 : bus.gain, ctx.currentTime, 0.01);
        }
        if (parentsChanged || this.busNodes.size !== buses2.length) this.reconnectBuses();
        if (this.peakWorkletReady) void this.insertAvailableWorklets(ctx);
      }
      disconnectBusNode(nodes) {
        try {
          nodes.gain.disconnect();
          nodes.analyser.disconnect();
          nodes.worklet?.disconnect();
        } catch {
        }
      }
      /**
       * 逐采样峰值/削波检测器串联在每个 bus/master GainNode 之后。
       * Worklet 源码以 Blob 注入，无需额外网络资源。
       */
      async ensurePeakWorklets(ctx) {
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
          const blob = new Blob([workletSource], { type: "application/javascript" });
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
      insertAvailableWorklets(ctx, generation = this.workletGeneration) {
        if (!this.peakWorkletReady || this.ctx !== ctx || generation !== this.workletGeneration || this.insertingWorklets) {
          return this.insertingWorklets ?? Promise.resolve();
        }
        const job = this.insertWorkletNodes(ctx, generation);
        this.insertingWorklets = job;
        void job.finally(() => {
          if (this.insertingWorklets === job) this.insertingWorklets = null;
        });
        return job;
      }
      async insertWorkletNodes(ctx, generation) {
        const insert = async (id, source, analyser, existing) => {
          if (existing || !this.peakWorkletReady || this.ctx !== ctx || generation !== this.workletGeneration) {
            return existing;
          }
          const node = new AudioWorkletNode(ctx, "routing-meter", {
            numberOfInputs: 1,
            numberOfOutputs: 1,
            outputChannelCount: [2]
          });
          node.channelCount = 2;
          node.channelInterpretation = "speakers";
          source.disconnect();
          source.connect(node);
          node.connect(analyser);
          node.port.onmessage = (e) => {
            this.recordWorkletLevel(id, e.data);
          };
          return node;
        };
        if (this.masterGain && this.masterAnalyser) {
          this.masterWorklet = await insert(
            MASTER_METER_ID,
            this.masterGain,
            this.masterAnalyser,
            this.masterWorklet
          );
        }
        for (const nodes of this.busNodes.values()) {
          nodes.worklet = await insert(nodes.spec.id, nodes.gain, nodes.analyser, nodes.worklet);
        }
      }
      recordWorkletLevel(id, d) {
        const prev = this.meterLevels[id] ?? emptyLevels();
        this.meterLevels[id] = {
          l: d.l,
          r: d.r,
          clipL: prev.clipL || d.clipL,
          clipR: prev.clipR || d.clipR
        };
      }
      clearClipLatch(id) {
        if (id) {
          const level = this.meterLevels[id];
          if (level) this.meterLevels[id] = { ...level, clipL: false, clipR: false };
          return;
        }
        for (const key of Object.keys(this.meterLevels)) {
          this.meterLevels[key] = { ...this.meterLevels[key], clipL: false, clipR: false };
        }
      }
      startMeterLoop() {
        const tick = () => {
          if (!this.peakWorkletReady) {
            this.pollAnalyser(MASTER_METER_ID, this.masterAnalyser ?? null);
            for (const [id, nodes] of this.busNodes) this.pollAnalyser(id, nodes.analyser);
          }
          const snapshot = Object.fromEntries(
            Object.entries(this.meterLevels).map(([id, v]) => [id, { ...v }])
          );
          this.levelListeners.forEach((fn) => fn(snapshot));
          this.rafHandle = requestAnimationFrame(tick);
        };
        this.rafHandle = requestAnimationFrame(tick);
      }
      pollAnalyser(id, analyser) {
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
          clipR: prev.clipR || clip
        };
      }
      // ---------- 全局参数与路由 ----------
      setSpatialSettings(s) {
        this.spatial = s;
        if (!this.ctx) return;
        for (const v of this.voices.values()) {
          v.panner.distanceModel = s.distanceModel;
          v.panner.refDistance = s.refDistance;
          v.panner.rolloffFactor = s.rolloffFactor;
          v.panner.maxDistance = s.maxDistance;
        }
      }
      setRoutingProvider(fn) {
        this.getLatestRouting = fn;
      }
      /** 完整替换路由/成员/总线状态。调用方必须已经通过 routing 校验。 */
      syncRouting(state) {
        this.routing = {
          buses: state.buses.map((b) => ({ ...b })),
          tracks: state.tracks.map((t) => ({ ...t })),
          masterGain: state.masterGain,
          masterMuted: state.masterMuted
        };
        if (!this.ctx) return;
        this.reconcileBuses(this.ctx, state.buses);
        this.applyMasterGain();
        for (const track of state.tracks) {
          const voice = this.voices.get(track.id);
          if (voice) this.updateVoiceLive(voice, track, state.buses, state.tracks);
        }
      }
      applyMasterGain() {
        if (!this.ctx || !this.masterGain) return;
        const value = this.routing.masterMuted ? 0 : this.routing.masterGain;
        this.masterGain.gain.setTargetAtTime(value, this.ctx.currentTime, 0.01);
      }
      /** 听者位置/朝向；朝向定义与 spatial.ts、Three.js 相机严格一致 */
      setListener(l) {
        if (!this.ctx) return;
        const t = this.ctx.currentTime;
        const f = forwardVector(l.yaw, l.pitch);
        const u = localUp(l.yaw, l.pitch);
        const li = this.ctx.listener;
        const set = (p, v) => {
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
      effectiveTrackGain(track, buses2, allTracks) {
        if (track.muted || this.routing.masterMuted) return 0;
        const byId = new Map(buses2.map((b) => [b.id, b]));
        let cur = track.busId;
        const chain = [];
        const guard = /* @__PURE__ */ new Set();
        while (cur) {
          if (guard.has(cur)) return 0;
          guard.add(cur);
          const bus = byId.get(cur);
          if (!bus) return 0;
          chain.push(bus);
          cur = bus.parentId;
        }
        const soloBusIds = buses2.filter((b) => b.solo).map((b) => b.id);
        if (soloBusIds.length > 0) {
          const active = /* @__PURE__ */ new Set();
          for (const soloId of soloBusIds) {
            let id = soloId;
            const seen = /* @__PURE__ */ new Set();
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
      async ensureTrack(track) {
        if (!this.ctx || this.unlock !== "unlocked") return;
        let buffer = this.buffers.get(track.id);
        if (!buffer) {
          if (track.sourceType === "file") {
            const blob = this.pendingFiles.get(track.id);
            if (!blob) return;
            try {
              const arr = await blob.arrayBuffer();
              buffer = await this.ctx.decodeAudioData(arr.slice(0));
            } catch (err) {
              throw new DecodeError(
                track.id,
                `\u97F3\u9891\u89E3\u7801\u5931\u8D25\uFF1A${err instanceof Error ? err.message : "\u4E0D\u652F\u6301\u7684\u7F16\u7801\u6216\u6587\u4EF6\u635F\u574F"}`
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
      setFileBlob(trackId, blob) {
        this.pendingFiles.set(trackId, blob);
      }
      dropBuffer(trackId) {
        this.buffers.delete(trackId);
      }
      createVoice(track, buffer) {
        const ctx = this.ctx;
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.loop = track.loop;
        const trackGain = ctx.createGain();
        trackGain.gain.value = this.effectiveTrackGain(
          track,
          this.routing.buses,
          this.routing.tracks.some((t) => t.id === track.id) ? this.routing.tracks : [...this.routing.tracks, track]
        );
        const panner = new PannerNode(ctx, {
          panningModel: "HRTF",
          distanceModel: this.spatial?.distanceModel ?? "inverse",
          refDistance: this.spatial?.refDistance ?? 1,
          rolloffFactor: this.spatial?.rolloffFactor ?? 1,
          maxDistance: this.spatial?.maxDistance ?? 100,
          positionX: track.position.x,
          positionY: track.position.y,
          positionZ: track.position.z
        });
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
        if (!bus) throw new Error(`\u58F0\u8F68\u300C${track.name}\u300D\u6307\u5411\u65E0\u6548\u603B\u7EBF\uFF0C\u65E0\u6CD5\u5EFA\u7ACB\u97F3\u9891\u8282\u70B9`);
        panner.connect(bus.gain);
        const voice = {
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
          duration: buffer.duration
        };
        source.onended = () => {
          if (!voice.playing) return;
          const latest = voice.spec;
          voice.playing = false;
          voice.consumed = true;
          voice.offset = 0;
          const fresh = this.createVoice(latest, buffer);
          fresh.offset = 0;
          this.voices.set(track.id, fresh);
          this.endedListeners.forEach((fn) => fn(track.id));
        };
        return voice;
      }
      /** 实时参数更新：不触碰 source —— 换总线/移动声源都不会重启音轨 */
      updateVoiceLive(voice, track, buses2, allTracks) {
        const ctx = this.ctx;
        const t = ctx.currentTime;
        const tau = Math.max(5e-3, this.spatial?.positionTimeConstant ?? 0.05);
        if (voice.busId !== track.busId) {
          const target = this.busNodes.get(track.busId);
          if (!target) throw new Error(`\u76EE\u6807\u603B\u7EBF\u4E0D\u5B58\u5728\uFF1A${track.busId}`);
          voice.panner.disconnect();
          voice.panner.connect(target.gain);
          voice.busId = track.busId;
        }
        voice.panner.positionX.setTargetAtTime(track.position.x, t, tau);
        voice.panner.positionY.setTargetAtTime(track.position.y, t, tau);
        voice.panner.positionZ.setTargetAtTime(track.position.z, t, tau);
        voice.panner.distanceModel = this.spatial?.distanceModel ?? voice.panner.distanceModel;
        voice.trackGain.gain.setTargetAtTime(this.effectiveTrackGain(track, buses2, allTracks), t, 0.01);
        if (voice.source.loop !== track.loop) voice.source.loop = track.loop;
        voice.spec = track;
      }
      /**
       * 高频实时同步：只更新 AudioParam 与 panner 的一条输出连接。
       * 不创建 BufferSource、不 stop/start，移动或换总线均不重启。
       */
      syncTracks(tracks) {
        if (!this.ctx) return;
        this.routing.tracks = tracks.map((t) => ({ ...t }));
        for (const tr of tracks) {
          const v = this.voices.get(tr.id);
          if (v) this.updateVoiceLive(v, tr, this.routing.buses, tracks);
        }
      }
      getChannelCount(trackId) {
        return this.buffers.get(trackId)?.numberOfChannels ?? null;
      }
      /**
       * 重建声轨输入图（切换立体声文件的 L/R 声道时使用）。
       * 保持播放偏移；若原本在播放，从同一位置继续。总线迁移严禁走此路径。
       */
      async rebuildVoiceGraph(track) {
        await this.ensureTrack(track);
        const old = this.voices.get(track.id);
        const buf = this.buffers.get(track.id);
        if (!old || !buf) return;
        const wasPlaying = old.playing;
        const offset = wasPlaying ? this.currentOffset(old) : old.offset;
        const nv = this.replaceVoice(old, track, buf, offset);
        if (wasPlaying) {
          nv.source.start(this.ctx.currentTime, offset);
          nv.startedAt = this.ctx.currentTime;
          nv.playing = true;
          nv.consumed = true;
        }
      }
      // ---------- 传输控制 ----------
      async playTrack(track) {
        await this.ensureTrack(track);
        let voice = this.voices.get(track.id);
        if (!voice) return;
        if (voice.playing) return;
        if (voice.consumed) {
          const buf = this.buffers.get(track.id);
          voice = this.replaceVoice(voice, track, buf, voice.offset);
        }
        const ctx = this.ctx;
        voice.source.start(ctx.currentTime, voice.offset % voice.duration);
        voice.startedAt = ctx.currentTime;
        voice.playing = true;
        voice.consumed = true;
      }
      pauseTrack(track) {
        const voice = this.voices.get(track.id);
        if (!voice || !voice.playing) return;
        voice.offset = this.currentOffset(voice);
        this.replaceVoice(voice, track, this.buffers.get(track.id), voice.offset);
      }
      stopTrack(track) {
        const voice = this.voices.get(track.id);
        if (!voice) return;
        if (voice.playing || voice.consumed) {
          this.replaceVoice(voice, track, this.buffers.get(track.id), 0);
        } else {
          voice.offset = 0;
        }
      }
      /** 跳转：offsetSec 秒处；autoplay=true 时立即继续播放 */
      async seekTrack(track, offsetSec, autoplay) {
        await this.ensureTrack(track);
        const voice = this.voices.get(track.id);
        const buf = this.buffers.get(track.id);
        if (!voice || !buf) return;
        const offset = track.loop ? (offsetSec % buf.duration + buf.duration) % buf.duration : Math.min(Math.max(0, offsetSec), buf.duration);
        const nv = this.replaceVoice(voice, track, buf, offset);
        if (autoplay) {
          nv.source.start(this.ctx.currentTime, offset);
          nv.startedAt = this.ctx.currentTime;
          nv.playing = true;
          nv.consumed = true;
        }
      }
      /**
       * 停止旧节点并按最新参数重建（仅用于暂停/停止/跳转/L-R 输入选择）。
       * 位置移动和总线迁移严禁走此路径。
       */
      replaceVoice(old, track, buffer, offset) {
        try {
          old.source.onended = null;
          old.source.stop();
        } catch {
        }
        old.source.disconnect();
        old.trackGain.disconnect();
        old.panner.disconnect();
        const nv = this.createVoice(track, buffer);
        nv.offset = offset;
        this.voices.set(track.id, nv);
        return nv;
      }
      currentOffset(v) {
        let p = v.offset + (this.ctx.currentTime - v.startedAt);
        p = v.spec.loop ? (p % v.duration + v.duration) % v.duration : Math.min(p, v.duration);
        return p;
      }
      removeTrack(trackId) {
        const voice = this.voices.get(trackId);
        if (voice) {
          try {
            voice.source.onended = null;
            voice.source.stop();
          } catch {
          }
          voice.source.disconnect();
          voice.trackGain.disconnect();
          voice.panner.disconnect();
        }
        this.voices.delete(trackId);
        this.buffers.delete(trackId);
        this.pendingFiles.delete(trackId);
      }
      getProgress(trackId) {
        const v = this.voices.get(trackId);
        if (!v) return null;
        return v.playing ? this.currentOffset(v) : v.offset;
      }
      getDuration(trackId) {
        return this.buffers.get(trackId)?.duration ?? null;
      }
      isPlaying(trackId) {
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
        this.unlock = "locked";
      }
    };
  }
});

// test/engine.test.ts
import assert from "node:assert/strict";
import { describe, it, beforeEach, afterEach } from "node:test";
var FakeAudioParam = class {
  value;
  events = [];
  constructor(v) {
    this.value = v;
  }
  setTargetAtTime(v, time, tc) {
    this.value = v;
    this.events.push({ time, value: v, tc });
  }
  setValueAtTime(v) {
    this.value = v;
  }
};
var FakeNode = class {
  connects = [];
  disconnected = false;
  connectedFrom = [];
  connect(node, out, inp) {
    const target = node.input ?? node;
    this.connects.push({ node: target, out, inp });
    target.connectedFrom.push(this);
    return target;
  }
  disconnect() {
    this.connects = [];
    this.disconnected = true;
  }
};
var FakeGain = class extends FakeNode {
  gain = new FakeAudioParam(1);
};
var FakeDestination = class extends FakeNode {
};
var FakePanner = class extends FakeNode {
  panningModel = "HRTF";
  distanceModel = "inverse";
  refDistance = 1;
  rolloffFactor = 1;
  maxDistance = 100;
  positionX = new FakeAudioParam(0);
  positionY = new FakeAudioParam(0);
  positionZ = new FakeAudioParam(0);
  constructor(_ctx, opts = {}) {
    super();
    Object.assign(this, opts);
    if (opts.positionX !== void 0) this.positionX = new FakeAudioParam(opts.positionX);
    if (opts.positionY !== void 0) this.positionY = new FakeAudioParam(opts.positionY);
    if (opts.positionZ !== void 0) this.positionZ = new FakeAudioParam(opts.positionZ);
  }
};
var FakeBufferSource = class extends FakeNode {
  buffer = null;
  loop = false;
  started = [];
  stopped = 0;
  onended = null;
  start(time, offset = 0) {
    this.started.push({ time, offset });
  }
  stop() {
    this.stopped++;
  }
};
var FakeBuffer = class {
  duration;
  numberOfChannels;
  length;
  sampleRate;
  data;
  constructor(ch, length, sr, duration) {
    this.numberOfChannels = ch;
    this.length = length;
    this.sampleRate = sr;
    this.duration = duration;
    this.data = Array.from({ length: ch }, () => new Float32Array(length));
  }
  getChannelData(i) {
    return this.data[i];
  }
};
var FakeSplitter = class extends FakeNode {
  constructor(channels) {
    super();
    this.channels = channels;
  }
};
var FakeListener = class {
  positionX = new FakeAudioParam(0);
  positionY = new FakeAudioParam(0);
  positionZ = new FakeAudioParam(0);
  forwardX = new FakeAudioParam(0);
  forwardY = new FakeAudioParam(0);
  forwardZ = new FakeAudioParam(-1);
  upX = new FakeAudioParam(0);
  upY = new FakeAudioParam(1);
  upZ = new FakeAudioParam(0);
};
var FakeAnalyser = class extends FakeNode {
  fftSize = 2048;
  getFloatTimeDomainData(arr) {
    arr.fill(0);
  }
};
var FakeAudioContext = class {
  state = "running";
  currentTime = 0;
  destination = new FakeDestination();
  listener = new FakeListener();
  sampleRate = 48e3;
  audioWorklet = {
    addModule: async () => {
      throw new Error("worklet unavailable in test");
    }
  };
  createGain() {
    return new FakeGain();
  }
  createBufferSource() {
    return new FakeBufferSource();
  }
  createBuffer(ch, length, sr) {
    return new FakeBuffer(ch, length, sr, length / sr);
  }
  createChannelSplitter(ch) {
    return new FakeSplitter(ch);
  }
  createAnalyser() {
    return new FakeAnalyser();
  }
  async resume() {
    this.state = "running";
  }
  async decodeAudioData(buf) {
    const text = new TextDecoder().decode(buf);
    if (text === "BAD") throw new Error("EncodingError: fake bad file");
    return new FakeBuffer(1, 48e3, 48e3, 1);
  }
  async close() {
  }
};
var g = globalThis;
g.AudioContext = FakeAudioContext;
g.requestAnimationFrame = (fn) => setTimeout(() => fn(0), 16);
g.cancelAnimationFrame = (id) => clearTimeout(id);
g.window = globalThis;
g.PannerNode = FakePanner;
var { AudioEngine: AudioEngine2, DecodeError: DecodeError2 } = await Promise.resolve().then(() => (init_audioEngine(), audioEngine_exports));
var { createSampleBuffer: createSampleBuffer2 } = await Promise.resolve().then(() => (init_samples(), samples_exports));
var { createDefaultBuses: createDefaultBuses2 } = await Promise.resolve().then(() => (init_routing(), routing_exports));
function baseTrack(over = {}) {
  return {
    id: "t1",
    name: "T",
    sourceType: "tone",
    busId: "bus-a",
    loop: false,
    muted: false,
    solo: false,
    gain: 0.8,
    channel: 0,
    color: "#fff",
    position: { x: 2, y: 0, z: 0 },
    status: "pending",
    ...over
  };
}
function buses() {
  return createDefaultBuses2();
}
function routeState(tracks, overrides = {}) {
  return {
    buses: overrides.buses ?? buses(),
    tracks,
    masterGain: overrides.masterGain ?? 0.9,
    masterMuted: overrides.masterMuted ?? false
  };
}
function internals(engine) {
  return engine;
}
describe("AudioEngine \u56FE\u884C\u4E3A\uFF08\u6A21\u62DF\u73AF\u5883\uFF09", () => {
  let engine;
  beforeEach(() => {
    engine = new AudioEngine2();
  });
  afterEach(() => {
    engine.dispose();
  });
  it("resume \u89E3\u9501\uFF1BsetListener \u5199\u5165\u4E0E\u7A7A\u95F4\u6570\u5B66\u4E00\u81F4\u7684\u671D\u5411", async () => {
    await engine.resume();
    assert.equal(engine.unlock, "unlocked");
    engine.setListener({
      position: { x: 0, y: 0, z: 3 },
      yaw: Math.PI / 2,
      pitch: 0,
      earHeight: 0
    });
    const li = engine.ctx.listener;
    assert.ok(Math.abs(li.forwardX.value - 1) < 1e-6);
    assert.ok(Math.abs(li.forwardZ.value) < 1e-6);
    assert.ok(Math.abs(li.upY.value - 1) < 1e-6);
    assert.ok(Math.abs(li.positionZ.value - 3) < 1e-6);
  });
  it("\u58F0\u8F68\u94FE\u8DEF\u4E3A source\u2192trackGain\u2192HRTF panner\u2192\u6240\u5C5E\u603B\u7EBF\u2192\u4E3B\u8F93\u51FA\uFF1B\u8DDD\u79BB\u6A21\u578B\u53C2\u6570\u4E0B\u53D1", async () => {
    await engine.resume();
    engine.setSpatialSettings({
      distanceModel: "exponential",
      refDistance: 2,
      rolloffFactor: 1.5,
      maxDistance: 25,
      positionTimeConstant: 0.05,
      hrtfIR: "none"
    });
    const track = baseTrack();
    await engine.ensureTrack(track);
    const ie = internals(engine);
    const v = ie.voices.get("t1");
    assert.equal(v.panner.panningModel, "HRTF");
    assert.equal(v.panner.distanceModel, "exponential");
    assert.equal(v.panner.refDistance, 2);
    assert.equal(v.panner.rolloffFactor, 1.5);
    assert.equal(v.panner.maxDistance, 25);
    assert.ok(Math.abs(v.panner.positionX.value - 2) < 1e-9);
    assert.ok(v.source.connects.some((c) => c.node === v.trackGain));
    assert.ok(v.trackGain.connects.some((c) => c.node === v.panner));
    const busA = ie.busNodes.get("bus-a");
    assert.deepEqual(v.panner.connects.map((c) => c.node), [busA.gain]);
    assert.ok(busA.gain.connects.some((c) => c.node === busA.analyser));
    assert.ok(busA.analyser.connects.some((c) => c.node === ie.masterGain));
  });
  it("\u8C03\u6574\u4E00\u4E2A\u603B\u7EBF\u589E\u76CA\u53EA\u5F71\u54CD\u8BE5\u603B\u7EBF GainNode\uFF0C\u53E6\u4E00\u603B\u7EBF\u548C\u4E3B\u8F93\u51FA\u4FDD\u6301\u4E0D\u53D8", async () => {
    await engine.resume();
    const a = baseTrack({ id: "a", busId: "bus-a" });
    const b = baseTrack({ id: "b", busId: "bus-b", position: { x: -2, y: 0, z: 0 } });
    engine.syncRouting(routeState([a, b]));
    await engine.ensureTrack(a);
    await engine.ensureTrack(b);
    const ie = internals(engine);
    const nextBuses = buses();
    nextBuses[0].gain = 0.25;
    engine.syncRouting(routeState([a, b], { buses: nextBuses }));
    assert.equal(ie.busNodes.get("bus-a").gain.gain.value, 0.25);
    assert.equal(ie.busNodes.get("bus-b").gain.gain.value, 1);
    assert.equal(ie.masterGain.gain.value, 0.9);
  });
  it("\u603B\u7EBF\u72EC\u594F\u53EA\u8BA9\u5176\u4ED6\u603B\u7EBF\u7269\u7406\u9759\u97F3\uFF1B\u72EC\u594F\u603B\u7EBF\u5185\u539F\u672C M \u7684\u8F68\u4ECD\u4E3A 0", async () => {
    await engine.resume();
    const aMuted = baseTrack({ id: "a", busId: "bus-a", muted: true });
    const b = baseTrack({ id: "b", busId: "bus-b", position: { x: -2, y: 0, z: 0 } });
    engine.syncRouting(routeState([aMuted, b]));
    await engine.ensureTrack(aMuted);
    await engine.ensureTrack(b);
    const ie = internals(engine);
    const soloBuses = buses();
    soloBuses[0].solo = true;
    engine.syncRouting(routeState([aMuted, b], { buses: soloBuses }));
    assert.equal(ie.voices.get("a").trackGain.gain.value, 0);
    assert.equal(ie.voices.get("b").trackGain.gain.value, 0);
    const aAudible = { ...aMuted, muted: false };
    engine.syncRouting(routeState([aAudible, b], { buses: soloBuses }));
    assert.equal(ie.voices.get("a").trackGain.gain.value, 0.8);
    assert.equal(ie.voices.get("b").trackGain.gain.value, 0);
  });
  it("\u64AD\u653E\u4E2D\u8FC1\u79FB\u603B\u7EBF\u53EA\u91CD\u63A5\u4E00\u6B21 panner\uFF0C\u4E0D stop/start source\uFF0C\u65B9\u4F4D\u548C\u8282\u70B9\u8EAB\u4EFD\u4E0D\u53D8", async () => {
    await engine.resume();
    const t = baseTrack();
    engine.syncRouting(routeState([t]));
    await engine.playTrack(t);
    const ie = internals(engine);
    const before = ie.voices.get("t1");
    const sourceBefore = before.source;
    const pannerBefore = before.panner;
    const startsBefore = sourceBefore.started.length;
    const stopsBefore = sourceBefore.stopped;
    const moved = { ...t, busId: "bus-b" };
    engine.syncRouting(routeState([moved]));
    const after = ie.voices.get("t1");
    const busB = ie.busNodes.get("bus-b");
    const busA = ie.busNodes.get("bus-a");
    assert.equal(after.source, sourceBefore);
    assert.equal(after.panner, pannerBefore);
    assert.equal(after.busId, "bus-b");
    assert.equal(after.panner.connects.length, 1);
    assert.ok(!after.panner.connects.some((c) => c.node === busA.gain));
    assert.deepEqual(after.panner.connects.map((c) => c.node), [busB.gain]);
    assert.equal(sourceBefore.started.length, startsBefore);
    assert.equal(sourceBefore.stopped, stopsBefore);
    assert.equal(after.panner.positionX.value, 2);
  });
  it("\u79FB\u52A8\u58F0\u6E90\u53EA\u5199 AudioParam\uFF0C\u7EDD\u4E0D stop/start source", async () => {
    await engine.resume();
    const t = baseTrack();
    await engine.playTrack(t);
    const ie = internals(engine);
    const v = ie.voices.get("t1");
    const startsBefore = v.source.started.length;
    const stopsBefore = v.source.stopped;
    for (let i = 0; i < 10; i++) {
      engine.syncTracks([{ ...t, position: { x: 2 + i * 0.1, y: 0.5, z: -i * 0.2 } }]);
    }
    assert.ok(Math.abs(v.panner.positionX.value - 2.9) < 1e-9);
    assert.ok(Math.abs(v.panner.positionY.value - 0.5) < 1e-9);
    assert.ok(Math.abs(v.panner.positionZ.value - -1.8) < 1e-9);
    assert.equal(v.source.started.length, startsBefore);
    assert.equal(v.source.stopped, stopsBefore);
  });
  it("\u6682\u505C\u4F1A\u505C\u6B62\u5E76\u91CD\u5EFA\u8282\u70B9\u4E14\u4FDD\u7559\u504F\u79FB\uFF1B\u518D\u6B21\u64AD\u653E\u4ECE\u504F\u79FB\u5F00\u59CB", async () => {
    await engine.resume();
    const ctx = engine.ctx;
    const t = { ...baseTrack(), loop: false };
    engine.syncRouting(routeState([t]));
    await engine.playTrack(t);
    ctx.currentTime = 0.3;
    engine.pauseTrack(t);
    await engine.playTrack({ ...t });
    const v = internals(engine).voices.get("t1");
    const last = v.source.started[v.source.started.length - 1];
    assert.ok(Math.abs(last.offset - 0.3) < 1e-6);
  });
  it("\u4E3B\u589E\u76CA\u548C\u4E3B\u9759\u97F3\u771F\u5B9E\u5199\u5165 masterGain\uFF1B\u4E3B\u8868\u4E32\u8054\u5728 destination \u524D", async () => {
    await engine.resume();
    const ie = internals(engine);
    engine.syncRouting(routeState([], { masterGain: 0.71 }));
    assert.equal(ie.masterGain.gain.value, 0.71);
    engine.syncRouting(routeState([], { masterGain: 0.71, masterMuted: true }));
    assert.equal(ie.masterGain.gain.value, 0);
    const destination = engine.ctx.destination;
    assert.ok(ie.masterAnalyser.connects.some((c) => c.node === destination));
  });
  it("\u574F\u6587\u4EF6\u89E3\u7801\u5931\u8D25\u629B\u51FA DecodeError\uFF0C\u4E14\u4E0D\u5F71\u54CD\u5176\u4ED6\u58F0\u8F68", async () => {
    await engine.resume();
    const bad = baseTrack({ id: "bad", sourceType: "file" });
    engine.setFileBlob("bad", new Blob([new TextEncoder().encode("BAD")], { type: "audio/x" }));
    await assert.rejects(engine.ensureTrack(bad), (err) => err instanceof DecodeError2);
    const good = baseTrack({ id: "good" });
    await engine.ensureTrack(good);
    assert.ok(internals(engine).voices.has("good"));
  });
  it("\u5185\u7F6E\u6837\u4F8B\u7F13\u51B2\u53EF\u7ECF\u5F15\u64CE\u5408\u6210\uFF0C\u65F6\u957F\u4E0E\u58F0\u9053\u7B26\u5408\u9884\u671F", async () => {
    await engine.resume();
    const buf = createSampleBuffer2(engine.ctx, "pulse");
    assert.equal(buf.numberOfChannels, 1);
    assert.ok(Math.abs(buf.duration - 1.6) < 1e-6);
  });
});
