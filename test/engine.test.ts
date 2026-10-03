/**
 * AudioEngine 图行为测试：使用最小 Web Audio 模拟（无真实音频设备）。
 * 验证：
 *  - 解锁后构建输出链；声轨经过 HRTF PannerNode 挂到所属总线
 *  - 静音 → trackGain=0；独奏 → 非独奏声轨被切到所属总线的 muteSink（真实不可闻）
 *  - 移动声源 / 播放中迁移总线只改变连接与 AudioParam，不重建 source（不重启音轨）
 *  - 总线/主增益真实进入链路；总线 solo 使其他总线增益为 0，被独奏总线内静音轨仍无声
 *  - 每条总线的峰值表串联在真实链路上
 *  - 峰值 worklet 不可用时不致命（回退表）
 *  - 解码失败以 DecodeError 单独抛出
 */
import assert from 'node:assert/strict';
import { describe, it, beforeEach, afterEach } from 'node:test';

// ---------- 最小 Web Audio 模拟 ----------

class FakeAudioParam {
  value: number;
  events: { time: number; value: number; tc: number }[] = [];
  constructor(v: number) {
    this.value = v;
  }
  setTargetAtTime(v: number, time: number, tc: number) {
    this.value = v;
    this.events.push({ time, value: v, tc });
  }
  setValueAtTime(v: number) {
    this.value = v;
  }
}

class FakeNode {
  connects: { node: FakeNode; out?: number; inp?: number }[] = [];
  disconnected = false;
  connectedFrom: FakeNode[] = [];
  connect(node: FakeNode | { input?: FakeNode }, out?: number, inp?: number): FakeNode {
    const target = (node as { input?: FakeNode }).input ?? (node as FakeNode);
    this.connects.push({ node: target, out, inp });
    target.connectedFrom.push(this);
    return target;
  }
  disconnect() {
    this.connects = [];
    this.disconnected = true;
  }
}

class FakeGain extends FakeNode {
  gain = new FakeAudioParam(1);
}
class FakeStereoPanner extends FakeNode {}
class FakeDestination extends FakeNode {}

class FakePanner extends FakeNode {
  panningModel = 'HRTF';
  distanceModel: DistanceModelStr = 'inverse';
  refDistance = 1;
  rolloffFactor = 1;
  maxDistance = 100;
  positionX = new FakeAudioParam(0);
  positionY = new FakeAudioParam(0);
  positionZ = new FakeAudioParam(0);
  positionTimeConstant = 0;
  orientationX = new FakeAudioParam(1);
  constructor(_ctx: unknown, opts: Record<string, unknown> = {}) {
    super();
    Object.assign(this, opts);
    if (opts.positionX !== undefined) this.positionX = new FakeAudioParam(opts.positionX as number);
    if (opts.positionY !== undefined) this.positionY = new FakeAudioParam(opts.positionY as number);
    if (opts.positionZ !== undefined) this.positionZ = new FakeAudioParam(opts.positionZ as number);
  }
}
type DistanceModelStr = 'linear' | 'inverse' | 'exponential';

class FakeBufferSource extends FakeNode {
  buffer: FakeAudioBuffer | null = null;
  loop = false;
  started: { time: number; offset: number }[] = [];
  stopped = 0;
  onended: (() => void) | null = null;
  start(time: number, offset = 0) {
    this.started.push({ time, offset });
  }
  stop() {
    this.stopped++;
  }
}

class FakeBuffer {
  duration: number;
  numberOfChannels: number;
  length: number;
  sampleRate: number;
  private data: Float32Array[];
  constructor(ch: number, length: number, sr: number, duration: number) {
    this.numberOfChannels = ch;
    this.length = length;
    this.sampleRate = sr;
    this.duration = duration;
    this.data = Array.from({ length: ch }, () => new Float32Array(length));
  }
  getChannelData(i: number) {
    return this.data[i];
  }
}
type FakeAudioBuffer = FakeBuffer;

class FakeSplitter extends FakeNode {
  constructor(public channels: number) {
    super();
  }
}
class FakeMerger extends FakeNode {}

