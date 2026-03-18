/// <reference types="vite/client" />
/// <reference types="vitest/config" />

import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      name: '@salzpate/react-ui',
      formats: ['es'],
      fileName: 'react-ui',
    },
    rollupOptions: {
      external: ['next', 'react', 'react-dom', 'react/jsx-runtime', 'clsx', 'tailwind-merge', 'react-hook-form', '@heroicons/react'],
    },
    sourcemap: true,
    target: 'es2020',
    minify: 'oxc',
    cssCodeSplit: true,
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    react(),
    dts({
      include: 'src',
      exclude: ['node_modules', 'dist', 'vite.config.mts', '**/*.test.{ts,tsx}', 'src/test', 'src/config/test', 'stories', '.storybook'],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/config/test/setupTests.ts',
    restoreMocks: true,
    reporters: ['default', 'json', 'html'],
    outputFile: {
      json: './test-results/results.json',
      html: './test-results/index.html',
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
      reportsDirectory: './coverage',
      include: ['src'],
      exclude: ['src/**/index.ts', 'src/test/**/*', 'src/types/**/*', 'src/components/types/**/*', 'stories/**/*'],
    },
  },
});
