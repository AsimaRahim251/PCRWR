/**
 * SHARED — Dummy water quality data
 * Team: sab parts isi file se data read karein
 */
export const DATA = {
  // [lat, lng]
  points: [
    [24.86, 67.00], [24.92, 67.05], [25.40, 68.35], [31.52, 74.35],
    [31.45, 73.10], [30.20, 71.45], [33.68, 73.04], [34.01, 71.55],
    [30.18, 66.97], [27.72, 68.84], [32.08, 72.67], [25.76, 67.82],
    [29.39, 71.68], [31.15, 72.68], [33.59, 73.05], [24.75, 67.12],
    [26.24, 68.38], [30.16, 71.52], [32.94, 73.72], [35.92, 74.30],
  ],
  status: [
    2, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1,
  ], // 1 = Safe, 2 = Unsafe
  locations: [
    'Karachi Port', 'Clifton', 'Hyderabad City', 'Lahore Canal',
    'Faisalabad Hub', 'Multan Zone', 'Islamabad TW', 'Peshawar North',
    'Quetta Valley', 'Sukkur Barrage', 'Sargodha', 'Thatta',
    'Bahawalpur', 'Jhang', 'Rawalpindi', 'Korangi',
    'Nawabshah', 'Khanewal', 'Jhelum', 'Gilgit',
  ],
  regions: [
    'Sindh', 'Sindh', 'Sindh', 'Punjab',
    'Punjab', 'Punjab', 'ICT', 'KPK',
    'Balochistan', 'Sindh', 'Punjab', 'Sindh',
    'Punjab', 'Punjab', 'Punjab', 'Sindh',
    'Sindh', 'Punjab', 'Punjab', 'GB',
  ],
};

export function getStats() {
  const total = DATA.status.length;
  const safe = DATA.status.filter((s) => s === 1).length;
  const unsafe = total - safe;
  const safePct = total ? Math.round((safe / total) * 1000) / 10 : 0;
  return { total, safe, unsafe, safePct, unsafePct: Math.round((1000 - safePct * 10)) / 10 };
}

export const CRITICAL_ZONES = [
  { label: 'Karachi Cluster', lat: 24.86, lng: 67.0, unsafePct: 92, total: 38, severity: 'critical', tags: ['E-Coli', 'TDS', 'Arsenic'] },
  { label: 'Multan Zone', lat: 30.2, lng: 71.45, unsafePct: 81, total: 22, severity: 'high', tags: ['TDS', 'Fluoride'] },
  { label: 'Hyderabad Belt', lat: 25.4, lng: 68.35, unsafePct: 76, total: 18, severity: 'high', tags: ['Coliforms', 'Iron'] },
  { label: 'Quetta Area', lat: 30.18, lng: 66.97, unsafePct: 68, total: 14, severity: 'medium', tags: ['Hardness'] },
];
