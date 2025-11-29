import { defineConfig, globalIgnores } from 'eslint/config';
import storybook from 'eslint-plugin-storybook';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

const eslintConfig = defineConfig([
  globalIgnores(['.next/**', 'out/**', 'build/**', 'dist/**', 'coverage/**', 'test-results/**', 'storybook-static/**', 'node_modules/**', 'next-env.d.ts', 'postcss.config.mjs', '**/setupTests.ts']),
  ...nextVitals,
  ...nextTs,
  ...storybook.configs['flat/recommended'],
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'import/extensions': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      '@next/next/no-html-link-for-pages': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
]);

export default eslintConfig;
