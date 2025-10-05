/// <reference types="vitest" />

import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

import pkg from './package.json' with { type: 'json' };

// https://vite.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          rthree: [
            '@react-three/drei',
            '@react-three/fiber',
            '@react-spring/three'
          ],
          three: ['three'],
          vendor: ['react', 'react-dom']
        }
      }
    }
  },
  define: {
    __API_URL__: 'window.__backend_api_url',
    __APP_VERSION__: JSON.stringify(pkg.version)
  },
  plugins: [tsconfigPaths({ projects: ['tsconfig.base.json'] }), react(), tailwindcss()]
});
