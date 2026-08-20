/* PCRWR National Water Quality Portal - Front Page Professional Redesign */

const ALL_CITIES = {
  all: ["Abbottabad","Badin","Bahawalpur","Faisalabad","Gilgit","Gujranwala","Gujrat","Hyderabad","Islamabad","Karachi","Kasur","Khuzdar","Lahore","Loralai","Mangora","Mardan","Mirpur Khas","Multan","Muzaffarabad","Peshawar","Quetta","Rawalpindi","Sargodha","Shaheed Benazir","Sheikhupura","Sialkot","Sukkur","Tando Allah Yaar","Ziarat","Lalamusa","Attock","Chakwal","Dera Ghazi Khan","Jhang","Jhelum","Joharabad","Khushab","Lodhran","Mandi Bahauddin","Mianwali","Muzaffar Garh","Rahim Yar Khan","Rajanpur","Sahiwal","Vehari","Dadu","Jamshoro","Kashmore","Larkana","Malir","Mithi","Nawabshah","Shikarpur","Sanghar","Tandojam","Thatta","Dera Allah Yar","Dera Murad Jamali","Killa Saifullah","Sibi","Chitral","Dera Ismail Khan","Kohat","Mansehra","Nowshehra","Swat","Astore","Hunza","Nagar","Skardu","Bagh","Mirpur","Neelam"],
  Punjab: ["Bahawalpur","Faisalabad","Gujranwala","Gujrat","Kasur","Lahore","Multan","Rawalpindi","Sargodha","Sheikhupura","Sialkot","Attock","Chakwal","Dera Ghazi Khan","Jhang","Jhelum","Joharabad","Khushab","Lodhran","Mandi Bahauddin","Mianwali","Muzaffar Garh","Rahim Yar Khan","Rajanpur","Sahiwal","Vehari","Lalamusa"],
  Sindh: ["Badin","Hyderabad","Karachi","Mirpur Khas","Shaheed Benazir","Sukkur","Tando Allah Yaar","Dadu","Jamshoro","Kashmore","Larkana","Malir","Mithi","Nawabshah","Shikarpur","Sanghar","Tandojam","Thatta"],
  KP: ["Abbottabad","Mardan","Mangora","Peshawar","Chitral","Dera Ismail Khan","Kohat","Mansehra","Nowshehra","Swat"],
  Balochistan: ["Khuzdar","Loralai","Quetta","Ziarat","Dera Allah Yar","Dera Murad Jamali","Killa Saifullah","Sibi"],
  AJK: ["Muzaffarabad","Bagh","Mirpur","Neelam"],
  GB: ["Gilgit","Astore","Hunza","Nagar","Skardu"],
  ICT: ["Islamabad"]
};

const sampleSources = [
  {code:"SB-01-GW",location:"GBPS Village Azim Shah",type:"Hand Pump",province:"Sindh",city:"Shaheed Benazirabad",status:"Unsafe",lat:26.25,lng:68.35},
  {code:"TA-05-GW",location:"Taspur Village Govt Dispensary",type:"Well",province:"Sindh",city:"Tando Allah Yaar",status:"Safe",lat:25.46,lng:68.72},
  {code:"HYD-5",location:"Tayyab Masjid Unit Latifabad",type:"Tap",province:"Sindh",city:"Hyderabad",status:"Safe",lat:25.37,lng:68.35},
  {code:"KAR-01",location:"Darweshabad Hotel Yousaf Goth",type:"Tap",province:"Sindh",city:"Karachi",status:"Safe",lat:24.86,lng:67.01},
  {code:"FAI-03",location:"Treatment Plant Millat Town",type:"Tubewell",province:"Punjab",city:"Faisalabad",status:"Safe",lat:31.42,lng:73.08},
  {code:"GUJ-01",location:"Sheikhupura chowk GLT road",type:"Tubewell",province:"Punjab",city:"Gujranwala",status:"Safe",lat:32.16,lng:74.18},
  {code:"LH-01-GW",location:"Model Town Block A",type:"Tube Well",province:"Punjab",city:"Lahore",status:"Safe",lat:31.47,lng:74.32},
  {code:"IS-01-GW",location:"F-10 Markaz",type:"Tube Well",province:"ICT",city:"Islamabad",status:"Safe",lat:33.69,lng:73.01},
  {code:"RW-01-GW",location:"Saddar Area",type:"Tube Well",province:"Punjab",city:"Rawalpindi",status:"Safe",lat:33.59,lng:73.04},
  {code:"PS-01-GW",location:"University Road",type:"Tube Well",province:"KP",city:"Peshawar",status:"Safe",lat:34.01,lng:71.52},
  {code:"KR-01-GW",location:"Clifton Block 2",type:"Tube Well",province:"Sindh",city:"Karachi",status:"Unsafe",lat:24.81,lng:67.03},
  {code:"ML-01-GW",location:"Bosan Road",type:"Hand Pump",province:"Punjab",city:"Multan",status:"Unsafe",lat:30.20,lng:71.45},
  {code:"QT-01-GW",location:"Jinnah Town",type:"Hand Pump",province:"Balochistan",city:"Quetta",status:"Unsafe",lat:30.18,lng:66.99},
  {code:"BH-01",location:"Sutile Hotel New Bore",type:"Inj. Pump",province:"Punjab",city:"Bahawalpur",status:"Unsafe",lat:29.39,lng:71.68},
  {code:"SAR-13",location:"IBEX Mart Khushab Road",type:"Hand Pump",province:"Punjab",city:"Sargodha",status:"Safe",lat:32.08,lng:72.67},
  {code:"MUL-14",location:"132 KV Grid Station Vehari Rd",type:"Tubewell",province:"Punjab",city:"Multan",status:"Safe",lat:30.20,lng:71.45},
  {code:"LH-03-GW",location:"Johar Town Phase 2",type:"Hand Pump",province:"Punjab",city:"Lahore",status:"Unsafe",lat:31.46,lng:74.27},
  {code:"FAI-02",location:"Kalama Wali Tanki",type:"W.Supply",province:"Punjab",city:"Faisalabad",status:"Unsafe",lat:31.44,lng:73.09},
  {code:"GUJ-02",location:"Super Asia Factory",type:"Tubewell",province:"Punjab",city:"Gujranwala",status:"Unsafe",lat:32.15,lng:74.17},
  {code:"SAR-14",location:"Govt Central Model School",type:"Bore",province:"Punjab",city:"Sargodha",status:"Unsafe",lat:32.09,lng:72.68},
];

