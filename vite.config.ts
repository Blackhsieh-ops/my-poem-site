// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-poem-site/',  // <- 加上這一行，名稱要和 GitHub repo 一樣
  plugins: [react()],
});
