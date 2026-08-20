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
```
