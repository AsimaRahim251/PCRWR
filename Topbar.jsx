import { useTheme } from './useTheme';

const TITLES = {
  '/': ['Geo Graphic Info', 'Explore sources on the map'],
  '/detail': ['Detail Report', 'Source-level listing'],
  '/stats': ['Statistics & Analytics', 'National Water Quality Monitoring Overview'],
  '/ai': ['AI Agent', 'Water quality intelligence assistant'],
  '/feedback': ['Feedback', 'Share your thoughts about the portal'],
};

const PANEL_TITLES = {
  overview: ['Overview', 'Total sources & quick stats'],
  layers: ['Layers', 'Toggle markers & base map'],
  critical: ['Critical Areas', 'Ranked high-risk zones'],
  analysis: ['Analysis', 'Safe vs unsafe breakdown'],
};

export default function Topbar({ path = '/', geoPanel = null }) {
  const { theme, toggle, isLight } = useTheme();
  const [title, sub] =
    geoPanel && PANEL_TITLES[geoPanel]
      ? PANEL_TITLES[geoPanel]
      : TITLES[path] || TITLES['/'];

  return (
    <header className="app-topbar">
      <div>
        <h1>{title}</h1>
        <div className="sub">{sub}</div>
      </div>
      <div className="topbar-right">
        <button type="button" className="theme-toggle" onClick={toggle}>
          {isLight ? '🌙 Dark' : '☀️ Light'}
        </button>
        <span className="live-badge">
          <i /> Live Data
        </span>
        <select className="region-select" defaultValue="all">
          <option value="all">All Pakistan</option>
          <option value="Punjab">Punjab</option>
          <option value="Sindh">Sindh</option>
          <option value="KPK">KPK</option>
          <option value="Balochistan">Balochistan</option>
        </select>
      </div>
    </header>
  );
}
