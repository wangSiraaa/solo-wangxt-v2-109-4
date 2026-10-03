import type { Bus } from '../types';
import type { WorkbenchApi } from '../state/useWorkbench';
import { Meter } from './Meter';
import { descendantBusIds } from '../lib/routing';
import { gainToDb } from '../lib/spatial';
import { TrackRow } from './TrackRow';

interface Props {
  api: WorkbenchApi;
}

export function BusPanel({ api }: Props) {
  const roots = api.doc.buses.filter((b) => b.parentId === null);
  return (
    <div className="bus-panel">
      <div className="bus-panel-head">
        <b>本地监听总线</b>
        <button className="btn mini" onClick={() => api.addBus(null)}>
          ＋ 根总线
        </button>
      </div>
      {roots.map((bus) => (
        <BusNode key={bus.id} bus={bus} api={api} depth={0} />
      ))}
    </div>
  );
}

function BusNode({ bus, api, depth }: { bus: Bus; api: WorkbenchApi; depth: number }) {
  const children = api.doc.buses.filter((b) => b.parentId === bus.id);
  const tracks = api.doc.tracks.filter((t) => t.busId === bus.id);
  const descendants = descendantBusIds(api.doc.buses, bus.id);
  const level = api.levels[bus.id] ?? { l: 0, r: 0, clipL: false, clipR: false };

  return (
    <section className="bus-card" style={{ marginLeft: depth * 12 }}>
      <div className="bus-row">
        <span className="track-color" style={{ background: bus.muted ? '#555a63' : bus.color }} />
        <input
          className="bus-name-input"
          value={bus.name}
          onChange={(e) => api.updateBus(bus.id, { name: e.target.value })}
          title="总线名称"
        />
        <button
          className={`btn mini ${bus.muted ? 'active' : ''}`}
          onClick={() => api.updateBus(bus.id, { muted: !bus.muted })}
          title="静音总线"
        >
          M
        </button>
        <button
          className={`btn mini ${bus.solo ? 'solo' : ''}`}
          onClick={() => api.updateBus(bus.id, { solo: !bus.solo })}
          title="独奏总线（其他总线静音）"
        >
          S
        </button>
        <button className="btn mini ghost danger" onClick={() => api.deleteBus(bus.id)} title="删除空总线">
          ✕
        </button>
      </div>

      <label className="gain-fader bus-gain">
        <span>增益</span>
        <input
          type="range"
          min={0}
          max={1.5}
          step={0.01}
          value={bus.gain}
          onChange={(e) => api.updateBus(bus.id, { gain: Number(e.target.value) })}
        />
        <b>{gainToDb(bus.muted ? 0 : bus.gain)}</b>
      </label>

      <div className="bus-controls">
        <label className="bus-parent">
          父级
          <select
            value={bus.parentId ?? ''}
            onChange={(e) => api.updateBus(bus.id, { parentId: e.target.value || null })}
          >
            <option value="">主输出</option>
            {api.doc.buses
              .filter((candidate) => candidate.id !== bus.id && !descendants.has(candidate.id))
              .map((candidate) => (
                <option key={candidate.id} value={candidate.id}>
                  {candidate.name}
                </option>
              ))}
          </select>
        </label>
        <button className="btn mini" onClick={() => api.addBus(bus.id)}>
          ＋子总线
        </button>
        <button className="btn mini" onClick={() => void api.addSample('tone', bus.id)}>
          ＋单音
        </button>
      </div>

      <Meter levels={level} onClear={() => api.clearClips(bus.id)} />

      <div className="bus-members">
        {tracks.length === 0 && <div className="bus-empty">空总线；删除前无需迁移成员。</div>}
        {tracks.map((track) => (
          <TrackRow key={track.id} track={track} api={api} />
        ))}
      </div>

      {children.map((child) => (
        <BusNode key={child.id} bus={child} api={api} depth={depth + 1} />
      ))}
    </section>
  );
}
