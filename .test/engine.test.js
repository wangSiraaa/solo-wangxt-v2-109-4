var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

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

// src/lib/routing.ts
var routing_exports = {};
__export(routing_exports, {
  DEFAULT_BUS_ID: () => DEFAULT_BUS_ID,
  MASTER_OUTPUT_ID: () => MASTER_OUTPUT_ID,
  RoutingError: () => RoutingError,
  addBus: () => addBus,
  createDefaultRouting: () => createDefaultRouting,
  findDanglingMembers: () => findDanglingMembers,
  moveTrackToBus: () => moveTrackToBus,
  normalizeDoc: () => normalizeDoc,
  outputChain: () => outputChain,
  patchBus: () => patchBus,
  removeBus: () => removeBus,
  setBusOutput: () => setBusOutput,
  validateRouting: () => validateRouting,
  wouldCreateCycle: () => wouldCreateCycle
});
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
  const track = tracks.find((t) => t.id === trackId);
  if (!track) throw new RoutingError("\u8981\u8FC1\u79FB\u7684\u58F0\u8F68\u4E0D\u5B58\u5728");
  if (track.busId === busId) return { routing, tracks };
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
var MASTER_OUTPUT_ID, DEFAULT_BUS_ID, RoutingError, BUS_COLORS, busCounter;
var init_routing = __esm({
  "src/lib/routing.ts"() {
    "use strict";
    MASTER_OUTPUT_ID = "master";
    DEFAULT_BUS_ID = "bus-main";
    RoutingError = class extends Error {
      constructor(message) {
        super(message);
        this.name = "RoutingError";
      }
    };
    BUS_COLORS = ["#4ecdc4", "#ffe066", "#a78bfa", "#f472b6", "#34d399", "#60a5fa", "#e8734a"];
    busCounter = 0;
  }
});

