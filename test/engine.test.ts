/**
 * AudioEngine 图行为测试：使用最小 Web Audio 模拟（无真实音频设备）。
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
  getFloatTimeDomainData(arr: Float32Array) {
    arr.fill(0);
  }
}

class FakeAudioContext {
  state: 'running' | 'suspended' = 'running';
  currentTime = 0;
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
  createAnalyser() {
    return new FakeAnalyser();
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
g.requestAnimationFrame = (fn: FrameRequestCallback) => setTimeout(() => fn(0), 16) as unknown as number;
g.cancelAnimationFrame = (id: number) => clearTimeout(id);
g.window = globalThis;
g.PannerNode = FakePanner;

const { AudioEngine, DecodeError } = await import('../src/lib/audioEngine.ts');
const { createSampleBuffer } = await import('../src/lib/samples.ts');
const { createDefaultBuses } = await import('../src/lib/routing.ts');

function baseTrack(over: Partial<import('../src/types.ts').Track> = {}) {
  return {
    id: 't1',
    name: 'T',
    sourceType: 'tone' as const,
    busId: 'bus-a',
    loop: false,
    muted: false,
    solo: false,
    gain: 0.8,
    channel: 0,
    color: '#fff',
    position: { x: 2, y: 0, z: 0 },
    status: 'pending' as const,
    ...over,
  };
}

function buses() {
  return createDefaultBuses();
}

function routeState(tracks: import('../src/types.ts').Track[], overrides: Partial<{ masterGain: number; masterMuted: boolean; buses: ReturnType<typeof buses> }> = {}) {
  return {
    buses: overrides.buses ?? buses(),
    tracks,
    masterGain: overrides.masterGain ?? 0.9,
    masterMuted: overrides.masterMuted ?? false,
  };
}

type EngineInternals = {
  voices: Map<string, { source: FakeBufferSource; trackGain: FakeGain; panner: FakePanner; busId: string }>;
  busNodes: Map<string, { spec: { id: string }; gain: FakeGain; analyser: FakeAnalyser }>;
  masterGain: FakeGain;
  masterAnalyser: FakeAnalyser;
};

function internals(engine: InstanceType<typeof AudioEngine>): EngineInternals {
  return engine as unknown as EngineInternals;
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
      yaw: Math.PI / 2,
      pitch: 0,
      earHeight: 0,
    });
    const li = engine.ctx!.listener as unknown as { forwardX: FakeAudioParam; forwardZ: FakeAudioParam; upY: FakeAudioParam; positionZ: FakeAudioParam };
    assert.ok(Math.abs(li.forwardX.value - 1) < 1e-6);
    assert.ok(Math.abs(li.forwardZ.value) < 1e-6);
    assert.ok(Math.abs(li.upY.value - 1) < 1e-6);
    assert.ok(Math.abs(li.positionZ.value - 3) < 1e-6);
  });

  it('声轨链路为 source→trackGain→HRTF panner→所属总线→主输出；距离模型参数下发', async () => {
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
    const ie = internals(engine);
    const v = ie.voices.get('t1')!;
    assert.equal(v.panner.panningModel, 'HRTF');
    assert.equal(v.panner.distanceModel, 'exponential');
    assert.equal(v.panner.refDistance, 2);
    assert.equal(v.panner.rolloffFactor, 1.5);
    assert.equal(v.panner.maxDistance, 25);
    assert.ok(Math.abs(v.panner.positionX.value - 2) < 1e-9);
    assert.ok(v.source.connects.some((c) => c.node === v.trackGain));
    assert.ok(v.trackGain.connects.some((c) => c.node === v.panner));
    const busA = ie.busNodes.get('bus-a')!;
    assert.deepEqual(v.panner.connects.map((c) => c.node), [busA.gain]);
    assert.ok(busA.gain.connects.some((c) => c.node === busA.analyser));
    assert.ok(busA.analyser.connects.some((c) => c.node === ie.masterGain));
  });

  it('调整一个总线增益只影响该总线 GainNode，另一总线和主输出保持不变', async () => {
    await engine.resume();
    const a = baseTrack({ id: 'a', busId: 'bus-a' });
    const b = baseTrack({ id: 'b', busId: 'bus-b', position: { x: -2, y: 0, z: 0 } });
    engine.syncRouting(routeState([a, b]));
    await engine.ensureTrack(a);
    await engine.ensureTrack(b);
    const ie = internals(engine);
    const nextBuses = buses();
    nextBuses[0].gain = 0.25;
    engine.syncRouting(routeState([a, b], { buses: nextBuses }));
    assert.equal(ie.busNodes.get('bus-a')!.gain.gain.value, 0.25);
    assert.equal(ie.busNodes.get('bus-b')!.gain.gain.value, 1);
    assert.equal(ie.masterGain.gain.value, 0.9);
  });

  it('总线独奏只让其他总线物理静音；独奏总线内原本 M 的轨仍为 0', async () => {
    await engine.resume();
    const aMuted = baseTrack({ id: 'a', busId: 'bus-a', muted: true });
    const b = baseTrack({ id: 'b', busId: 'bus-b', position: { x: -2, y: 0, z: 0 } });
    engine.syncRouting(routeState([aMuted, b]));
    await engine.ensureTrack(aMuted);
    await engine.ensureTrack(b);
    const ie = internals(engine);

    const soloBuses = buses();
    soloBuses[0].solo = true;
    engine.syncRouting(routeState([aMuted, b], { buses: soloBuses }));
    assert.equal(ie.voices.get('a')!.trackGain.gain.value, 0);
    assert.equal(ie.voices.get('b')!.trackGain.gain.value, 0);

    const aAudible = { ...aMuted, muted: false };
    engine.syncRouting(routeState([aAudible, b], { buses: soloBuses }));
    assert.equal(ie.voices.get('a')!.trackGain.gain.value, 0.8);
    assert.equal(ie.voices.get('b')!.trackGain.gain.value, 0);
  });

  it('播放中迁移总线只重接一次 panner，不 stop/start source，方位和节点身份不变', async () => {
    await engine.resume();
    const t = baseTrack();
    engine.syncRouting(routeState([t]));
    await engine.playTrack(t);
    const ie = internals(engine);
    const before = ie.voices.get('t1')!;
    const sourceBefore = before.source;
    const pannerBefore = before.panner;
    const startsBefore = sourceBefore.started.length;
    const stopsBefore = sourceBefore.stopped;

    const moved = { ...t, busId: 'bus-b' };
    engine.syncRouting(routeState([moved]));
    const after = ie.voices.get('t1')!;
    const busB = ie.busNodes.get('bus-b')!;
    const busA = ie.busNodes.get('bus-a')!;
    assert.equal(after.source, sourceBefore);
    assert.equal(after.panner, pannerBefore);
    assert.equal(after.busId, 'bus-b');
    assert.equal(after.panner.connects.length, 1);
    assert.ok(!after.panner.connects.some((c) => c.node === busA.gain));
    assert.deepEqual(after.panner.connects.map((c) => c.node), [busB.gain]);
    assert.equal(sourceBefore.started.length, startsBefore);
    assert.equal(sourceBefore.stopped, stopsBefore);
    assert.equal(after.panner.positionX.value, 2);
  });

  it('移动声源只写 AudioParam，绝不 stop/start source', async () => {
    await engine.resume();
    const t = baseTrack();
    await engine.playTrack(t);
    const ie = internals(engine);
    const v = ie.voices.get('t1')!;
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

  it('暂停会停止并重建节点且保留偏移；再次播放从偏移开始', async () => {
    await engine.resume();
    const ctx = engine.ctx as unknown as FakeAudioContext;
    const t = { ...baseTrack(), loop: false };
    engine.syncRouting(routeState([t]));
    await engine.playTrack(t);
    ctx.currentTime = 0.3;
    engine.pauseTrack(t);
    await engine.playTrack({ ...t });
    const v = internals(engine).voices.get('t1')!;
    const last = v.source.started[v.source.started.length - 1];
    assert.ok(Math.abs(last.offset - 0.3) < 1e-6);
  });

  it('主增益和主静音真实写入 masterGain；主表串联在 destination 前', async () => {
    await engine.resume();
    const ie = internals(engine);
    engine.syncRouting(routeState([], { masterGain: 0.71 }));
    assert.equal(ie.masterGain.gain.value, 0.71);
    engine.syncRouting(routeState([], { masterGain: 0.71, masterMuted: true }));
    assert.equal(ie.masterGain.gain.value, 0);
    const destination = (engine.ctx as unknown as FakeAudioContext).destination;
    assert.ok(ie.masterAnalyser.connects.some((c) => c.node === destination));
  });

  it('坏文件解码失败抛出 DecodeError，且不影响其他声轨', async () => {
    await engine.resume();
    const bad = baseTrack({ id: 'bad', sourceType: 'file' as const });
    engine.setFileBlob('bad', new Blob([new TextEncoder().encode('BAD')], { type: 'audio/x' }));
    await assert.rejects(engine.ensureTrack(bad), (err: unknown) => err instanceof DecodeError);

    const good = baseTrack({ id: 'good' });
    await engine.ensureTrack(good);
    assert.ok(internals(engine).voices.has('good'));
  });

  it('内置样例缓冲可经引擎合成，时长与声道符合预期', async () => {
    await engine.resume();
    const buf = createSampleBuffer(engine.ctx as unknown as BaseAudioContext, 'pulse');
    assert.equal(buf.numberOfChannels, 1);
    assert.ok(Math.abs(buf.duration - 1.6) < 1e-6);
  });
});
