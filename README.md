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
