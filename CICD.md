# CI/CD Guide — PCRWR Portal

## Pipelines (GitHub Actions)

| Workflow | File | Kab chalta hai | Kya karta hai |
|----------|------|----------------|---------------|
| **CI** | `.github/workflows/ci.yml` | Push / PR → `main`, `develop` | `npm ci` → `npm run build` → artifact |
| **PR Check** | `.github/workflows/pr-check.yml` | Har Pull Request | Build pass zaroori; fail pe comment |
| **Deploy** | `.github/workflows/deploy.yml` | Push → `main` only | Build → **GitHub Pages** deploy |

---

## Setup steps (ek dafa)

### 1. Repo banao
```bash
cd pcrwr-react
git init
git add .
git commit -m "feat: initial 4-part React portal + CI/CD"
git branch -M main
git remote add origin https://github.com/YOUR_USER/pcrwr-portal.git
git push -u origin main
git checkout -b develop
git push -u origin develop
```

### 2. GitHub Pages enable karo
1. Repo → **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Deploy workflow `main` pe push ke baad auto chalega
4. Site URL: `https://YOUR_USER.github.io/pcrwr-portal/`

### 3. Branch protection (recommended)
**Settings → Branches → Add rule** for `main` / `develop`:
- Require pull request before merging
- Require status checks: **CI** / **PR Check** pass

---

## Team flow

```
feature/part-1-layout  ──┐
feature/part-2-geo-map ──┼── PR → develop  (CI must pass)
feature/part-3-reports ──┤
feature/part-4-ai-feedback ─┘
                              │
                              ▼
                         develop ── PR → main ── Deploy (Pages)
```

```bash
# Example: Person B
git checkout develop
git pull
git checkout -b feature/part-2-geo-map
# ... code ...
git add .
git commit -m "feat(geo): map + side panels"
git push -u origin feature/part-2-geo-map
# GitHub pe PR open karo → develop
```

---

## Optional: Vercel / Netlify (bina Pages)

### Vercel
1. [vercel.com](https://vercel.com) → Import GitHub repo
2. Framework: Vite
3. Build: `npm run build` · Output: `dist`
4. Har `main` push pe auto deploy

### Netlify
1. New site → GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`

Agar Vercel use karo to `deploy.yml` (GitHub Pages) disable / delete kar sakte ho.

---

## Secrets (agar baad mein API lagao)

Repo → **Settings → Secrets and variables → Actions**

| Name | Use |
|------|-----|
| `VITE_API_URL` | Backend API base URL |

Workflow mein:
```yaml
env:
  VITE_API_URL: ${{ secrets.VITE_API_URL }}
```
