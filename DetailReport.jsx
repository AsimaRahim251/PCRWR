import { useMemo, useState } from 'react';
import { DATA } from './waterData';
import './reports.css';

export default function DetailReport() {
  const [status, setStatus] = useState('all');
  const [q, setQ] = useState('');

  const rows = useMemo(() => {
    return DATA.points
      .map((pt, i) => ({
        id: i + 1,
        loc: DATA.locations[i],
        region: DATA.regions[i],
        lat: pt[0],
        lng: pt[1],
        status: DATA.status[i],
      }))
      .filter((r) => {
        if (status === '1' && r.status !== 1) return false;
        if (status === '2' && r.status !== 2) return false;
        if (q && !r.loc.toLowerCase().includes(q.toLowerCase())) return false;
        return true;
      });
  }, [status, q]);

  const show = rows.slice(0, 150);

  return (
    <div className="page">
      <div className="detail-wrap">
        <h2>Detail Report</h2>
        <p className="sub">Source-level listing from dataset</p>
        <div className="report-filters">
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="all">All Status</option>
            <option value="1">Safe</option>
            <option value="2">Unsafe</option>
          </select>
          <input
            type="search"
            placeholder="Search location..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <span className="count">
            {rows.length} rows{rows.length > 150 ? ' (showing 150)' : ''}
          </span>
        </div>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Location</th>
                <th>Region</th>
                <th>Lat</th>
                <th>Lng</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {show.map((r) => (
                <tr key={r.id}>
                  <td>{r.id}</td>
                  <td>{r.loc}</td>
                  <td>{r.region}</td>
                  <td>{r.lat.toFixed(4)}</td>
                  <td>{r.lng.toFixed(4)}</td>
                  <td>
                    <span className={`status-badge ${r.status === 1 ? 'safe' : 'unsafe'}`}>
                      {r.status === 1 ? 'Safe' : 'Unsafe'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
