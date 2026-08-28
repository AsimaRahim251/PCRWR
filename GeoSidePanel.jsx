import { getStats } from './waterData';

export default function GeoSidePanel({
  panel,
  stats,
  zones,
  showSafe,
  showUnsafe,
  onToggleSafe,
  onToggleUnsafe,
  basemap,
  onBasemap,
  onFlyTo,
  onClose,
}) {
  const s = stats || getStats();

  return (
    <aside className="geo-side">
      <div className="geo-side-head">
        <div>
          <h2>Geographic Info</h2>
          <p>Sources, layers & critical zones</p>
        </div>
        <button type="button" className="geo-side-close" onClick={onClose} title="Close">
          ✕
        </button>
      </div>

      <div className="tab-panels">
        {panel === 'overview' && (
          <div className="qs-grid">
            <div className="qs total">
              <div className="qs-val">{s.total}</div>
              <div className="qs-lbl">Total</div>
            </div>
            <div className="qs safe">
              <div className="qs-val">{s.safe}</div>
              <div className="qs-lbl">Safe</div>
            </div>
            <div className="qs unsafe">
              <div className="qs-val">{s.unsafe}</div>
              <div className="qs-lbl">Unsafe</div>
            </div>
            <div className="qs critical">
              <div className="qs-val">{zones?.length || 0}</div>
              <div className="qs-lbl">Critical</div>
            </div>
          </div>
        )}

        {panel === 'layers' && (
          <div className="layers-panel">
            <div className="section-label">Marker Layers</div>
            <label className="layer-row">
              <span>
                <span className="dot safe" /> Safe ({s.safe})
              </span>
              <input
                type="checkbox"
                checked={showSafe}
                onChange={(e) => onToggleSafe(e.target.checked)}
              />
            </label>
            <label className="layer-row">
              <span>
                <span className="dot unsafe" /> Unsafe ({s.unsafe})
              </span>
              <input
                type="checkbox"
                checked={showUnsafe}
                onChange={(e) => onToggleUnsafe(e.target.checked)}
              />
            </label>
            <div className="section-label">Base Map</div>
            <div className="basemap-row">
              {['streets', 'sat', 'dark'].map((b) => (
                <button
                  key={b}
                  type="button"
                  className={`basemap-btn ${basemap === b ? 'active' : ''}`}
                  onClick={() => onBasemap(b)}
                >
                  {b === 'sat' ? 'Satellite' : b[0].toUpperCase() + b.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}

        {panel === 'critical' && (
          <div>
            <p className="hint">Ranked high-risk zones. Click to jump on map.</p>
            <ul className="ca-list">
              {(zones || []).map((z, i) => (
                <li
                  key={z.label}
                  className="ca-row"
                  onClick={() => onFlyTo?.(z.lat, z.lng)}
                >
                  <span className={`ca-rank rank-${i + 1}`}>{i + 1}</span>
                  <div>
                    <div className="ca-label">{z.label}</div>
                    <div className="ca-meta">
                      <span className="pct">{z.unsafePct}%</span> unsafe · {z.total} sources
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {panel === 'analysis' && (
          <div className="analysis-panel">
            <div
              className="donut"
              style={{
                background: `conic-gradient(#22c55e 0% ${s.safePct}%, #ef4444 ${s.safePct}% 100%)`,
              }}
            >
              <div className="donut-hole">
                <strong>{s.safePct}%</strong>
                <span>Safe</span>
              </div>
            </div>
            <p className="hint">
              <strong>{s.safePct}%</strong> sources meet safe standards
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}