const summarizeData = [
  {city:"Abbottabad",total:2,safe:0,safePct:0,unsafe:2,unsafePct:100,contam:"Turbidity, Iron, Total Coliforms, Copper"},
  {city:"Badin",total:11,safe:5,safePct:45,unsafe:6,unsafePct:55,contam:"Iron"},
  {city:"Bahawalpur",total:25,safe:6,safePct:24,unsafe:19,unsafePct:76,contam:"Arsenic, Turbidity, Coliforms, TDS, Fluoride, Iron, E-Coli"},
  {city:"Faisalabad",total:23,safe:9,safePct:39,unsafe:14,unsafePct:61,contam:"pH, Nitrate-N, Hardness, Chloride, TDS, Iron, Coliforms"},
  {city:"Gilgit",total:10,safe:0,safePct:0,unsafe:10,unsafePct:100,contam:"Turbidity, Total Coliforms, E-Coli"},
  {city:"Gujranwala",total:14,safe:7,safePct:50,unsafe:7,unsafePct:50,contam:"Total Coliforms, E-Coli"},
  {city:"Gujrat",total:9,safe:9,safePct:100,unsafe:0,unsafePct:0,contam:"-"},
  {city:"Hyderabad",total:15,safe:3,safePct:20,unsafe:12,unsafePct:80,contam:"Turbidity, Coliforms, E-Coli, Hardness, Chloride, TDS"},
  {city:"Islamabad",total:26,safe:16,safePct:62,unsafe:10,unsafePct:38,contam:"Iron, Total Coliforms, E-Coli, pH"},
  {city:"Karachi",total:28,safe:2,safePct:7,unsafe:26,unsafePct:93,contam:"Chloride, TDS, Coliforms, Turbidity, E-Coli, Hardness, Fluoride"},
  {city:"Kasur",total:10,safe:9,safePct:90,unsafe:1,unsafePct:10,contam:"Turbidity, Coliforms, E-Coli"},
  {city:"Khuzdar",total:11,safe:5,safePct:45,unsafe:6,unsafePct:55,contam:"Coliforms, E-Coli, Nitrate-N, Turbidity"},
  {city:"Lahore",total:16,safe:11,safePct:69,unsafe:5,unsafePct:31,contam:"TDS, Coliforms, E-Coli, Turbidity, Iron, Arsenic"},
  {city:"Loralai",total:18,safe:6,safePct:33,unsafe:12,unsafePct:67,contam:"Turbidity, Iron, Coliforms, E-Coli"},
  {city:"Mangora",total:10,safe:8,safePct:80,unsafe:2,unsafePct:20,contam:"Iron"},
  {city:"Mardan",total:12,safe:1,safePct:8,unsafe:11,unsafePct:92,contam:"Iron, pH"},
  {city:"Mirpur Khas",total:12,safe:0,safePct:0,unsafe:12,unsafePct:100,contam:"Hardness, Chloride, TDS, Coliforms, Turbidity, E-Coli, Iron"},
  {city:"Multan",total:16,safe:1,safePct:6,unsafe:15,unsafePct:94,contam:"Arsenic, Total Coliforms"},
  {city:"Muzaffarabad",total:10,safe:3,safePct:30,unsafe:7,unsafePct:70,contam:"Coliforms, E-Coli, Turbidity"},
  {city:"Peshawar",total:13,safe:6,safePct:46,unsafe:7,unsafePct:54,contam:"Iron, pH"},
  {city:"Quetta",total:37,safe:15,safePct:41,unsafe:22,unsafePct:59,contam:"Coliforms, Fluoride, E-Coli, Hardness, Chloride, TDS"},
  {city:"Rawalpindi",total:13,safe:8,safePct:62,unsafe:5,unsafePct:38,contam:"Coliforms, E-Coli, Nitrate-N, Iron, Hardness, TDS"},
  {city:"Sargodha",total:24,safe:4,safePct:17,unsafe:20,unsafePct:83,contam:"Hardness, Nitrate-N, TDS, Chloride, Coliforms, Iron, Fluoride"},
  {city:"Shaheed Benazir",total:12,safe:0,safePct:0,unsafe:12,unsafePct:100,contam:"Chloride, TDS, Coliforms, Iron, Hardness, E-Coli"},
  {city:"Sheikhupura",total:11,safe:4,safePct:36,unsafe:7,unsafePct:64,contam:"Coliforms, E-Coli, pH, Turbidity, Iron, Nitrate-N, Arsenic"},
  {city:"Sialkot",total:10,safe:9,safePct:90,unsafe:1,unsafePct:10,contam:"Iron, pH"},
  {city:"Sukkur",total:9,safe:3,safePct:33,unsafe:6,unsafePct:67,contam:"Turbidity, Iron, Arsenic, Hardness, Chloride, TDS"},
  {city:"Tando Allah Yaar",total:14,safe:6,safePct:43,unsafe:8,unsafePct:57,contam:"Coliforms, TDS, Iron, Hardness"},
  {city:"Ziarat",total:9,safe:3,safePct:33,unsafe:6,unsafePct:67,contam:"Total Coliforms, E-Coli"},
];

