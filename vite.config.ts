import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 修改 base 為你 GitHub Pages 網址尾端的 repo 名稱
export default defineConfig({
  base: '/my-poem-site/',
  plugins: [react()],
});
