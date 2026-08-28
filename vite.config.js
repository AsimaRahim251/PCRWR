import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages ke liye REPO name daalo
  base: process.env.VITE_BASE || '/pcrwr-portal/',   // ← apna exact repo name
});