class FakeListener {
  positionX = new FakeAudioParam(0);
  positionY = new FakeAudioParam(0);
  positionZ = new FakeAudioParam(0);
  forwardX = new FakeAudioParam(0);
  forwardY = new FakeAudioParam(0);
  forwardZ = new FakeAudioParam(-1);
  upX = new FakeAudioParam(0);
  upY = new FakeAudioParam(1);
  upZ = new FakeAudioParam(0);
}

class FakeAnalyser extends FakeNode {
  fftSize = 2048;
  /** 测试可注入的时域峰值 */
  injectedPeak = 0;
  getFloatTimeDomainData(arr: Float32Array) {
    arr.fill(0);
    if (this.injectedPeak > 0) arr[0] = this.injectedPeak;
  }
}

class FakeAudioContext {
  state: 'running' | 'suspended' = 'running';
  currentTime = 0;
  playbackRate = { value: 1 };
  destination = new FakeDestination();
  listener = new FakeListener();
  sampleRate = 48000;
  audioWorklet = {
    addModule: async () => {
      throw new Error('worklet unavailable in test');
    },
  };
  createGain() {
    return new FakeGain();
  }
  createBufferSource() {
    return new FakeBufferSource();
  }
  createBuffer(ch: number, length: number, sr: number) {
    return new FakeBuffer(ch, length, sr, length / sr);
  }
  createChannelSplitter(ch: number) {
    return new FakeSplitter(ch);
  }
  createChannelMerger(ch: number) {
    void ch;
    return new FakeMerger();
  }
  createAnalyser() {
    return new FakeAnalyser();
  }
  createStereoPanner() {
    return new FakeStereoPanner();
  }
  async resume() {
    this.state = 'running';
  }
  async decodeAudioData(buf: ArrayBuffer): Promise<FakeBuffer> {
    const text = new TextDecoder().decode(buf);
    if (text === 'BAD') throw new Error('EncodingError: fake bad file');
    return new FakeBuffer(1, 48000, 48000, 1);
  }
  async close() {}
}

const g = globalThis as unknown as Record<string, unknown>;
g.AudioContext = FakeAudioContext;
g.requestAnimationFrame = (fn: FrameRequestCallback) => {
  return setTimeout(() => fn(0), 16) as unknown as number;
};
g.cancelAnimationFrame = (id: number) => clearTimeout(id);
g.window = globalThis;
g.PannerNode = FakePanner;

const { AudioEngine, DecodeError } = await import('../src/lib/audioEngine.ts');
const { createSampleBuffer } = await import('../src/lib/samples.ts');
const { DEFAULT_BUS_ID, createDefaultRouting, addBus } = await import('../src/lib/routing.ts');

type RoutingGraph = import('../src/types.ts').RoutingGraph;
type Track = import('../src/types.ts').Track;

function baseTrack(over: Partial<Track> = {}): Track {
  return {
    id: 't1',
    name: 'T',
    sourceType: 'tone' as const,
    loop: false,
    muted: false,
    solo: false,
    busId: DEFAULT_BUS_ID,
    gain: 0.8,
    channel: 0,
    color: '#fff',
    position: { x: 2, y: 0, z: 0 },
    status: 'pending' as const,
    ...over,
  };
}

/** 两条总线的路由图：A（默认）与 B 都输出到 master */
function twoBusRouting(): { routing: RoutingGraph; busB: string } {
  const r0 = createDefaultRouting();
  const r1 = addBus(r0, [], '总线 B');
  return { routing: r1.routing, busB: r1.busId };
}

interface BusNodesFake {
  id: string;
  input: FakeGain;
  muteSink: FakeGain;
  gain: FakeGain;
  analyser: FakeAnalyser;
  clipL: boolean;
  clipR: boolean;
}

function busNodesOf(engine: unknown): Map<string, BusNodesFake> {
  return (engine as { busNodes: Map<string, BusNodesFake> }).busNodes;
}

function voicesOf(
  engine: unknown,
): Map<
  string,
  {
    source: FakeBufferSource;
    trackGain: FakeGain;
    panner: FakePanner;
    routedTo: FakeGain | null;
    audiblyRouted: boolean;
    offset: number;
  }
