import type { WorkbenchApi } from '../state/useWorkbench';
import { Meter } from './Meter';
import { gainToDb } from '../lib/spatial';
import { MASTER_OUTPUT_ID, wouldCreateCycle } from '../lib/routing';
import type { Bus } from '../types';

interface Props {
  api: WorkbenchApi;
}

/**
 * 本地监听总线面板：每条总线的增益/静音/独奏/输出级联与真实链路峰值表。
 * 删除仍有成员的总线、建立循环输出都会被事务拒绝并在此给出提示（旧图保留）。
 */
export function BusPanel({ api }: Props) {
  const { routing } = api.doc;
  const anySolo = routing.buses.some((b) => b.solo);

  return (
    <div className="bus-panel">
      <div className="bus-panel-head">
        <span className="bus-panel-title">监听总线</span>
        <button className="btn mini" onClick={() => api.addBus()} title="新增一条本地监听总线">
          ＋ 总线
        </button>
      </div>
      {routing.buses.map((bus) => (
        <BusRow
          key={bus.id}
          bus={bus}
          api={api}
          anySolo={anySolo}
          memberCount={api.doc.tracks.filter((t) => t.busId === bus.id).length}
        />
      ))}
    </div>
  );
}

function BusRow({
  bus,
  api,
  anySolo,
  memberCount,
}: {
  bus: Bus;
  api: WorkbenchApi;
  anySolo: boolean;
  memberCount: number;
}) {
  const buses = api.doc.routing.buses;
  const level = api.busLevels[bus.id] ?? { l: 0, r: 0, clipL: false, clipR: false };
  // 有效增益预示（真实增益由引擎在链上执行）：mute 优先，其次它线独奏
  const effective = bus.muted ? 0 : bus.gain * (anySolo && !bus.solo ? 0 : 1);

  return (
    <div className={`bus-row ${bus.muted ? 'muted-bus' : ''}`}>
      <div className="bus-row-head">
        <span className="track-color" style={{ background: bus.color }} />
        <input
          className="bus-name"
          value={bus.name}
          onChange={(e) => api.renameBus(bus.id, e.target.value)}
          title="总线名称"
        />
        <span className="bus-members" title="归属该总线的声轨数">
          {memberCount} 轨
        </span>
        <button
          className={`btn mini ${bus.muted ? 'active' : ''}`}
          onClick={() => api.toggleBusMute(bus.id)}
          title="总线静音（真实链路上增益置 0）"
        >
          M
        </button>
        <button
          className={`btn mini ${bus.solo ? 'solo' : ''}`}
          onClick={() => api.toggleBusSolo(bus.id)}
          title="总线独奏（其他总线在真实链路上静音）"
        >
          S
        </button>
        <button
          className="btn mini ghost danger"
          onClick={() => api.removeBus(bus.id)}
          title={memberCount > 0 ? '仍有成员，删除会被拒绝' : '删除该总线'}
        >
          ✕
        </button>
      </div>

      <label className="gain-fader">
        <span>增益</span>
        <input
          type="range"
          min={0}
          max={1.5}
          step={0.01}
          value={bus.gain}
          onChange={(e) => api.setBusGain(bus.id, Number(e.target.value))}
        />
        <b>{gainToDb(effective)}</b>
      </label>

      <label className="bus-output">
        <span>输出 →</span>
        <select
          value={bus.output}
          onChange={(e) => api.setBusOutput(bus.id, e.target.value)}
        >
          <option value={MASTER_OUTPUT_ID}>主输出</option>
          {buses
            .filter((b) => b.id !== bus.id)
            .map((b) => {
              const cyclic = wouldCreateCycle(buses, bus.id, b.id);
              return (
                <option key={b.id} value={b.id} disabled={cyclic}>
                  {b.name}
                  {cyclic ? '（会成环）' : ''}
                </option>
              );
            })}
        </select>
      </label>

      <div className="bus-meter" title="串联在该总线真实输出链上的峰值表">
        <Meter levels={level} onClear={() => api.clearBusClip(bus.id)} />
      </div>
    </div>
  );
}