const paramData = [
  {indicator:"Electrical Conductivity",total:442,safe:160,safePct:36,unsafe:282,unsafePct:64,min:0,max:33500},
  {indicator:"pH",total:442,safe:160,safePct:36,unsafe:282,unsafePct:64,min:0,max:9},
  {indicator:"Turbidity",total:442,safe:160,safePct:36,unsafe:282,unsafePct:64,min:0,max:960},
  {indicator:"Chloride",total:442,safe:160,safePct:36,unsafe:282,unsafePct:64,min:0,max:10105},
  {indicator:"Calcium",total:442,safe:160,safePct:36,unsafe:282,unsafePct:64,min:0,max:1200},
  {indicator:"Magnesium",total:442,safe:160,safePct:36,unsafe:282,unsafePct:64,min:0,max:972},
  {indicator:"Total Hardness as CaCO3",total:442,safe:160,safePct:36,unsafe:282,unsafePct:64,min:0,max:7000},
  {indicator:"Sodium",total:442,safe:160,safePct:36,unsafe:282,unsafePct:64,min:0,max:4405},
  {indicator:"Potassium",total:442,safe:160,safePct:36,unsafe:282,unsafePct:64,min:0,max:170},
  {indicator:"Sulfate",total:442,safe:160,safePct:36,unsafe:282,unsafePct:64,min:0,max:2013},
  {indicator:"Nitrate-N",total:442,safe:160,safePct:36,unsafe:282,unsafePct:64,min:0,max:29},
  {indicator:"Total Dissolved Solids",total:442,safe:160,safePct:36,unsafe:282,unsafePct:64,min:0,max:21400},
  {indicator:"Iron",total:442,safe:160,safePct:36,unsafe:282,unsafePct:64,min:0,max:13},
  {indicator:"Fluoride",total:442,safe:160,safePct:36,unsafe:282,unsafePct:64,min:0,max:6},
  {indicator:"Arsenic",total:442,safe:160,safePct:36,unsafe:282,unsafePct:64,min:0,max:104},
  {indicator:"Total Coliforms",total:442,safe:160,safePct:36,unsafe:282,unsafePct:64,min:0,max:118},
  {indicator:"E-Coli",total:442,safe:160,safePct:36,unsafe:282,unsafePct:64,min:0,max:50},
  {indicator:"Alkalinity as CaCO3",total:442,safe:160,safePct:36,unsafe:282,unsafePct:64,min:0,max:2407},
  {indicator:"Bicarbonate",total:2,safe:0,safePct:0,unsafe:2,unsafePct:100,min:0,max:0},
  {indicator:"Carbonate",total:2,safe:0,safePct:0,unsafe:2,unsafePct:100,min:0,max:0},
  {indicator:"PHOSPHATE",total:2,safe:0,safePct:0,unsafe:2,unsafePct:100,min:0,max:0},
  {indicator:"Copper",total:2,safe:0,safePct:0,unsafe:2,unsafePct:100,min:0,max:2},
  {indicator:"Zinc",total:2,safe:0,safePct:0,unsafe:2,unsafePct:100,min:0,max:0},
  {indicator:"Manganese",total:2,safe:0,safePct:0,unsafe:2,unsafePct:100,min:0,max:0},
  {indicator:"Chromium",total:2,safe:0,safePct:0,unsafe:2,unsafePct:100,min:0,max:0},
  {indicator:"Lead",total:2,safe:0,safePct:0,unsafe:2,unsafePct:100,min:0,max:0},
  {indicator:"Nickel",total:2,safe:0,safePct:0,unsafe:2,unsafePct:100,min:0,max:0},
  {indicator:"Cadmium",total:2,safe:0,safePct:0,unsafe:2,unsafePct:100,min:0,max:0},
  {indicator:"Mercury",total:2,safe:0,safePct:0,unsafe:2,unsafePct:100,min:0,max:0},
];

const centers = [
  {lat:31.52,lng:74.35},{lat:24.86,lng:67.00},{lat:33.68,lng:73.04},
  {lat:30.20,lng:71.45},{lat:31.42,lng:73.08},{lat:34.01,lng:71.52},
  {lat:30.18,lng:66.99},{lat:32.08,lng:72.67},{lat:29.39,lng:71.68},{lat:25.37,lng:68.35}
];

let map=null, markersLayer=null, charts={}, statsChartsInit=false;

document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initMap();
  populateCitySelect();
  populateDetailTable();
  populateSummarizeTable();
  populateParamTable();
  showView('dashboard');
});

function initDarkMode() {
  if (localStorage.getItem('theme')==='dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches))
    document.documentElement.classList.add('dark');
}
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', document.documentElement.classList.contains('dark')?'dark':'light');
  const mode = document.documentElement.classList.contains('dark')?'dark':'light';
  Object.values(charts).forEach(c => { if(c) c.updateOptions({theme:{mode}, chart:{background:'transparent'}}); });
}

function showView(view) {
  document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
  const section = document.getElementById('view-'+view);
  if (section) section.classList.remove('hidden');

  document.querySelectorAll('.top-nav, .side-nav').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('nav-'+view);
  if (btn) btn.classList.add('active');

  // Update topbar title if present
  const titles = {
    dashboard: 'Geo Graphic Info',
    report: 'Detail Report',
    stats: 'Statistics & Analytics',
    feedback: 'Feedback & Suggestions'
  };
  const titleEl = document.getElementById('page-title');
  if (titleEl) titleEl.textContent = titles[view] || view;

  // Close mobile sidebar if present
  const sb = document.getElementById('sidebar');
  const ov = document.getElementById('sidebar-overlay');
  if (sb) sb.classList.remove('open');
  if (ov) ov.classList.remove('show');

  if (view==='dashboard' && map) setTimeout(()=>map.invalidateSize(),100);

  // Init / refresh stats charts when Statistics tab is opened
  if (view === 'stats') {
    setTimeout(() => {
      try {
        // Destroy previous stats chart instances so they re-render at correct size
        const statsKeys = ['gSafe','gUnsafe','gArsenic','gTds','gColi','gPh','areaMini','sparks','mainTrend','ranking','province','parameters','bottomLine'];
        statsKeys.forEach(k => {
          if (charts[k]) {
            try { charts[k].destroy(); } catch(_){}
            charts[k] = null;
          }
        });
        const miniEl = document.getElementById('mini-bars');
        if (miniEl) miniEl.innerHTML = '';
        initStatsCharts();
        statsChartsInit = true;
      } catch (e) {
        console.error('Stats charts error:', e);
      }
    }, 100);
  }
}
function toggleMobileMenu(){ document.getElementById('mobile-menu').classList.toggle('hidden'); }

function switchReportTab(tab) {
  document.querySelectorAll('.report-tab').forEach(el=>el.classList.add('hidden'));
  document.getElementById('tab-'+tab).classList.remove('hidden');
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.getAttribute('data-tab')===tab));
}

/* FILTERS PANEL */
function toggleFilters() {
  const panel = document.getElementById('filters-panel');
  const overlay = document.getElementById('filters-overlay');
  const isOpen = !panel.classList.contains('translate-x-full');
  if (isOpen) {
    panel.classList.add('translate-x-full');
    overlay.classList.add('hidden');
  } else {
    panel.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
  }
}

function toggleFilterSection(id) {
  const body = document.getElementById(id+'-body');
  const chev = document.getElementById(id+'-chevron');
  body.classList.toggle('hidden');
  chev.style.transform = body.classList.contains('hidden') ? '' : 'rotate(180deg)';
}

function populateCitySelect() {
  const sel = document.getElementById('f-city');
  if (!sel) return;
  sel.innerHTML = '<option value="all">All</option>';
  ALL_CITIES.all.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c; opt.textContent = c;
    sel.appendChild(opt);
  });
}

function updateCityList() {
  const region = document.getElementById('f-region').value;
  const sel = document.getElementById('f-city');
  const cities = ALL_CITIES[region] || ALL_CITIES.all;
  sel.innerHTML = '<option value="all">All</option>';
  cities.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c; opt.textContent = c;
    sel.appendChild(opt);
  });
  document.getElementById('city-label').textContent = 'City (All)';
}

