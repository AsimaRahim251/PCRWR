import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages: set base to '/REPO_NAME/' when deploying
// Local / Vercel / Netlify: base can stay '/'
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
});
