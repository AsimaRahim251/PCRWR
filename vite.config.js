import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages: base = '/REPO_NAME/'
// Local / Vercel / Netlify: base = '/'
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/PCRWR/',
});