function updateSrcLabel() {
  const v = document.getElementById('f-source');
  const t = v.options[v.selectedIndex].text;
  document.getElementById('src-label').textContent = 'Source Group (' + t + ')';
}
function updateRegionLabel() {
  const v = document.getElementById('f-region');
  const t = v.options[v.selectedIndex].text;
  document.getElementById('region-label').textContent = 'Region (' + t + ')';
}
function updateCityLabel() {
  const v = document.getElementById('f-city');
  const t = v.options[v.selectedIndex].text;
  document.getElementById('city-label').textContent = 'City (' + t + ')';
}
function updateParamLabel() {
  const v = document.getElementById('f-param');
  const t = v.options[v.selectedIndex].text;
  document.getElementById('param-label').textContent = 'Parameters (' + (t.length>20 ? t.substring(0,18)+'…' : t) + ')';
}

function applyFilters() {
  // Delegates to full dashboard filter logic (defined later)
  if (typeof applyDashboardFilters === 'function') {
    applyDashboardFilters();
  } else {
    const panel = document.getElementById('filters-panel');
    if (panel && !panel.classList.contains('translate-x-full')) toggleFilters();
    showToast('Filters applied successfully');
  }
}

/* MAP */
function initMap() {
  map = L.map('map',{center:[30.0,69.5],zoom:6,zoomControl:false});
  L.control.zoom({position:'topleft'}).addTo(map);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',{
    attribution:'&copy; OSM &copy; CARTO', maxZoom:18
  }).addTo(map);
  markersLayer = L.layerGroup().addTo(map);
  addMarkers();
}
function createIcon(status) {
  return L.divIcon({
    className:'custom-marker',
    html:`<div class="marker-pin ${status==='Safe'?'marker-safe':'marker-unsafe'}"></div>`,
    iconSize:[26,26], iconAnchor:[13,26], popupAnchor:[0,-26]
  });
}
// All map points (built once, then filtered)
let allMapPoints = [];

const PROVINCE_CITIES = {
  Punjab: ["Lahore","Faisalabad","Rawalpindi","Multan","Gujranwala","Sialkot","Bahawalpur","Sargodha","Sheikhupura","Kasur","Gujrat","Jhelum","Sahiwal","Okara","Vehari"],
  Sindh: ["Karachi","Hyderabad","Sukkur","Larkana","Mirpur Khas","Nawabshah","Thatta","Badin"],
  KP: ["Peshawar","Mardan","Abbottabad","Swat","Kohat","Dera Ismail Khan","Mansehra"],
  Balochistan: ["Quetta","Khuzdar","Loralai","Sibi","Ziarat","Turbat"],
  "AJ&K": ["Muzaffarabad","Mirpur","Bagh"],
  GB: ["Gilgit","Skardu","Hunza"],
  ICT: ["Islamabad"]
};
const PROVINCE_CENTERS = {
  Punjab: {lat:31.4, lng:73.5},
  Sindh: {lat:25.5, lng:68.5},
  KP: {lat:34.0, lng:71.8},
  Balochistan: {lat:28.5, lng:66.5},
  "AJ&K": {lat:34.2, lng:73.6},
  GB: {lat:35.9, lng:74.3},
  ICT: {lat:33.68, lng:73.04}
};

function buildAllMapPoints() {
  const pts = sampleSources.map(s => ({...s}));
  const provinces = Object.keys(PROVINCE_CITIES);
  provinces.forEach((prov, pi) => {
    const cities = PROVINCE_CITIES[prov];
    const center = PROVINCE_CENTERS[prov];
    cities.forEach((city, ci) => {
      const count = 3 + (ci % 3);
      for (let j = 0; j < count; j++) {
        pts.push({
          code: `GEN-${prov.slice(0,2).toUpperCase()}-${ci}${j}`,
          location: `${city} Monitoring Point ${j+1}`,
          type: j % 2 === 0 ? 'Hand Pump' : 'Tube Well',
          province: prov,
          city: city,
          status: Math.random() > 0.36 ? 'Unsafe' : 'Safe',
          lat: center.lat + (Math.random() - 0.5) * 1.4,
          lng: center.lng + (Math.random() - 0.5) * 1.6
        });
      }
    });
  });
  allMapPoints = pts;
  return pts;
}

function addMarkers(filterPts) {
  if (!markersLayer) return;
  markersLayer.clearLayers();
  if (!allMapPoints.length) buildAllMapPoints();
  const pts = filterPts || allMapPoints;
  pts.forEach(s => {
    if (!s.lat) return;
    const m = L.marker([s.lat, s.lng], { icon: createIcon(s.status) });
    m.bindPopup(`<div class="p-3">
      <span class="status-badge ${s.status==='Safe'?'status-safe':'status-unsafe'}">${s.status}</span>
      <div class="font-semibold text-sm mt-1.5 text-slate-800">${s.location}</div>
      <div class="text-xs text-slate-500 mt-0.5">${s.code} · ${s.type}</div>
      <div class="text-xs text-slate-600">${s.city}, ${s.province}</div>
      <button onclick="openSourceDetail('${s.code}')" class="mt-2 w-full py-1.5 bg-blue-600 text-white text-xs font-medium rounded-md">View Details</button>
    </div>`);
    markersLayer.addLayer(m);
  });
}

