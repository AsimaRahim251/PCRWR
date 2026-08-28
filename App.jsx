import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Sidebar from './Sidebar';
import Topbar from './Topbar';
import GeoPage from './GeoPage';
import DetailReport from './DetailReport';
import Statistics from './Statistics';

// Part 4
import AIAgent from './components/ai/AIAgent.jsx';
import Feedback from './components/ai/Feedback.jsx';

import './layout.css';

function Shell() {
  const location = useLocation();
  const [geoPanel, setGeoPanel] = useState(null);

  return (
    <div className="app-root">
      <Sidebar
        geoPanel={geoPanel}
        onGeoPanelChange={setGeoPanel}
      />

      <div className="app-main">
        <Topbar
          path={location.pathname}
          geoPanel={geoPanel}
        />

        <Routes>
          <Route
            path="/"
            element={
              <GeoPage
                activePanel={geoPanel}
                onClosePanel={() => setGeoPanel(null)}
              />
            }
          />

          <Route
            path="/detail"
            element={<DetailReport />}
          />

          <Route
            path="/stats"
            element={<Statistics />}
          />

          <Route
            path="/ai"
            element={<AIAgent />}
          />

          <Route
            path="/feedback"
            element={<Feedback />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