// src/lib/audioEngine.ts
var audioEngine_exports = {};
__export(audioEngine_exports, {
  AudioEngine: () => AudioEngine,
  DecodeError: () => DecodeError
});
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
    init_spatial();
    init_samples();
    init_routing();
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
      routing = createDefaultRouting();
      busNodes = /* @__PURE__ */ new Map();
      masterGain = null;
      analyser = null;
      timeDomainBuf = new Float32Array(new ArrayBuffer(8192));
      peakWorklet = null;
      workletFailed = false;
      voices = /* @__PURE__ */ new Map();
      buffers = /* @__PURE__ */ new Map();
      pendingFiles = /* @__PURE__ */ new Map();
      spatial = null;
      anySolo = false;
      unlockListeners = /* @__PURE__ */ new Set();
      levelListeners = /* @__PURE__ */ new Set();
      busLevelListeners = /* @__PURE__ */ new Set();
      endedListeners = /* @__PURE__ */ new Set();
      rafHandle = 0;
      clipLatchL = false;
      clipLatchR = false;
      lastPeak = { l: 0, r: 0, clipL: false, clipR: false };
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
      onBusLevels(fn) {
        this.busLevelListeners.add(fn);
        return () => {
          this.busLevelListeners.delete(fn);
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
        try {
          const Ctor = window.AudioContext ?? window.webkitAudioContext;
          if (!Ctor) throw new Error("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 Web Audio API");
          const ctx = new Ctor();
          this.ctx = ctx;
          this.buildGraph(ctx);
          if (ctx.state === "suspended") await ctx.resume();
          if (ctx.state !== "running") {
            throw new Error("AudioContext \u88AB\u6D4F\u89C8\u5668\u7B56\u7565\u963B\u6B62\uFF0C\u672A\u80FD\u8FDB\u5165 running \u72B6\u6001");
          }
          this.unlock = "unlocked";
          this.emitUnlock();
          this.startMeterLoop();
          void this.ensurePeakWorklet(ctx);
        } catch (err) {
          void this.ctx?.close().catch(() => void 0);
          this.ctx = null;
          this.busNodes.clear();
          this.masterGain = null;
          this.analyser = null;
          this.peakWorklet = null;
          this.unlock = "failed";
          this.emitUnlock();
          throw err;
        }
      }
      buildGraph(ctx) {
        this.masterGain = ctx.createGain();
        this.analyser = ctx.createAnalyser();
        this.analyser.fftSize = 2048;
        this.timeDomainBuf = new Float32Array(new ArrayBuffer(this.analyser.fftSize * 4));
        this.masterGain.connect(this.analyser);
        this.analyser.connect(ctx.destination);
        this.reconcileBuses();
      }
      /**
       * 峰值/削波检测器串联在 masterGain 之后、destination 之前的真实输出链上，
       * 逐采样扫描。Worklet 源码以 Blob 注入，无需额外网络资源。
       */
      async ensurePeakWorklet(ctx) {
        if (this.peakWorklet || this.workletFailed) return !!this.peakWorklet;
        try {
          const workletSource = `
class PeakMeterProcessor extends AudioWorkletProcessor {
  process(inputs, outputs) {
    const in0 = inputs[0];
    const out0 = outputs[0];
    if (!in0 || in0.length === 0) {
      // \u4E0A\u6E38\u9759\u9ED8\u4F18\u5316\u65F6\u8F93\u51FA\u4FDD\u6301\u96F6\u586B\u5145\u5373\u53EF
      return true;
    }
    let peakL = 0, peakR = 0, clipL = false, clipR = false;
    const l = in0[0];
    const r = in0[1] || in0[0];
    const ol = out0[0];
    const or = out0[1] || out0[0];
    for (let i = 0; i < l.length; i++) {
      const vl = l[i];
      const al = Math.abs(vl);
      if (al > peakL) peakL = al;
      if (al >= 1.0) clipL = true;
      if (ol) ol[i] = vl; // \u5FC5\u987B\u663E\u5F0F\u900F\u4F20\uFF0C\u5426\u5219\u8F93\u51FA\u9759\u97F3
    }
    if (r && or) for (let i = 0; i < r.length; i++) {
      const vr = r[i];
      const ar = Math.abs(vr);
      if (ar > peakR) peakR = ar;
      if (ar >= 1.0) clipR = true;
      if (out0[1]) or[i] = vr;
    }
    this.port.postMessage({ l: peakL, r: peakR, clipL, clipR });
    return true;
  }
}
registerProcessor('peak-meter', PeakMeterProcessor);
`;
          const blob = new Blob([workletSource], { type: "application/javascript" });
          const url = URL.createObjectURL(blob);
          try {
            await ctx.audioWorklet.addModule(url);
          } finally {
            URL.revokeObjectURL(url);
          }
          const node = new AudioWorkletNode(ctx, "peak-meter", {
            // 节点串在真实输出链上：必须保持立体声直通，避免被下混成单声道
            numberOfInputs: 1,
            numberOfOutputs: 1,
            outputChannelCount: [2]
          });
          node.channelCount = 2;
          node.channelInterpretation = "speakers";
          this.masterGain.disconnect();
          this.masterGain.connect(node);
          this.analyser.disconnect();
          node.connect(this.analyser);
          this.analyser.connect(ctx.destination);
          node.port.onmessage = (e) => {
            const d = e.data;
            if (d.clipL) this.clipLatchL = true;
            if (d.clipR) this.clipLatchR = true;
            this.lastPeak = { l: d.l, r: d.r, clipL: this.clipLatchL, clipR: this.clipLatchR };
          };
          this.peakWorklet = node;
          return true;
        } catch {
          this.workletFailed = true;
          return false;
        }
      }
      clearClipLatch() {
        this.clipLatchL = false;
        this.clipLatchR = false;
      }
      /** 清除指定总线的削波锁存 */
      clearBusClipLatch(busId) {
        const n = this.busNodes.get(busId);
        if (n) {
          n.clipL = false;
          n.clipR = false;
        }
      }
      startMeterLoop() {
        const tick = () => {
          if (!this.peakWorklet && this.analyser) {
            this.analyser.getFloatTimeDomainData(this.timeDomainBuf);
            let peak = 0;
            for (let i = 0; i < this.timeDomainBuf.length; i++) {
              const a = Math.abs(this.timeDomainBuf[i]);
              if (a > peak) peak = a;
            }
            if (peak >= 1) {
              this.clipLatchL = true;
              this.clipLatchR = true;
            }
            this.lastPeak = {
              l: peak,
              r: peak,
              clipL: this.clipLatchL,
              clipR: this.clipLatchR
            };
          }
          const p = this.lastPeak;
          this.levelListeners.forEach((fn) => fn({ ...p }));
          if (this.busNodes.size > 0 && this.busLevelListeners.size > 0) {
            const levels = {};
            for (const [id, n] of this.busNodes) {
              n.analyser.getFloatTimeDomainData(n.timeBuf);
              let peak = 0;
              for (let i = 0; i < n.timeBuf.length; i++) {
                const a = Math.abs(n.timeBuf[i]);
                if (a > peak) peak = a;
              }
              if (peak >= 1) {
                n.clipL = true;
                n.clipR = true;
              }
              n.lastPeak = { l: peak, r: peak, clipL: n.clipL, clipR: n.clipR };
              levels[id] = { ...n.lastPeak };
            }
            this.busLevelListeners.forEach((fn) => fn(levels));
          }
          this.rafHandle = requestAnimationFrame(tick);
        };
        this.rafHandle = requestAnimationFrame(tick);
      }
      // ---------- 路由图 ----------
      /**
       * 应用新路由图：增删总线节点组、重接总线输出、刷新有效增益，
       * 并把现有 voice 的 panner 重新挂到所属总线。
       * 只改连接与 AudioParam，绝不触碰 BufferSource —— 播放中迁移总线不重启、不双重发声。
       */
      setRouting(routing) {
        this.routing = routing;
        if (!this.ctx) return;
        this.reconcileBuses();
        for (const v of this.voices.values()) this.routeVoice(v);
      }
      getRouting() {
        return this.routing;
      }
      /** 按路由图对齐总线节点组：删旧、建新、重接输出、下发有效增益 */
      reconcileBuses() {
        const ctx = this.ctx;
        if (!ctx || !this.masterGain) return;
        const anyBusSolo = this.routing.buses.some((b) => b.solo);
        for (const [id, nodes] of [...this.busNodes]) {
          if (!this.routing.buses.some((b) => b.id === id)) {
            nodes.input.disconnect();
            nodes.muteSink.disconnect();
            nodes.gain.disconnect();
            nodes.analyser.disconnect();
            this.busNodes.delete(id);
          }
        }
        for (const bus of this.routing.buses) {
          if (this.busNodes.has(bus.id)) continue;
          const input = ctx.createGain();
          const muteSink = ctx.createGain();
          muteSink.gain.value = 0;
          const gain = ctx.createGain();
          const analyser = ctx.createAnalyser();
          analyser.fftSize = 2048;
          input.connect(gain);
          muteSink.connect(gain);
          gain.connect(analyser);
          this.busNodes.set(bus.id, {
            id: bus.id,
            input,
            muteSink,
            gain,
            analyser,
            timeBuf: new Float32Array(new ArrayBuffer(analyser.fftSize * 4)),
            clipL: false,
            clipR: false,
            lastPeak: { l: 0, r: 0, clipL: false, clipR: false }
          });
        }
        for (const bus of this.routing.buses) {
          const nodes = this.busNodes.get(bus.id);
          const downstream = bus.output === MASTER_OUTPUT_ID ? this.masterGain : this.busNodes.get(bus.output)?.input ?? this.masterGain;
          nodes.analyser.disconnect();
          nodes.analyser.connect(downstream);
          const effective = bus.muted ? 0 : bus.gain * (anyBusSolo && !bus.solo ? 0 : 1);
          nodes.gain.gain.setTargetAtTime(effective, ctx.currentTime, 0.01);
        }
      }
      /** 计算 voice 应挂的节点并改接（仅连接变化时才断开重接） */
      routeVoice(voice) {
        const track = voice.spec;
        const audible = this.shouldBeAudible(track);
        const busId = this.busNodes.has(track.busId) ? track.busId : this.routing.buses[0]?.id ?? DEFAULT_BUS_ID;
        const nodes = this.busNodes.get(busId);
        if (!nodes) return;
        const target = audible ? nodes.input : nodes.muteSink;
        if (voice.routedTo !== target) {
          voice.panner.disconnect();
          voice.panner.connect(target);
          voice.routedTo = target;
        }
        voice.audiblyRouted = audible;
      }
      // ---------- 全局参数 ----------
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
      setMasterGain(g2) {
        if (this.masterGain && this.ctx) {
          this.masterGain.gain.setTargetAtTime(g2, this.ctx.currentTime, 0.01);
        }
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
      // ---------- 声轨缓冲与节点 ----------
      /**
       * 确保声轨缓冲与节点就绪。
       * 已存在的 voice 只做实时参数更新（位置/增益/路由/loop），绝不重启源。
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
          this.updateVoiceLive(existing, track);
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
        trackGain.gain.value = track.muted ? 0 : track.gain;
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
        const voice = {
          trackId: track.id,
          spec: track,
          source,
          trackGain,
          panner,
          routedTo: null,
          audiblyRouted: false,
          playing: false,
          consumed: false,
          startedAt: 0,
          offset: 0,
          duration: buffer.duration
        };
        this.routeVoice(voice);
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
      shouldBeAudible(track) {
        if (track.muted) return false;
        if (this.anySolo) return track.solo;
        return true;
      }
      /** 实时参数更新：不触碰 source 节点 —— 移动声源/迁移总线不会重启音轨 */
      updateVoiceLive(voice, track) {
        const ctx = this.ctx;
        const t = ctx.currentTime;
        const tau = Math.max(5e-3, this.spatial?.positionTimeConstant ?? 0.05);
        voice.panner.positionX.setTargetAtTime(track.position.x, t, tau);
        voice.panner.positionY.setTargetAtTime(track.position.y, t, tau);
        voice.panner.positionZ.setTargetAtTime(track.position.z, t, tau);
        voice.panner.distanceModel = this.spatial?.distanceModel ?? voice.panner.distanceModel;
        voice.trackGain.gain.setTargetAtTime(track.muted ? 0 : track.gain, t, 0.01);
        if (voice.source.loop !== track.loop) voice.source.loop = track.loop;
        voice.spec = track;
        this.routeVoice(voice);
      }
      /**
       * 高频实时同步：对已存在的 voice 更新位置/增益/loop/独奏与总线归属路由。
       * 不创建节点、不触碰 source，移动声源或迁移总线都不会重启音轨。
       * 尚未创建 voice 的声轨（未解锁/未解码）跳过，由 ensureTrack 负责。
       */
      syncTracks(tracks) {
        if (!this.ctx) return;
        this.anySolo = tracks.some((t) => t.solo);
        for (const tr of tracks) {
          const v = this.voices.get(tr.id);
          if (v) this.updateVoiceLive(v, tr);
        }
      }
      getChannelCount(trackId) {
        return this.buffers.get(trackId)?.numberOfChannels ?? null;
      }
      /**
       * 重建声轨输入图（切换立体声文件的 L/R 声道时使用）。
       * 保持播放偏移；若原本在播放，从同一位置继续（声道选择本身不属于“移动”）。
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
       * 停止旧节点并按最新参数重建（仅用于暂停/停止/跳转）。
       * 位置移动与总线迁移严禁走此路径。
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
        cancelAnimationFrame(this.rafHandle);
        for (const id of [...this.voices.keys()]) this.removeTrack(id);
        this.busNodes.clear();
        void this.ctx?.close();
        this.ctx = null;
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
var FakeStereoPanner = class extends FakeNode {
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
  positionTimeConstant = 0;
  orientationX = new FakeAudioParam(1);
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
var FakeMerger = class extends FakeNode {
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
  /** 测试可注入的时域峰值 */
  injectedPeak = 0;
  getFloatTimeDomainData(arr) {
    arr.fill(0);
    if (this.injectedPeak > 0) arr[0] = this.injectedPeak;
  }
};
var FakeAudioContext = class {
  state = "running";
  currentTime = 0;
  playbackRate = { value: 1 };
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
  createChannelMerger(ch) {
    return new FakeMerger();
  }
  createAnalyser() {
    return new FakeAnalyser();
  }
  createStereoPanner() {
    return new FakeStereoPanner();
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
g.requestAnimationFrame = (fn) => {
  return setTimeout(() => fn(0), 16);
};
g.cancelAnimationFrame = (id) => clearTimeout(id);
g.window = globalThis;
g.PannerNode = FakePanner;
var { AudioEngine: AudioEngine2, DecodeError: DecodeError2 } = await Promise.resolve().then(() => (init_audioEngine(), audioEngine_exports));
var { createSampleBuffer: createSampleBuffer2 } = await Promise.resolve().then(() => (init_samples(), samples_exports));
var { DEFAULT_BUS_ID: DEFAULT_BUS_ID2, createDefaultRouting: createDefaultRouting2, addBus: addBus2 } = await Promise.resolve().then(() => (init_routing(), routing_exports));
function baseTrack(over = {}) {
  return {
    id: "t1",
    name: "T",
    sourceType: "tone",
    loop: false,
    muted: false,
    solo: false,
    busId: DEFAULT_BUS_ID2,
    gain: 0.8,
    channel: 0,
    color: "#fff",
    position: { x: 2, y: 0, z: 0 },
    status: "pending",
    ...over
  };
}
function twoBusRouting() {
  const r0 = createDefaultRouting2();
  const r1 = addBus2(r0, [], "\u603B\u7EBF B");
  return { routing: r1.routing, busB: r1.busId };
}
function busNodesOf(engine) {
  return engine.busNodes;
}
function voicesOf(engine) {
  return engine.voices;
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
      // 右转 → forward (+1,0,0)
      pitch: 0,
      earHeight: 0
    });
    const li = engine.ctx.listener;
    assert.ok(Math.abs(li.forwardX.value - 1) < 1e-6);
    assert.ok(Math.abs(li.forwardZ.value) < 1e-6);
    assert.ok(Math.abs(li.upY.value - 1) < 1e-6);
    assert.ok(Math.abs(li.positionZ.value - 3) < 1e-6);
  });
  it("\u58F0\u8F68\u94FE\u8DEF\u4E3A source\u2192trackGain\u2192HRTF panner\u2192\u6240\u5C5E\u603B\u7EBF input\u2192busGain\u2192analyser\u2192master\uFF1B\u8DDD\u79BB\u6A21\u578B\u53C2\u6570\u4E0B\u53D1", async () => {
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
    const v = voicesOf(engine).get("t1");
    assert.equal(v.panner.panningModel, "HRTF");
    assert.equal(v.panner.distanceModel, "exponential");
    assert.equal(v.panner.refDistance, 2);
    assert.equal(v.panner.rolloffFactor, 1.5);
    assert.equal(v.panner.maxDistance, 25);
    assert.ok(Math.abs(v.panner.positionX.value - 2) < 1e-9);
    assert.ok(v.source.connects.some((c) => c.node === v.trackGain));
    assert.ok(v.trackGain.connects.some((c) => c.node === v.panner));
    const bus = busNodesOf(engine).get(DEFAULT_BUS_ID2);
    assert.ok(v.panner.connects.some((c) => c.node === bus.input));
    assert.ok(bus.input.connects.some((c) => c.node === bus.gain));
    assert.ok(bus.gain.connects.some((c) => c.node === bus.analyser));
    const master = engine.masterGain;
    assert.ok(bus.analyser.connects.some((c) => c.node === master));
  });
  it("\u9759\u97F3\u771F\u5B9E\u628A trackGain \u7F6E 0\uFF1B\u72EC\u594F\u628A\u975E\u72EC\u594F\u58F0\u8F68\u5207\u5230\u6240\u5C5E\u603B\u7EBF\u7684 muteSink", async () => {
    await engine.resume();
    const a = baseTrack({ id: "a" });
    const b = baseTrack({ id: "b", position: { x: -2, y: 0, z: 0 } });
    await engine.ensureTrack(a);
    await engine.ensureTrack(b);
    const voices = voicesOf(engine);
    const bus = busNodesOf(engine).get(DEFAULT_BUS_ID2);
    engine.syncTracks([{ ...a, muted: true }, b]);
    assert.equal(voices.get("a").trackGain.gain.value, 0);
    assert.equal(voices.get("b").trackGain.gain.value, 0.8);
    engine.syncTracks([{ ...a, muted: true }, { ...b, solo: true }]);
    assert.ok(voices.get("a").panner.connects.some((c) => c.node === bus.muteSink));
    assert.ok(voices.get("b").panner.connects.every((c) => c.node !== bus.muteSink));
    engine.syncTracks([{ ...a, muted: true }, b]);
    assert.ok(voices.get("a").panner.connects.some((c) => c.node === bus.muteSink));
    assert.ok(voices.get("a").panner.connects.every((c) => c.node === bus.muteSink));
  });
  it("\u79FB\u52A8\u58F0\u6E90\u53EA\u5199 AudioParam\uFF0C\u7EDD\u4E0D stop/start source\uFF08\u4E0D\u91CD\u542F\u97F3\u8F68\uFF09", async () => {
    await engine.resume();
    const t = baseTrack();
    await engine.playTrack(t);
    const v = voicesOf(engine).get("t1");
    const startsBefore = v.source.started.length;
    const stopsBefore = v.source.stopped;
    for (let i = 0; i < 10; i++) {
      engine.syncTracks([
        { ...t, position: { x: 2 + i * 0.1, y: 0.5, z: -i * 0.2 } }
      ]);
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
    await engine.playTrack(t);
    ctx.currentTime = 0.3;
    engine.pauseTrack(t);
    await engine.playTrack({ ...t });
    const v = voicesOf(engine).get("t1");
    const last = v.source.started[v.source.started.length - 1];
    assert.ok(Math.abs(last.offset - 0.3) < 1e-6);
  });
  it("\u603B\u7EBF\u589E\u76CA\u4E0E\u4E3B\u589E\u76CA\u771F\u5B9E\u5199\u5165\u5BF9\u5E94 GainNode\uFF1B\u4E3B\u8F93\u51FA\u786E\u5B9E\u8FDE\u5411 destination", async () => {
    await engine.resume();
    const routing = createDefaultRouting2();
    routing.buses[0].gain = 0.42;
    engine.setRouting(routing);
    engine.setMasterGain(0.71);
    const bus = busNodesOf(engine).get(DEFAULT_BUS_ID2);
    const master = engine.masterGain;
    assert.ok(Math.abs(bus.gain.gain.value - 0.42) < 1e-9);
    assert.ok(Math.abs(master.gain.value - 0.71) < 1e-9);
    const analyser = engine.analyser;
    const destination = engine.ctx.destination;
    assert.ok(analyser.connects.some((c) => c.node === destination));
  });
  it("\u574F\u6587\u4EF6\u89E3\u7801\u5931\u8D25\u629B\u51FA DecodeError\uFF0C\u4E14\u4E0D\u5F71\u54CD\u5176\u4ED6\u58F0\u8F68", async () => {
    await engine.resume();
    const bad = baseTrack({ id: "bad", sourceType: "file" });
    engine.setFileBlob("bad", new Blob([new TextEncoder().encode("BAD")], { type: "audio/x" }));
    await assert.rejects(engine.ensureTrack(bad), (err) => err instanceof DecodeError2);
    const good = baseTrack({ id: "good" });
    await engine.ensureTrack(good);
    assert.ok(voicesOf(engine).has("good"));
  });
  it("\u5185\u7F6E\u6837\u4F8B\u7F13\u51B2\u53EF\u7ECF\u5F15\u64CE\u5408\u6210\uFF0C\u65F6\u957F\u4E0E\u58F0\u9053\u7B26\u5408\u9884\u671F", async () => {
    await engine.resume();
    const buf = createSampleBuffer2(engine.ctx, "pulse");
    assert.equal(buf.numberOfChannels, 1);
    assert.ok(Math.abs(buf.duration - 1.6) < 1e-6);
  });
  it("\u4E24\u6761\u58F0\u6E90\u5206\u522B\u8FDB\u5165\u4E24\u6761\u603B\u7EBF\uFF1A\u8C03\u6574\u4E00\u6761\u603B\u7EBF\u589E\u76CA\u53EA\u5F71\u54CD\u8BE5\u603B\u7EBF\u8282\u70B9", async () => {
    await engine.resume();
    const { routing, busB } = twoBusRouting();
    engine.setRouting(routing);
    const a = baseTrack({ id: "a", busId: DEFAULT_BUS_ID2 });
    const b = baseTrack({ id: "b", busId: busB, position: { x: -2, y: 0, z: 0 } });
    await engine.ensureTrack(a);
    await engine.ensureTrack(b);
    const voices = voicesOf(engine);
    const busA = busNodesOf(engine).get(DEFAULT_BUS_ID2);
    const busBNodes = busNodesOf(engine).get(busB);
    assert.ok(voices.get("a").panner.connects.some((c) => c.node === busA.input));
    assert.ok(voices.get("b").panner.connects.some((c) => c.node === busBNodes.input));
    const master = engine.masterGain;
    assert.ok(busA.analyser.connects.some((c) => c.node === master));
    assert.ok(busBNodes.analyser.connects.some((c) => c.node === master));
    const r2 = {
      ...routing,
      buses: routing.buses.map((x) => x.id === busB ? { ...x, gain: 0.3 } : x)
    };
    engine.setRouting(r2);
    assert.ok(Math.abs(busBNodes.gain.gain.value - 0.3) < 1e-9);
    assert.ok(Math.abs(busA.gain.gain.value - 1) < 1e-9);
  });
  it("\u603B\u7EBF\u72EC\u594F\uFF1A\u5176\u4ED6\u603B\u7EBF\u6709\u6548\u589E\u76CA\u4E3A 0\uFF1B\u88AB\u72EC\u594F\u603B\u7EBF\u5185\u539F\u672C\u9759\u97F3\u7684\u8F68\u4ECD\u4FDD\u6301\u9759\u97F3", async () => {
    await engine.resume();
    const { routing, busB } = twoBusRouting();
    engine.setRouting(routing);
    const mutedInA = baseTrack({ id: "m", busId: DEFAULT_BUS_ID2, muted: true });
    const normalInA = baseTrack({ id: "a", busId: DEFAULT_BUS_ID2 });
    const inB = baseTrack({ id: "b", busId: busB });
    await engine.ensureTrack(mutedInA);
    await engine.ensureTrack(normalInA);
    await engine.ensureTrack(inB);
    engine.syncTracks([mutedInA, normalInA, inB]);
    const soloRouting = {
      ...routing,
      buses: routing.buses.map(
        (x) => x.id === DEFAULT_BUS_ID2 ? { ...x, solo: true } : x
      )
    };
    engine.setRouting(soloRouting);
    const busA = busNodesOf(engine).get(DEFAULT_BUS_ID2);
    const busBNodes = busNodesOf(engine).get(busB);
    assert.ok(Math.abs(busA.gain.gain.value - 1) < 1e-9, "\u72EC\u594F\u603B\u7EBF\u4FDD\u6301\u589E\u76CA");
    assert.equal(busBNodes.gain.gain.value, 0, "\u975E\u72EC\u594F\u603B\u7EBF\u5728\u771F\u5B9E\u94FE\u8DEF\u4E0A\u589E\u76CA\u4E3A 0");
    const voices = voicesOf(engine);
    assert.equal(voices.get("m").trackGain.gain.value, 0);
    assert.ok(voices.get("m").panner.connects.every((c) => c.node === busA.muteSink));
    assert.ok(voices.get("a").panner.connects.some((c) => c.node === busA.input));
  });
  it("\u64AD\u653E\u4E2D\u8FC1\u79FB\u603B\u7EBF\uFF1Asource \u4E0D\u91CD\u542F\u3001\u4E0D\u505C\u6B62\uFF0Cpanner \u4F4D\u7F6E\u4E0D\u53D8\uFF0C\u4EC5\u6539\u63A5\u5230\u65B0\u603B\u7EBF", async () => {
    await engine.resume();
    const { routing, busB } = twoBusRouting();
    engine.setRouting(routing);
    const t = baseTrack({ id: "mv", busId: DEFAULT_BUS_ID2, position: { x: 1.5, y: 0.5, z: -2 } });
    await engine.playTrack({ ...t, loop: true });
    const v = voicesOf(engine).get("mv");
    const startsBefore = v.source.started.length;
    const stopsBefore = v.source.stopped;
    const srcBefore = v.source;
    engine.syncTracks([{ ...t, loop: true, busId: busB }]);
    const busBNodes = busNodesOf(engine).get(busB);
    assert.equal(v.source, srcBefore, "source \u8282\u70B9\u672A\u88AB\u66FF\u6362");
    assert.equal(v.source.started.length, startsBefore, "source \u6CA1\u6709\u518D\u6B21 start\uFF08\u65E0\u91CD\u542F/\u53CC\u91CD\u53D1\u58F0\uFF09");
    assert.equal(v.source.stopped, stopsBefore, "source \u672A\u88AB stop");
    assert.ok(v.panner.connects.some((c) => c.node === busBNodes.input), "panner \u5DF2\u6539\u63A5\u5230\u603B\u7EBF B");
    assert.ok(Math.abs(v.panner.positionX.value - 1.5) < 1e-9);
    assert.ok(Math.abs(v.panner.positionY.value - 0.5) < 1e-9);
    assert.ok(Math.abs(v.panner.positionZ.value - -2) < 1e-9);
  });
  it("\u5220\u9664\u603B\u7EBF\u540E\u5176\u8282\u70B9\u7EC4\u88AB\u62C6\u9664\uFF0C\u5269\u4F59\u603B\u7EBF\u4E0D\u53D7\u5F71\u54CD", async () => {
    await engine.resume();
    const { routing, busB } = twoBusRouting();
    engine.setRouting(routing);
    assert.ok(busNodesOf(engine).has(busB));
    const busBNodes = busNodesOf(engine).get(busB);
    engine.setRouting(createDefaultRouting2());
    assert.ok(!busNodesOf(engine).has(busB));
    assert.ok(busBNodes.gain.disconnected, "\u88AB\u5220\u603B\u7EBF\u7684\u589E\u76CA\u8282\u70B9\u5DF2\u65AD\u5F00");
    assert.ok(busNodesOf(engine).has(DEFAULT_BUS_ID2));
  });
  it("\u603B\u7EBF\u7EA7\u8054\uFF1A\u5B50\u603B\u7EBF analyser \u8F93\u51FA\u63A5\u5230\u7236\u603B\u7EBF input", async () => {
    await engine.resume();
    const { routing, busB } = twoBusRouting();
    const cascaded = {
      ...routing,
      buses: routing.buses.map(
        (b) => b.id === busB ? { ...b, output: DEFAULT_BUS_ID2 } : b
      )
    };
    engine.setRouting(cascaded);
    const busA = busNodesOf(engine).get(DEFAULT_BUS_ID2);
    const busBNodes = busNodesOf(engine).get(busB);
    assert.ok(busBNodes.analyser.connects.some((c) => c.node === busA.input));
    const master = engine.masterGain;
    assert.ok(busA.analyser.connects.some((c) => c.node === master));
  });
  it("\u6BCF\u6761\u603B\u7EBF\u7684\u5CF0\u503C\u8BFB\u6570\u6765\u81EA\u5404\u81EA\u4E32\u8054\u5728\u94FE\u4E0A\u7684 analyser\uFF08\u975E\u754C\u9762\u8BA1\u7B97\u503C\uFF09", async () => {
    await engine.resume();
    const { routing, busB } = twoBusRouting();
    engine.setRouting(routing);
    const busA = busNodesOf(engine).get(DEFAULT_BUS_ID2);
    const busBNodes = busNodesOf(engine).get(busB);
    busA.analyser.injectedPeak = 0.5;
    busBNodes.analyser.injectedPeak = 1.2;
    const seen = [];
    const off = engine.onBusLevels((lv) => seen.push({ ...lv }));
    await new Promise((r) => setTimeout(r, 50));
    off();
    assert.ok(seen.length > 0, "\u603B\u7EBF\u7535\u5E73\u56DE\u8C03\u88AB\u89E6\u53D1");
    const last = seen[seen.length - 1];
    assert.ok(Math.abs(last[DEFAULT_BUS_ID2].l - 0.5) < 1e-6);
    assert.ok(Math.abs(last[busB].l - 1.2) < 1e-6);
    assert.equal(last[busB].clipL, true, "B \u603B\u7EBF\u524A\u6CE2\u9501\u5B58");
    assert.equal(last[DEFAULT_BUS_ID2].clipL, false);
    engine.clearBusClipLatch(busB);
    const after = busNodesOf(engine).get(busB);
    assert.equal(after.clipL, false);
  });
  it("\u89E3\u9501\u5931\u8D25\u4E0D\u635F\u574F\u8DEF\u7531\u72B6\u6001\uFF0C\u91CD\u65B0\u89E3\u9501\u540E\u603B\u7EBF\u56FE\u7167\u5E38\u6784\u5EFA", async () => {
    const { routing, busB } = twoBusRouting();
    engine.setRouting(routing);
    const origCtor = g.AudioContext;
    g.AudioContext = class extends FakeAudioContext {
      constructor() {
        super();
        this.state = "suspended";
      }
      async resume() {
        throw new Error("autoplay policy");
      }
    };
    await assert.rejects(engine.resume());
    assert.equal(engine.unlock, "failed");
    assert.deepEqual(engine.getRouting(), routing, "\u8DEF\u7531\u72B6\u6001\u5728\u89E3\u9501\u5931\u8D25\u540E\u4FDD\u6301\u5B8C\u6574");
    g.AudioContext = origCtor;
    await engine.resume();
    assert.equal(engine.unlock, "unlocked");
    engine.setRouting(engine.getRouting());
    assert.ok(busNodesOf(engine).has(DEFAULT_BUS_ID2));
    assert.ok(busNodesOf(engine).has(busB));
  });
});
