import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/rss-puzzle/',
  build: {
    sourcemap: false,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
});
