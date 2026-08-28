import { getStats } from './waterData';
import './reports.css';

export default function Statistics() {
  const { total, safe, unsafe, safePct, unsafePct } = getStats();

  const indicators = [
    { name: 'Electrical Cond.', val: 78, color: '#22d3ee' },
    { name: 'Turbidity', val: 65, color: '#60a5fa' },
    { name: 'Hardness', val: 55, color: '#a78bfa' },
    { name: 'TDS', val: 62, color: '#c084fc' },
    { name: 'Iron', val: 48, color: '#f472b6' },
    { name: 'Arsenic', val: 42, color: '#fb7185' },
    { name: 'Coliform', val: 38, color: '#f43f5e' },
  ];

  return (
    <div className="page stats-page">
      <div className="kpi-row">
        <div className="kpi-card">
          <div className="kpi-label">Total Sources</div>
          <div className="kpi-val accent">{total}</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Safe %</div>
          <div className="kpi-val safe">{safePct}%</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Unsafe %</div>
          <div className="kpi-val unsafe">{unsafePct}%</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Cities Covered</div>
          <div className="kpi-val">48</div>
        </div>
      </div>

      <div className="dash-card" style={{ marginTop: 14 }}>
        <h3>Key Indicators (sample)</h3>
        {indicators.map((ind) => (
          <div className="key-ind-row" key={ind.name}>
            <span className="key-ind-name">{ind.name}</span>
            <div className="key-ind-track">
              <div
                className="key-ind-fill"
                style={{ width: `${ind.val}%`, background: ind.color }}
              />
            </div>
            <span className="key-ind-val">{ind.val}</span>
          </div>
        ))}
      </div>

      <p className="hint" style={{ marginTop: 12 }}>
        Charts (Chart.js) — Person C yahan Recharts / Chart.js add kar sakta hai.
        Safe: {safe} · Unsafe: {unsafe}
      </p>
    </div>
  );
}