> {
  return (
    engine as {
      voices: Map<string, never>;
    }
  ).voices;
}

describe('AudioEngine 图行为（模拟环境）', () => {
  let engine: InstanceType<typeof AudioEngine>;

  beforeEach(() => {
    engine = new AudioEngine();
  });

  afterEach(() => {
    engine.dispose();
  });

  it('resume 解锁；setListener 写入与空间数学一致的朝向', async () => {
    await engine.resume();
    assert.equal(engine.unlock, 'unlocked');
    engine.setListener({
      position: { x: 0, y: 0, z: 3 },
      yaw: Math.PI / 2, // 右转 → forward (+1,0,0)
      pitch: 0,
      earHeight: 0,
    });
    const li = engine.ctx!.listener as unknown as FakeListener;
    assert.ok(Math.abs(li.forwardX.value - 1) < 1e-6);
    assert.ok(Math.abs(li.forwardZ.value) < 1e-6);
    assert.ok(Math.abs(li.upY.value - 1) < 1e-6);
    assert.ok(Math.abs(li.positionZ.value - 3) < 1e-6);
  });

  it('声轨链路为 source→trackGain→HRTF panner→所属总线 input→busGain→analyser→master；距离模型参数下发', async () => {
    await engine.resume();
    engine.setSpatialSettings({
      distanceModel: 'exponential',
      refDistance: 2,
      rolloffFactor: 1.5,
      maxDistance: 25,
      positionTimeConstant: 0.05,
      hrtfIR: 'none',
    });
    const track = baseTrack();
    await engine.ensureTrack(track);
    const v = voicesOf(engine).get('t1')!;
    assert.equal(v.panner.panningModel, 'HRTF');
    assert.equal(v.panner.distanceModel, 'exponential');
    assert.equal(v.panner.refDistance, 2);
    assert.equal(v.panner.rolloffFactor, 1.5);
    assert.equal(v.panner.maxDistance, 25);
    assert.ok(Math.abs(v.panner.positionX.value - 2) < 1e-9);
    // source → gain
    assert.ok(v.source.connects.some((c) => c.node === v.trackGain));
    // gain → panner
    assert.ok(v.trackGain.connects.some((c) => c.node === v.panner));
    // panner → 默认总线 input
    const bus = busNodesOf(engine).get(DEFAULT_BUS_ID)!;
    assert.ok(v.panner.connects.some((c) => c.node === bus.input));
    // 总线：input → gain → analyser → masterGain（真实链）
    assert.ok(bus.input.connects.some((c) => c.node === bus.gain));
    assert.ok(bus.gain.connects.some((c) => c.node === bus.analyser));
    const master = (engine as unknown as { masterGain: FakeGain }).masterGain;
    assert.ok(bus.analyser.connects.some((c) => c.node === master));
  });

  it('静音真实把 trackGain 置 0；独奏把非独奏声轨切到所属总线的 muteSink', async () => {
    await engine.resume();
    const a = baseTrack({ id: 'a' });
    const b = baseTrack({ id: 'b', position: { x: -2, y: 0, z: 0 } });
    await engine.ensureTrack(a);
    await engine.ensureTrack(b);
    const voices = voicesOf(engine);
    const bus = busNodesOf(engine).get(DEFAULT_BUS_ID)!;

    engine.syncTracks([{ ...a, muted: true }, b]);
    assert.equal(voices.get('a')!.trackGain.gain.value, 0);
    assert.equal(voices.get('b')!.trackGain.gain.value, 0.8);

    engine.syncTracks([{ ...a, muted: true }, { ...b, solo: true }]);
    // a 既静音又非独奏 → muteSink；b 独奏 → 留在可闻输入
    assert.ok(voices.get('a')!.panner.connects.some((c) => c.node === bus.muteSink));
    assert.ok(voices.get('b')!.panner.connects.every((c) => c.node !== bus.muteSink));

    // 解除独奏后，a 仍因 muted 留在 muteSink，b 回到可闻输入
    engine.syncTracks([{ ...a, muted: true }, b]);
    assert.ok(voices.get('a')!.panner.connects.some((c) => c.node === bus.muteSink));
    assert.ok(voices.get('a')!.panner.connects.every((c) => c.node === bus.muteSink));
  });

  it('移动声源只写 AudioParam，绝不 stop/start source（不重启音轨）', async () => {
    await engine.resume();
    const t = baseTrack();
    await engine.playTrack(t);
    const v = voicesOf(engine).get('t1')!;
    const startsBefore = v.source.started.length;
    const stopsBefore = v.source.stopped;

    for (let i = 0; i < 10; i++) {
      engine.syncTracks([
        { ...t, position: { x: 2 + i * 0.1, y: 0.5, z: -i * 0.2 } },
      ]);
    }
    assert.ok(Math.abs(v.panner.positionX.value - 2.9) < 1e-9);
    assert.ok(Math.abs(v.panner.positionY.value - 0.5) < 1e-9);
    assert.ok(Math.abs(v.panner.positionZ.value - -1.8) < 1e-9);
    assert.equal(v.source.started.length, startsBefore);
    assert.equal(v.source.stopped, stopsBefore);
  });

  it('暂停会停止并重建节点且保留偏移；再次播放从偏移开始', async () => {
    await engine.resume();
    const ctx = engine.ctx as unknown as FakeAudioContext;
    const t = { ...baseTrack(), loop: false };
    await engine.playTrack(t);
    ctx.currentTime = 0.3;
    engine.pauseTrack(t);
    await engine.playTrack({ ...t });
    const v = voicesOf(engine).get('t1')!;
    // 最新一次 start 的 offset ≈ 0.3
    const last = v.source.started[v.source.started.length - 1];
    assert.ok(Math.abs(last.offset - 0.3) < 1e-6);
  });

  it('总线增益与主增益真实写入对应 GainNode；主输出确实连向 destination', async () => {
    await engine.resume();
    const routing = createDefaultRouting();
    routing.buses[0].gain = 0.42;
    engine.setRouting(routing);
    engine.setMasterGain(0.71);
    const bus = busNodesOf(engine).get(DEFAULT_BUS_ID)!;
    const master = (engine as unknown as { masterGain: FakeGain }).masterGain;
    assert.ok(Math.abs(bus.gain.gain.value - 0.42) < 1e-9);
    assert.ok(Math.abs(master.gain.value - 0.71) < 1e-9);
    // 主输出确实连向 destination（master → analyser → destination，worklet 不可用时）
    const analyser = (engine as unknown as { analyser: FakeAnalyser }).analyser;
    const destination = (engine.ctx as unknown as FakeAudioContext).destination;
    assert.ok(analyser.connects.some((c) => c.node === destination));
  });

  it('坏文件解码失败抛出 DecodeError，且不影响其他声轨', async () => {
    await engine.resume();
    const bad = baseTrack({ id: 'bad', sourceType: 'file' as const });
    engine.setFileBlob('bad', new Blob([new TextEncoder().encode('BAD')], { type: 'audio/x' }));
    await assert.rejects(engine.ensureTrack(bad), (err: unknown) => err instanceof DecodeError);

    const good = baseTrack({ id: 'good' });
    await engine.ensureTrack(good);
    assert.ok(voicesOf(engine).has('good'));
  });

  it('内置样例缓冲可经引擎合成，时长与声道符合预期', async () => {
    await engine.resume();
    const buf = createSampleBuffer(engine.ctx as unknown as BaseAudioContext, 'pulse');
    assert.equal(buf.numberOfChannels, 1);
    assert.ok(Math.abs(buf.duration - 1.6) < 1e-6);
  });

  // ---------- 多总线 ----------

  it('两条声源分别进入两条总线：调整一条总线增益只影响该总线节点', async () => {
    await engine.resume();
    const { routing, busB } = twoBusRouting();
    engine.setRouting(routing);
    const a = baseTrack({ id: 'a', busId: DEFAULT_BUS_ID });
    const b = baseTrack({ id: 'b', busId: busB, position: { x: -2, y: 0, z: 0 } });
    await engine.ensureTrack(a);
    await engine.ensureTrack(b);
    const voices = voicesOf(engine);
    const busA = busNodesOf(engine).get(DEFAULT_BUS_ID)!;
    const busBNodes = busNodesOf(engine).get(busB)!;

    // 各自挂到各自总线的 input
    assert.ok(voices.get('a')!.panner.connects.some((c) => c.node === busA.input));
    assert.ok(voices.get('b')!.panner.connects.some((c) => c.node === busBNodes.input));
    // 两条总线都输出到 master
    const master = (engine as unknown as { masterGain: FakeGain }).masterGain;
    assert.ok(busA.analyser.connects.some((c) => c.node === master));
    assert.ok(busBNodes.analyser.connects.some((c) => c.node === master));

    // 只调 B 总线增益：A 总线增益不变
    const r2: RoutingGraph = {
      ...routing,
      buses: routing.buses.map((x) => (x.id === busB ? { ...x, gain: 0.3 } : x)),
    };
    engine.setRouting(r2);
    assert.ok(Math.abs(busBNodes.gain.gain.value - 0.3) < 1e-9);
    assert.ok(Math.abs(busA.gain.gain.value - 1) < 1e-9);
  });

  it('总线独奏：其他总线有效增益为 0；被独奏总线内原本静音的轨仍保持静音', async () => {
    await engine.resume();
    const { routing, busB } = twoBusRouting();
    engine.setRouting(routing);
    const mutedInA = baseTrack({ id: 'm', busId: DEFAULT_BUS_ID, muted: true });
    const normalInA = baseTrack({ id: 'a', busId: DEFAULT_BUS_ID });
    const inB = baseTrack({ id: 'b', busId: busB });
    await engine.ensureTrack(mutedInA);
    await engine.ensureTrack(normalInA);
    await engine.ensureTrack(inB);
    engine.syncTracks([mutedInA, normalInA, inB]);

    // 独奏总线 A
    const soloRouting: RoutingGraph = {
      ...routing,
      buses: routing.buses.map((x) =>
        x.id === DEFAULT_BUS_ID ? { ...x, solo: true } : x,
      ),
    };
    engine.setRouting(soloRouting);
    const busA = busNodesOf(engine).get(DEFAULT_BUS_ID)!;
    const busBNodes = busNodesOf(engine).get(busB)!;
    assert.ok(Math.abs(busA.gain.gain.value - 1) < 1e-9, '独奏总线保持增益');
    assert.equal(busBNodes.gain.gain.value, 0, '非独奏总线在真实链路上增益为 0');

    // 被独奏总线内原本静音的轨：trackGain 仍为 0 且挂在 muteSink 上
    const voices = voicesOf(engine);
    assert.equal(voices.get('m')!.trackGain.gain.value, 0);
    assert.ok(voices.get('m')!.panner.connects.every((c) => c.node === busA.muteSink));
    // 同总线未静音的轨仍在可闻输入
    assert.ok(voices.get('a')!.panner.connects.some((c) => c.node === busA.input));
  });

  it('播放中迁移总线：source 不重启、不停止，panner 位置不变，仅改接到新总线', async () => {
    await engine.resume();
    const { routing, busB } = twoBusRouting();
    engine.setRouting(routing);
    const t = baseTrack({ id: 'mv', busId: DEFAULT_BUS_ID, position: { x: 1.5, y: 0.5, z: -2 } });
    await engine.playTrack({ ...t, loop: true });
    const v = voicesOf(engine).get('mv')!;
    const startsBefore = v.source.started.length;
    const stopsBefore = v.source.stopped;
    const srcBefore = v.source;

    // 迁移到总线 B（播放中）
    engine.syncTracks([{ ...t, loop: true, busId: busB }]);

    const busBNodes = busNodesOf(engine).get(busB)!;
    assert.equal(v.source, srcBefore, 'source 节点未被替换');
    assert.equal(v.source.started.length, startsBefore, 'source 没有再次 start（无重启/双重发声）');
    assert.equal(v.source.stopped, stopsBefore, 'source 未被 stop');
    assert.ok(v.panner.connects.some((c) => c.node === busBNodes.input), 'panner 已改接到总线 B');
    // 方位不跳变：position AudioParam 保持原值
    assert.ok(Math.abs(v.panner.positionX.value - 1.5) < 1e-9);
    assert.ok(Math.abs(v.panner.positionY.value - 0.5) < 1e-9);
    assert.ok(Math.abs(v.panner.positionZ.value - -2) < 1e-9);
  });

  it('删除总线后其节点组被拆除，剩余总线不受影响', async () => {
    await engine.resume();
    const { routing, busB } = twoBusRouting();
    engine.setRouting(routing);
    assert.ok(busNodesOf(engine).has(busB));
    const busBNodes = busNodesOf(engine).get(busB)!;

    // 回到单总线图（等价于删除 B 后的提交结果）
    engine.setRouting(createDefaultRouting());
    assert.ok(!busNodesOf(engine).has(busB));
    assert.ok(busBNodes.gain.disconnected, '被删总线的增益节点已断开');
    assert.ok(busNodesOf(engine).has(DEFAULT_BUS_ID));
  });

  it('总线级联：子总线 analyser 输出接到父总线 input', async () => {
    await engine.resume();
    const { routing, busB } = twoBusRouting();
    // B → A（A → master）
    const cascaded: RoutingGraph = {
      ...routing,
      buses: routing.buses.map((b) =>
        b.id === busB ? { ...b, output: DEFAULT_BUS_ID } : b,
      ),
    };
    engine.setRouting(cascaded);
    const busA = busNodesOf(engine).get(DEFAULT_BUS_ID)!;
    const busBNodes = busNodesOf(engine).get(busB)!;
    assert.ok(busBNodes.analyser.connects.some((c) => c.node === busA.input));
    const master = (engine as unknown as { masterGain: FakeGain }).masterGain;
    assert.ok(busA.analyser.connects.some((c) => c.node === master));
  });

  it('每条总线的峰值读数来自各自串联在链上的 analyser（非界面计算值）', async () => {
    await engine.resume();
    const { routing, busB } = twoBusRouting();
    engine.setRouting(routing);
    const busA = busNodesOf(engine).get(DEFAULT_BUS_ID)!;
    const busBNodes = busNodesOf(engine).get(busB)!;
    busA.analyser.injectedPeak = 0.5;
    busBNodes.analyser.injectedPeak = 1.2; // 触发削波锁存

    const seen: Record<string, { l: number; clipL: boolean }>[] = [];
    const off = engine.onBusLevels((lv) => seen.push({ ...lv }));
    await new Promise((r) => setTimeout(r, 50));
    off();
    assert.ok(seen.length > 0, '总线电平回调被触发');
    const last = seen[seen.length - 1] as Record<string, { l: number; clipL: boolean }>;
    // float32 时域数据有舍入，容差取 1e-6
    assert.ok(Math.abs(last[DEFAULT_BUS_ID].l - 0.5) < 1e-6);
    assert.ok(Math.abs(last[busB].l - 1.2) < 1e-6);
    assert.equal(last[busB].clipL, true, 'B 总线削波锁存');
    assert.equal(last[DEFAULT_BUS_ID].clipL, false);

    engine.clearBusClipLatch(busB);
    const after = busNodesOf(engine).get(busB)!;
    assert.equal(after.clipL, false);
  });

  it('解锁失败不损坏路由状态，重新解锁后总线图照常构建', async () => {
    const { routing, busB } = twoBusRouting();
    engine.setRouting(routing); // 未解锁时仅记录
    // 强制解锁失败（构造即 suspended 且 resume 被拒）
    const origCtor = g.AudioContext;
    g.AudioContext = class extends FakeAudioContext {
      constructor() {
        super();
        this.state = 'suspended';
      }
      override async resume(): Promise<void> {
        throw new Error('autoplay policy');
      }
    };
    await assert.rejects(engine.resume());
    assert.equal(engine.unlock, 'failed');
    assert.deepEqual(engine.getRouting(), routing, '路由状态在解锁失败后保持完整');

    g.AudioContext = origCtor;
    await engine.resume();
    assert.equal(engine.unlock, 'unlocked');
    engine.setRouting(engine.getRouting());
    assert.ok(busNodesOf(engine).has(DEFAULT_BUS_ID));
    assert.ok(busNodesOf(engine).has(busB));
  });
});
