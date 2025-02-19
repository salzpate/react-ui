/// <reference types="vite/client" />
/// <reference types="vitest" />

import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      name: '@salzpate/react-ui',
      formats: ['es', 'umd'],
      fileName: 'react-ui',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          'classnames': 'classnames',
          'react-hook-form': 'ReactHookForm',
          'react-dom': 'ReactDOM',
          react: 'React',
        },
      },
    },
    sourcemap: true,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      include: 'src',
      exclude: ['node_modules', 'dist', 'vite.config.mts', '**/*.test.ts(x)', 'src/test', 'src/config/test', 'stories', '.storybook'],
    }),
  ],
  test: {
    globals: true,
    setupFiles: './src/config/test/setupTests.ts',
    restoreMocks: true,

    coverage: {
      reporter: ['text', 'lcov'],
      reportsDirectory: './artifacts/coverage',
      include: ['src'],
      exclude: [
        'src/**/index.ts',
        'src/test/**/*',
        'src/types/index.d.ts',
        'stories/**/*',
        '.eslintrc.cjs ',
      ],
    },
  },
});
