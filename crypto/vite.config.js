import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Add this base configuration
  base: '/crypto/', // Replace with the subdirectory path you want
  build: {
    outDir: '../dist/crypto',  // Ensure this path matches where you want to output the build
  },
  define: {
    __BASE_PATH__: JSON.stringify('/crypto'),
  }
});