import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { DATA, getStats, CRITICAL_ZONES } from '../waterData';
import GeoSidePanel from './GeoSidePanel';
import './geo.css';

const BASES = {
  streets: {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attr: '© OSM',
  },
  sat: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attr: '© Esri',
  },
  dark: {
    url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
    attr: '© CARTO',
  },
};

/**
 * Part 2 — Geo page
 * activePanel: null | 'overview' | 'layers' | 'critical' | 'analysis'
 */
export default function GeoPage({ activePanel, onClosePanel }) {
  const mapRef = useRef(null);
  const mapInst = useRef(null);
  const layersRef = useRef({});
  const [basemap, setBasemap] = useState('streets');
  const [showSafe, setShowSafe] = useState(true);
  const [showUnsafe, setShowUnsafe] = useState(true);
  const stats = getStats();

  useEffect(() => {
    if (!mapRef.current || mapInst.current) return;

    const map = L.map(mapRef.current, { zoomControl: true }).setView([28.5, 72], 6);
    const base = L.tileLayer(BASES.streets.url, {
      maxZoom: 18,
      attribution: BASES.streets.attr,
    }).addTo(map);

    const safeLG = L.layerGroup().addTo(map);
    const unsafeLG = L.layerGroup().addTo(map);

    DATA.points.forEach((pt, i) => {
      const isSafe = DATA.status[i] === 1;
      const marker = L.circleMarker(pt, {
        radius: 8,
        color: '#fff',
        weight: 2,
        fillColor: isSafe ? '#22c55e' : '#ef4444',
        fillOpacity: 0.9,
      }).bindPopup(
        `<strong>${DATA.locations[i]}</strong><br/>${DATA.regions[i]} · ${
          isSafe ? 'Safe' : 'Unsafe'
        }`
      );
      (isSafe ? safeLG : unsafeLG).addLayer(marker);
    });

    layersRef.current = { base, safeLG, unsafeLG, map };
    mapInst.current = map;

    return () => {
      map.remove();
      mapInst.current = null;
    };
  }, []);

  useEffect(() => {
    const { map, base } = layersRef.current;
    if (!map) return;
    map.removeLayer(base);
    const next = L.tileLayer(BASES[basemap].url, {
      maxZoom: 18,
      attribution: BASES[basemap].attr,
    }).addTo(map);
    layersRef.current.base = next;
  }, [basemap]);

  useEffect(() => {
    const { map, safeLG, unsafeLG } = layersRef.current;
    if (!map) return;
    if (showSafe) map.addLayer(safeLG);
    else map.removeLayer(safeLG);
    if (showUnsafe) map.addLayer(unsafeLG);
    else map.removeLayer(unsafeLG);
  }, [showSafe, showUnsafe]);

  useEffect(() => {
    setTimeout(() => mapInst.current?.invalidateSize(), 150);
  }, [activePanel]);

  const flyTo = (lat, lng) => {
    mapInst.current?.flyTo([lat, lng], 10, { duration: 0.8 });
  };

  return (
    <div className="page geo-page">
      <div className={`geo-layout ${activePanel ? 'has-side' : ''}`}>
        {activePanel && (
          <GeoSidePanel
            panel={activePanel}
            stats={stats}
            zones={CRITICAL_ZONES}
            showSafe={showSafe}
            showUnsafe={showUnsafe}
            onToggleSafe={setShowSafe}
            onToggleUnsafe={setShowUnsafe}
            basemap={basemap}
            onBasemap={setBasemap}
            onFlyTo={flyTo}
            onClose={onClosePanel}
          />
        )}

        <div className="geo-map-wrap">
          <div className="map-toolbar">
            <input type="search" placeholder="Search locations..." />
            <button type="button" className="btn btn-ghost">
              Filters
            </button>
            <button type="button" className="btn btn-primary">
              Refresh
            </button>
          </div>
          <div ref={mapRef} className="map-el" />
          <div className="pills-bar">
            <span className="pill pill-safe">Safe {stats.safe}</span>
            <span className="pill pill-unsafe">Unsafe {stats.unsafe}</span>
            <span className="pill pill-critical">Critical {CRITICAL_ZONES.length}</span>
            <span className="pill pill-total">Total {stats.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
