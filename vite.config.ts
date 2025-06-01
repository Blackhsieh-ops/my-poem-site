// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/my-poem-site/', // 這裡填你的 GitHub Pages 專案名稱
});

