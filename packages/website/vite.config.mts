/// <reference types='vitest' />
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
  root: import.meta.dirname,
  cacheDir: '../../node_modules/.vite/packages/website',
  server: {
    port: 4200,
    host: 'localhost',
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [
    tanstackRouter({
      routesDirectory: resolve(import.meta.dirname, 'src/routes'),
      generatedRouteTree: resolve(import.meta.dirname, 'src/routeTree.gen.ts'),
    }),
    react(),
    tailwindcss(),
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [],
  // },
  build: {
    outDir: '../../dist/packages/website/bundle',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    passWithNoTests: true,
    name: '@nx-sample/website',
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory:
        '../../dist/packages/website/test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
  resolve: { tsconfigPaths: true, dedupe: ['react', 'react-dom'] },
  define: { global: {} },
}));
