import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    sourcemap: false,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
});
