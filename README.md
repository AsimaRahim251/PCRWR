# Part 3 — Reports (Detail + Statistics)

**Git branch:** `feature/part-3-reports`

```
src/components/reports/
  DetailReport.jsx
  Statistics.jsx
  reports.css
# Part 2 — Geo / Map

**Git branch:** `feature/part-2-geo-map`

```
src/components/geo/
  GeoPage.jsx
  WaterMap.jsx
  GeoSidePanel.jsx
  OverviewPanel.jsx
  LayersPanel.jsx
  CriticalPanel.jsx
  AnalysisPanel.jsx
  geo.css
```

## Rules
- Default: **map only** (light Streets tiles)
- Second panel **only** when `activePanel` prop is set (Overview/Layers/Critical/Analysis)
- Close (X) → `onClosePanel()`
# Part 1 — Layout (Sidebar, Topbar, Theme, App Shell)

**Git branch:** `feature/part-1-layout`  
**Files you own:**

```
src/
  App.jsx
  main.jsx
  components/layout/
    Sidebar.jsx
    Topbar.jsx
    AppShell.jsx
  hooks/useTheme.js
```

## Responsibilities
- Left navbar + Geo sub-links
- Top bar (title, Live badge, region select)
- Light / Dark theme toggle
- React Router pages: `/`, `/detail`, `/stats`, `/ai`, `/feedback`
- Geo panel open/close state (context)

## Commands
```bash
git checkout -b feature/part-1-layout
# edit files
git add .
git commit -m "feat(layout): sidebar + topbar + theme"
git push -u origin feature/part-1-layout
# PCRWR National Water Quality Portal — React (4 Parts)

Team GitHub collaboration structure. Har part alag branch / alag person handle kar sakta hai.

## 4 Parts

| Part | Folder | Owner suggestion | Contents |
|------|--------|------------------|----------|
| **Part 1** | `part-1-layout/` | Person A | Sidebar, Topbar, Theme toggle, App shell, Routing |
| **Part 2** | `part-2-geo-map/` | Person B | Map (Leaflet), Overview, Layers, Critical, Analysis panels |
| **Part 3** | `part-3-reports/` | Person C | Detail Report table, Statistics dashboard + charts |
| **Part 4** | `part-4-ai-feedback/` | Person D | AI Agent chat, Feedback form |

Shared code: `shared/` (dummy data, theme CSS variables, API helpers)

## Setup (sabke liye)

```bash
npm create vite@latest pcrwr-portal -- --template react
cd pcrwr-portal
npm install
npm install react-router-dom leaflet react-leaflet chart.js react-chartjs-2
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Phir is folder ke files ko `src/` ke andar copy karo (structure neeche).

## GitHub branching strategy

```
main
 └── develop
      ├── feature/part-1-layout
      ├── feature/part-2-geo-map
      ├── feature/part-3-reports
      └── feature/part-4-ai-feedback
```

Har team member apni branch pe kaam kare → PR to `develop` → CI check → merge → `main` pe deploy.

## Folder → src mapping

```
src/
  App.jsx                 ← Part 1
  main.jsx
  index.css               ← shared theme
  components/
    layout/               ← Part 1
    geo/                  ← Part 2
    reports/              ← Part 3
    ai/                   ← Part 4
    feedback/             ← Part 4
  data/
    waterData.js          ← shared
  hooks/
    useTheme.js           ← Part 1
```

## CI/CD (ready)

| Workflow | Trigger | Action |
|----------|---------|--------|
| `ci.yml` | push/PR → main, develop | install + build |
| `pr-check.yml` | every PR | build must pass |
| `deploy.yml` | push → main | deploy to **GitHub Pages** |

Full guide: **[CICD.md](./CICD.md)**

```bash
# After first push to GitHub:
# Settings → Pages → Source: GitHub Actions
# Merge to main → auto deploy
```
