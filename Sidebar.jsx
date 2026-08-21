import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './layout.css';

const GEO_SUBS = [
  { key: 'overview', label: 'Overview', icon: '▦' },
  { key: 'layers', label: 'Layers', icon: '☰' },
  { key: 'critical', label: 'Critical', icon: '⚠' },
  { key: 'analysis', label: 'Analysis', icon: '◔' },
];

/**
 * Part 1 — Sidebar
 * onGeoPanelChange(panelKey | null) → Part 2 listens / parent lifts state
 */
export default function Sidebar({ geoPanel, onGeoPanelChange }) {
  const [geoOpen, setGeoOpen] = useState(true);
  const location = useLocation();
  const onGeoPage = location.pathname === '/' || location.pathname === '/geo';

  return (
    <aside className="app-sidebar">
      <div className="app-brand">
        <div className="app-brand-icon">PC</div>
        <div className="app-brand-text">
          <strong>PCRWR</strong>
          <span>Water Quality Portal</span>
        </div>
      </div>

      <nav className="app-nav">
        <div className="nav-group">
          <button
            type="button"
            className={`nav-parent ${geoOpen ? 'open' : ''} ${onGeoPage ? 'active-parent' : ''}`}
            onClick={() => {
              setGeoOpen((o) => !o);
              onGeoPanelChange?.(null); // map only — no second panel
            }}
          >
            <span>🗺</span> Geo Graphic Info
            <span className="chevron">{geoOpen ? '▾' : '▸'}</span>
          </button>

          {geoOpen && (
            <div className="nav-sub open">
              {GEO_SUBS.map((s) => (
                <NavLink
                  key={s.key}
                  to="/"
                  className={`nav-sub-link ${geoPanel === s.key ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onGeoPanelChange?.(s.key);
                  }}
                >
                  <span>{s.icon}</span> {s.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>

        <NavLink to="/detail" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          📋 Detail Report
        </NavLink>
        <NavLink to="/stats" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          📊 Statistics
        </NavLink>
        <NavLink to="/ai" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          🤖 AI Agent
        </NavLink>
        <NavLink to="/feedback" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
          💬 Feedback
        </NavLink>
      </nav>

      <div className="app-nav-foot">v2 · React · 4 Parts</div>
    </aside>
  );
}