/* TABLES */
function populateDetailTable(data) {
  data = data||sampleSources;
  const tb = document.getElementById('detail-tbody');
  if(!tb) return;
  tb.innerHTML = '';
  data.forEach(s=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="px-4 py-2.5 font-mono text-xs text-slate-500">${s.code}</td>
      <td class="px-4 py-2.5 font-medium text-sm">${s.location}</td>
      <td class="px-4 py-2.5 text-slate-500 text-sm">${s.type}</td>
      <td class="px-4 py-2.5 text-sm">${s.province}</td>
      <td class="px-4 py-2.5 text-sm">${s.city}</td>
      <td class="px-4 py-2.5"><span class="status-badge ${s.status==='Safe'?'status-safe':'status-unsafe'}">${s.status}</span></td>
      <td class="px-4 py-2.5 text-center">
        <button onclick="openSourceDetail('${s.code}')" class="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-brand-600"><i class="ti ti-clipboard-list"></i></button>
      </td>`;
    tb.appendChild(tr);
  });
  const sc = document.getElementById('showing-count');
  if(sc) sc.textContent = data.length;
}
function populateSummarizeTable() {
  const tb = document.getElementById('summarize-tbody');
  if(!tb) return;
  tb.innerHTML = '';
  summarizeData.forEach(r=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="px-3 py-2 font-medium text-sm">${r.city}</td>
      <td class="px-3 py-2 text-center text-sm">${r.total}</td>
      <td class="px-3 py-2 text-center safe-cell font-semibold text-emerald-700 dark:text-emerald-400 text-sm">${r.safe}</td>
      <td class="px-3 py-2 text-center safe-cell text-sm">${r.safePct}</td>
      <td class="px-3 py-2 text-center unsafe-cell font-semibold text-red-700 dark:text-red-400 text-sm">${r.unsafe}</td>
      <td class="px-3 py-2 text-center unsafe-cell text-sm">${r.unsafePct}</td>
      <td class="px-3 py-2 text-xs text-slate-500 max-w-[220px]">${r.contam}</td>`;
    tb.appendChild(tr);
  });
}
function populateParamTable() {
  const tb = document.getElementById('param-tbody');
  if(!tb) return;
  tb.innerHTML = '';
  paramData.forEach(r=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="px-3 py-2 font-medium text-sm">${r.indicator}</td>
      <td class="px-3 py-2 text-center text-sm">${r.total}</td>
      <td class="px-3 py-2 text-center safe-cell font-semibold text-emerald-700 dark:text-emerald-400 text-sm">${r.safe}</td>
      <td class="px-3 py-2 text-center safe-cell text-sm">${r.safePct}</td>
      <td class="px-3 py-2 text-center unsafe-cell font-semibold text-red-700 dark:text-red-400 text-sm">${r.unsafe}</td>
      <td class="px-3 py-2 text-center unsafe-cell text-sm">${r.unsafePct}</td>
      <td class="px-3 py-2 text-center text-sm">${r.min}</td>
      <td class="px-3 py-2 text-center text-sm">${r.max}</td>`;
    tb.appendChild(tr);
  });
}
function filterDetailTable() {
  const prov = document.getElementById('filter-province')?.value || 'all';
  const st = document.getElementById('filter-status')?.value || 'all';
  const q = (document.getElementById('table-search')?.value || '').toLowerCase();
  const f = sampleSources.filter(s =>
    (prov==='all'||s.province===prov) &&
    (st==='all'||s.status===st) &&
    (!q || s.location.toLowerCase().includes(q)||s.code.toLowerCase().includes(q)||s.city.toLowerCase().includes(q))
  );
  populateDetailTable(f);
}
function resetFilters() {
  const p = document.getElementById('filter-province'); if(p) p.value='all';
  const s = document.getElementById('filter-status'); if(s) s.value='all';
  const t = document.getElementById('table-search'); if(t) t.value='';
  populateDetailTable();
}

function openSourceDetail(code) {
  const s = sampleSources.find(x=>x.code===code) || sampleSources[0];
  document.getElementById('modal-title').textContent = s.code;
  document.getElementById('modal-body').innerHTML = `
    <div class="space-y-3">
      <div class="flex items-center gap-2">
        <span class="status-badge ${s.status==='Safe'?'status-safe':'status-unsafe'}">${s.status}</span>
        <span class="text-xs text-slate-500">${s.type}</span>
      </div>
      <div><div class="font-semibold">${s.location}</div><div class="text-sm text-slate-500">${s.city}, ${s.province}</div></div>
      <div class="grid grid-cols-2 gap-2">
        <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50"><div class="text-[11px] text-slate-500">pH</div><div class="font-bold">7.2</div></div>
        <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50"><div class="text-[11px] text-slate-500">TDS (mg/L)</div><div class="font-bold">890</div></div>
        <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50"><div class="text-[11px] text-slate-500">Arsenic (µg/L)</div><div class="font-bold ${s.status==='Unsafe'?'text-red-600':''}">${s.status==='Unsafe'?28:4}</div></div>
        <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50"><div class="text-[11px] text-slate-500">Nitrate</div><div class="font-bold">12</div></div>
        <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50"><div class="text-[11px] text-slate-500">Fluoride</div><div class="font-bold">0.8</div></div>
        <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50"><div class="text-[11px] text-slate-500">Coliform</div><div class="font-bold ${s.status==='Unsafe'?'text-red-600':'text-emerald-600'}">${s.status==='Unsafe'?'Present':'Absent'}</div></div>
      </div>
      <div class="text-xs text-slate-500">Last Tested: 15 March 2025</div>
      <button class="w-full py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-sm font-medium">Download PDF Report</button>
    </div>`;
  const m = document.getElementById('detail-modal');
  m.classList.remove('hidden'); m.classList.add('flex');
}
function closeModal() {
  const m = document.getElementById('detail-modal');
  m.classList.add('hidden'); m.classList.remove('flex');
}

function tc(){ return document.documentElement.classList.contains('dark')?'#94a3b8':'#64748b'; }
function gc(){ return document.documentElement.classList.contains('dark')?'#1e293b':'#f1f5f9'; }
function isDark(){ return document.documentElement.classList.contains('dark'); }


function initStatsCharts() {
  console.log('[NWQP] initStatsCharts starting...');
  if (typeof ApexCharts === 'undefined') {
    console.error('[NWQP] ApexCharts library not loaded!');
    return;
  }

  // Mini horizontal bars (left column)
  const miniData = [
    {name:'Electrical Cond.', val:78, max:100, color:'#38bdf8'},
    {name:'Turbidity', val:65, max:100, color:'#818cf8'},
    {name:'Hardness', val:48, max:100, color:'#a78bfa'},
    {name:'TDS', val:42, max:100, color:'#c084fc'},
    {name:'Iron', val:55, max:100, color:'#e879f9'},
    {name:'Arsenic', val:38, max:100, color:'#f472b6'},
    {name:'Coliforms', val:36, max:100, color:'#fb7185'},
  ];
  const miniEl = document.getElementById('mini-bars');
  if (miniEl) {
    miniEl.innerHTML = miniData.map(d => `
      <div class="flex items-center gap-2">
        <span class="text-[10px] text-slate-400 w-20 truncate">${d.name}</span>
        <div class="flex-1 h-1.5 rounded-full bg-slate-700/80 overflow-hidden">
          <div class="h-full rounded-full" style="width:${d.val}%;background:${d.color}"></div>
        </div>
        <span class="text-[10px] text-slate-300 w-6 text-right">${d.val}</span>
      </div>`).join('');
  }

  const darkOpts = { chart: { background: 'transparent', fontFamily: 'Inter', toolbar: { show: false } }, grid: { borderColor: '#1e293b', strokeDashArray: 3 }, tooltip: { theme: 'dark' } };

  // Radial gauges
  function makeGauge(el, val, color) {
    if (!document.querySelector(el)) return null;
    const c = new ApexCharts(document.querySelector(el), {
      series: [val],
      chart: { type: 'radialBar', height: 90, sparkline: { enabled: true }, background: 'transparent' },
      plotOptions: {
        radialBar: {
          hollow: { size: '58%' },
          track: { background: '#1e293b' },
          dataLabels: {
            name: { show: false },
            value: { show: true, fontSize: '16px', fontWeight: 700, color: '#e2e8f0', offsetY: 5, formatter: v => v }
          }
        }
      },
      colors: [color],
      stroke: { lineCap: 'round' }
    });
    c.render();
    return c;
  }
  charts.gSafe = makeGauge('#gauge-safe', 36, '#34d399');
  charts.gUnsafe = makeGauge('#gauge-unsafe', 64, '#fbbf24');
  charts.gArsenic = makeGauge('#gauge-arsenic', 58, '#a78bfa');
  charts.gTds = makeGauge('#gauge-tds', 56, '#34d399');
  charts.gColi = makeGauge('#gauge-coli', 24, '#60a5fa');
  charts.gPh = makeGauge('#gauge-ph', 94, '#fb923c');

  // Area mini
  if (document.querySelector('#chart-area-mini')) {
    charts.areaMini = new ApexCharts(document.querySelector('#chart-area-mini'), {
      series: [{ name: 'Sources', data: [50, 120, 205, 320, 450, 680, 890, 1050, 1193] }],
      chart: { type: 'area', height: 100, sparkline: { enabled: true }, background: 'transparent' },
      colors: ['#818cf8'],
      fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.45, opacityTo: 0.05 } },
      stroke: { curve: 'smooth', width: 2 },
      tooltip: { theme: 'dark' }
    });
    charts.areaMini.render();
  }

  // Spark lines
  if (document.querySelector('#chart-spark-lines')) {
    charts.sparks = new ApexCharts(document.querySelector('#chart-spark-lines'), {
      series: [
        { name: 'Punjab', data: [45, 52, 48, 55, 60, 58, 62] },
        { name: 'Sindh', data: [30, 28, 35, 32, 38, 40, 36] },
        { name: 'KP', data: [20, 22, 25, 24, 28, 30, 27] },
        { name: 'Balochistan', data: [15, 18, 16, 20, 22, 19, 21] }
      ],
      chart: { type: 'line', height: 80, sparkline: { enabled: true }, background: 'transparent' },
      colors: ['#34d399', '#60a5fa', '#a78bfa', '#fbbf24'],
      stroke: { curve: 'smooth', width: 1.5 },
      tooltip: { theme: 'dark' }
    });
    charts.sparks.render();
  }

  // Main trend
  if (document.querySelector('#chart-main-trend')) {
    charts.mainTrend = new ApexCharts(document.querySelector('#chart-main-trend'), {
      series: [
        { name: 'Safe %', data: [5, 18, 32, 48, 55, 42, 36, 40, 45, 43, 41, 39] },
        { name: 'Unsafe %', data: [95, 82, 68, 52, 45, 58, 64, 60, 55, 57, 59, 61] }
      ],
      chart: { type: 'area', height: 200, toolbar: { show: false }, background: 'transparent', fontFamily: 'Inter' },
      colors: ['#34d399', '#f87171'],
      fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.35, opacityTo: 0.02 } },
      stroke: { curve: 'smooth', width: 2.5 },
      markers: { size: 3, hover: { size: 5 } },
      dataLabels: { enabled: false },
      xaxis: {
        categories: ['2003','2005','2008','2010','2012','2015','2017','2019','2021','2023','2024','2025'],
        labels: { style: { colors: '#64748b', fontSize: '10px' } },
        axisBorder: { show: false }, axisTicks: { show: false }
      },
      yaxis: { max: 100, labels: { style: { colors: '#64748b', fontSize: '10px' }, formatter: v => v + '%' } },
      legend: { show: false },
      grid: { borderColor: '#1e293b', strokeDashArray: 3 },
      tooltip: { theme: 'dark' }
    });
    charts.mainTrend.render();
  }

  // Ranking
  if (document.querySelector('#chart-ranking')) {
    charts.ranking = new ApexCharts(document.querySelector('#chart-ranking'), {
      series: [
        { name: 'Total', data: [165,145,95,90,55,48,52,75,42,68,22,25,28,85,28,22,25,22,20,18] },
        { name: 'Safe', data: [95,40,35,38,25,22,28,35,18,25,8,10,12,18,12,8,10,8,7,6] },
        { name: 'Unsafe', data: [70,105,60,52,30,26,24,40,24,43,14,15,16,67,16,14,15,14,13,12] }
      ],
      chart: { type: 'bar', height: 260, toolbar: { show: false }, background: 'transparent', fontFamily: 'Inter' },
      colors: ['#fbbf24', '#34d399', '#f87171'],
      plotOptions: { bar: { borderRadius: 2, columnWidth: '65%' } },
      dataLabels: { enabled: false },
      xaxis: {
        categories: ['Lahore','Rawalpindi','Sialkot','Faisalabad','Kasur','Gujrat','Gujranwala','Bahawalpur','Sheikhupura','Multan','Lodhran','Shekupura','Dera Ghazi','Sargodha','Jhelum','Mandi Bahauddin','Jhang','Mianwali','Rajanpur','Sahiwal'],
        labels: { rotate: -45, style: { fontSize: '9px', colors: '#64748b' } }
      },
      yaxis: { labels: { style: { colors: '#64748b', fontSize: '10px' } } },
      legend: { position: 'top', horizontalAlign: 'right', labels: { colors: '#94a3b8' }, fontSize: '11px' },
      grid: { borderColor: '#1e293b', strokeDashArray: 3 },
      tooltip: { theme: 'dark' }
    });
    charts.ranking.render();
  }

  // Province
  if (document.querySelector('#chart-province')) {
    charts.province = new ApexCharts(document.querySelector('#chart-province'), {
      series: [
        { name: 'Safe', data: [180, 45, 55, 40, 25] },
        { name: 'Unsafe', data: [320, 95, 70, 65, 35] }
      ],
      chart: { type: 'bar', height: 120, toolbar: { show: false }, background: 'transparent', fontFamily: 'Inter' },
      colors: ['#34d399', '#f87171'],
      plotOptions: { bar: { borderRadius: 3, columnWidth: '50%' } },
      dataLabels: { enabled: false },
      xaxis: { categories: ['Punjab','Sindh','KP','Balochistan','Others'], labels: { style: { colors: '#64748b', fontSize: '10px' } } },
      yaxis: { labels: { style: { colors: '#64748b', fontSize: '9px' } } },
      legend: { show: false },
      grid: { borderColor: '#1e293b', strokeDashArray: 3, yaxis: { lines: { show: false } } },
      tooltip: { theme: 'dark' }
    });
    charts.province.render();
  }

  // Parameters mini
  if (document.querySelector('#chart-parameters')) {
    charts.parameters = new ApexCharts(document.querySelector('#chart-parameters'), {
      series: [{ name: 'Safe', data: [78,65,68,72,80,55,58,42,48,30,25] }],
      chart: { type: 'bar', height: 120, toolbar: { show: false }, background: 'transparent', fontFamily: 'Inter' },
      colors: ['#34d399'],
      plotOptions: { bar: { borderRadius: 2, columnWidth: '60%' } },
      dataLabels: { enabled: false },
      xaxis: {
        categories: ['EC','Turb','Ca','Mg','Hard','SO4','NO3','TDS','Fe','As','Coli'],
        labels: { style: { colors: '#64748b', fontSize: '9px' } }
      },
      yaxis: { labels: { style: { colors: '#64748b', fontSize: '9px' } } },
      grid: { borderColor: '#1e293b', strokeDashArray: 3, yaxis: { lines: { show: false } } },
      tooltip: { theme: 'dark' }
    });
    charts.parameters.render();
  }

  // Bottom line
  if (document.querySelector('#chart-bottom-line')) {
    charts.bottomLine = new ApexCharts(document.querySelector('#chart-bottom-line'), {
      series: [{ name: 'Trend', data: [32, 38, 35, 42, 48, 45, 50, 48] }],
      chart: { type: 'area', height: 40, sparkline: { enabled: true }, background: 'transparent' },
      colors: ['#60a5fa'],
      fill: { type: 'gradient', gradient: { opacityFrom: 0.4, opacityTo: 0.05 } },
      stroke: { curve: 'smooth', width: 2 },
      markers: { size: 3 },
      tooltip: { theme: 'dark' }
    });
    charts.bottomLine.render();
  }
}

function submitFeedback(e){ e.preventDefault(); showToast('Thank you! Feedback submitted.'); e.target.reset(); }
function showToast(msg){
  const t=document.getElementById('toast');
  document.getElementById('toast-message').textContent=msg;
  t.classList.remove('hidden');
  setTimeout(()=>t.classList.add('hidden'),2800);
}
document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ closeModal(); const p=document.getElementById('filters-panel'); if(p&&!p.classList.contains('translate-x-full')) toggleFilters(); }});


/* ===== HOME DASHBOARD CHARTS & FILTERS ===== */
const citiesByRegion = {
  "All": ["All"],
  "Punjab": ["All","Bahawalpur","Faisalabad","Gujranwala","Gujrat","Kasur","Lahore","Multan","Rawalpindi","Sargodha","Sheikhupura","Sialkot","Attock","Chakwal","Dera Ghazi Khan","Jhang","Jhelum","Joharabad","Khushab","Lodhran","Mandi Bahauddin","Mianwali","Muzaffar Garh","Rahim Yar Khan","Rajanpur","Sahiwal","Vehari","Lalamusa"],
  "Sindh": ["All","Badin","Hyderabad","Karachi","Mirpur Khas","Shaheed Benazir","Sukkur","Tando Allah Yaar","Dadu","Jamshoro","Kashmore","Larkana","Malir","Mithi","Nawabshah","Shikarpur","Sanghar","Tandojam","Thatta"],
  "KP": ["All","Abbottabad","Mardan","Mangora","Peshawar","Chitral","Dera Ismail Khan","Kohat","Mansehra","Nowshehra","Swat"],
  "Balochistan": ["All","Khuzdar","Loralai","Quetta","Ziarat","Dera Allah Yar","Dera Murad Jamali","Killa Saifullah","Sibi"],
  "AJ&K": ["All","Muzaffarabad","Bagh","Mirpur","Neelam"],
  "GB": ["All","Gilgit","Astore","Hunza","Nagar","Skardu"],
  "ICT": ["All","Islamabad"]
};

function updateCityDropdown() {
  const region = document.getElementById('f-region')?.value || 'All';
  const citySel = document.getElementById('f-city');
  if (!citySel) return;
  const list = citiesByRegion[region] || citiesByRegion['All'];
  citySel.innerHTML = list.map(c => `<option value="${c}">${c}</option>`).join('');
}

let currentStatusFilter = 'all';
function setStatusFilter(s) {
  currentStatusFilter = s;
  ['all','safe','unsafe'].forEach(k => {
    const btn = document.getElementById('btn-status-' + k);
    if (btn) btn.classList.toggle('active', k === s);
  });
}

function getFilteredPoints() {
  if (!allMapPoints.length) buildAllMapPoints();
  const reg = document.getElementById('f-region')?.value || 'All';
  const city = document.getElementById('f-city')?.value || 'All';
  const status = currentStatusFilter || 'all';

  return allMapPoints.filter(s => {
    if (reg && reg !== 'All' && s.province !== reg) return false;
    if (city && city !== 'All' && s.city !== city) return false;
    if (status === 'safe' && s.status !== 'Safe') return false;
    if (status === 'unsafe' && s.status !== 'Unsafe') return false;
    return true;
  });
}

function updateKPIs(pts) {
  const total = pts.length;
  const safe = pts.filter(p => p.status === 'Safe').length;
  const unsafe = total - safe;
  const safePct = total ? ((safe / total) * 100).toFixed(1) : '0.0';
  const unsafePct = total ? ((unsafe / total) * 100).toFixed(1) : '0.0';
  const elT = document.getElementById('kpi-total');
  const elS = document.getElementById('kpi-safe');
  const elU = document.getElementById('kpi-unsafe');
  if (elT) elT.textContent = total;
  if (elS) elS.textContent = safe;
  if (elU) elU.textContent = unsafe;
  // update sub labels if present
  const safeCard = elS?.closest('.kpi-card');
  if (safeCard) {
    const sub = safeCard.querySelector('.kpi-sub');
    if (sub) sub.textContent = safePct + '% of total';
  }
  const unsafeCard = elU?.closest('.kpi-card');
  if (unsafeCard) {
    const sub = unsafeCard.querySelector('.kpi-sub');
    if (sub) sub.textContent = unsafePct + '% of total';
  }
  // Update home donut if exists
  if (charts.homeDonut) {
    try {
      charts.homeDonut.updateSeries([safe, unsafe]);
    } catch (_) {}
  }
}

function applyDashboardFilters() {
  const pts = getFilteredPoints();
  addMarkers(pts);
  updateKPIs(pts);
  populateDetailTable(
    sampleSources.filter(s => {
      const reg = document.getElementById('f-region')?.value || 'All';
      const city = document.getElementById('f-city')?.value || 'All';
      const status = currentStatusFilter || 'all';
      if (reg && reg !== 'All' && s.province !== reg) return false;
      if (city && city !== 'All' && s.city !== city) return false;
      if (status === 'safe' && s.status !== 'Safe') return false;
      if (status === 'unsafe' && s.status !== 'Unsafe') return false;
      return true;
    })
  );
  // Fit map to filtered markers if any
  if (map && pts.length) {
    try {
      const latlngs = pts.filter(p => p.lat).map(p => [p.lat, p.lng]);
      if (latlngs.length) map.fitBounds(latlngs, { padding: [40, 40], maxZoom: 10 });
    } catch (_) {}
  }
  // Close side filter panel if open
  const panel = document.getElementById('filters-panel');
  if (panel && !panel.classList.contains('translate-x-full')) {
    try { toggleFilters(); } catch (_) {}
  }
  showToast('Filters applied · ' + pts.length + ' sources shown');
}

// Keep name applyFilters as the public API used by HTML buttons
function applyFilters() {
  applyDashboardFilters();
}

function resetFilters() {
  const s = document.getElementById('f-source');
  const r = document.getElementById('f-region');
  const p = document.getElementById('f-param');
  const c = document.getElementById('f-city');
  if (s) s.value = 'Ground Water';
  if (r) r.value = 'All';
  if (p) p.value = 'All';
  updateCityDropdown();
  if (c) c.value = 'All';
  setStatusFilter('all');
  // Reset map + KPIs to full data
  if (!allMapPoints.length) buildAllMapPoints();
  addMarkers(allMapPoints);
  updateKPIs(allMapPoints);
  populateDetailTable(sampleSources);
  if (map) {
    try { map.setView([30.0, 69.5], 6); } catch (_) {}
  }
  showToast('Filters reset');
}

function initHomeCharts() {
  // Donut
  if (document.querySelector('#chart-home-donut') && !charts.homeDonut) {
    charts.homeDonut = new ApexCharts(document.querySelector('#chart-home-donut'), {
      series: [160, 282],
      chart: { type: 'donut', height: 180, fontFamily: 'Inter' },
      labels: ['Safe', 'Unsafe'],
      colors: ['#10b981', '#ef4444'],
      legend: { position: 'bottom', fontSize: '12px' },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            labels: {
              show: true,
              name: { show: true, fontSize: '12px' },
              value: { show: true, fontSize: '18px', fontWeight: 700 },
              total: { show: true, label: 'Total', fontSize: '11px', formatter: () => '442' }
            }
          }
        }
      },
      dataLabels: { enabled: false },
      stroke: { width: 2 }
    });
    charts.homeDonut.render();
  }

  // Province
  if (document.querySelector('#chart-home-province') && !charts.homeProvince) {
    charts.homeProvince = new ApexCharts(document.querySelector('#chart-home-province'), {
      series: [
        { name: 'Safe', data: [180, 45, 55, 40, 25] },
        { name: 'Unsafe', data: [320, 95, 70, 65, 35] }
      ],
      chart: { type: 'bar', height: 180, stacked: false, toolbar: { show: false }, fontFamily: 'Inter' },
      colors: ['#10b981', '#ef4444'],
      plotOptions: { bar: { borderRadius: 3, columnWidth: '55%' } },
      dataLabels: { enabled: false },
      xaxis: { categories: ['Punjab','Sindh','KP','Balochistan','Others'], labels: { style: { fontSize: '10px' } } },
      yaxis: { labels: { style: { fontSize: '10px' } } },
      legend: { position: 'top', fontSize: '11px' },
      grid: { borderColor: '#e2e8f0', strokeDashArray: 3 }
    });
    charts.homeProvince.render();
  }

  // Trend
  if (document.querySelector('#chart-home-trend') && !charts.homeTrend) {
    charts.homeTrend = new ApexCharts(document.querySelector('#chart-home-trend'), {
      series: [
        { name: 'Safe %', data: [5, 18, 32, 48, 55, 42, 36, 40, 45, 43, 41, 39] },
        { name: 'Unsafe %', data: [95, 82, 68, 52, 45, 58, 64, 60, 55, 57, 59, 61] }
      ],
      chart: { type: 'area', height: 220, toolbar: { show: false }, fontFamily: 'Inter' },
      colors: ['#10b981', '#ef4444'],
      fill: { type: 'gradient', gradient: { opacityFrom: 0.35, opacityTo: 0.05 } },
      stroke: { curve: 'smooth', width: 2.5 },
      markers: { size: 3 },
      dataLabels: { enabled: false },
      xaxis: {
        categories: ['2003','2005','2008','2010','2012','2015','2017','2019','2021','2023','2024','2025'],
        labels: { style: { fontSize: '10px' } }
      },
      yaxis: { max: 100, labels: { style: { fontSize: '10px' }, formatter: v => v + '%' } },
      legend: { position: 'top', fontSize: '11px' },
      grid: { borderColor: '#e2e8f0', strokeDashArray: 3 }
    });
    charts.homeTrend.render();
  }

  // Ranking
  if (document.querySelector('#chart-home-ranking') && !charts.homeRanking) {
    charts.homeRanking = new ApexCharts(document.querySelector('#chart-home-ranking'), {
      series: [
        { name: 'Safe', data: [95, 40, 35, 38, 25, 22, 28, 35, 18, 25] },
        { name: 'Unsafe', data: [70, 105, 60, 52, 30, 26, 24, 40, 24, 43] }
      ],
      chart: { type: 'bar', height: 220, toolbar: { show: false }, fontFamily: 'Inter' },
      colors: ['#10b981', '#ef4444'],
      plotOptions: { bar: { borderRadius: 2, columnWidth: '60%', horizontal: false } },
      dataLabels: { enabled: false },
      xaxis: {
        categories: ['Lahore','Rawalpindi','Sialkot','Faisalabad','Kasur','Gujrat','Gujranwala','Bahawalpur','Sheikhupura','Multan'],
        labels: { rotate: -40, style: { fontSize: '9px' } }
      },
      yaxis: { labels: { style: { fontSize: '10px' } } },
      legend: { position: 'top', fontSize: '11px' },
      grid: { borderColor: '#e2e8f0', strokeDashArray: 3 }
    });
    charts.homeRanking.render();
  }
}

// Call on load
document.addEventListener('DOMContentLoaded', function() {
  updateCityDropdown();
  // slight delay so map container is ready
  setTimeout(initHomeCharts, 300);
});


/* BACKUP_STATS_INIT – force charts if showView path fails */
document.addEventListener('DOMContentLoaded', () => {
  const navStats = document.getElementById('nav-stats');
  if (navStats) {
    navStats.addEventListener('click', () => {
      setTimeout(() => {
        if (!statsChartsInit && typeof initStatsCharts === 'function') {
          console.log('[NWQP] Backup stats init from nav click');
          try {
            initStatsCharts();
            statsChartsInit = true;
          } catch (e) {
            console.error(e);
          }
        }
      }, 200);
    });
  }
});
