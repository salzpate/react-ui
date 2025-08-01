// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import css from '@eslint/css';
import { tailwindSyntax } from '@eslint/css/syntax';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const eslintConfig = [{
  ignores: ['!node_modules/', '/dist/**', 'postcss.config.mjs', '**/setupTests.ts'],
}, ...compat.config({
  extends: ['next', 'next/typescript', 'prettier'],
  rules: {
    'import/extensions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.ts', '.tsx'] }],
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    '@next/next/no-html-link-for-pages': 'off',
  },
}), {
  files: ['**/*.css'],
  language: 'css/css',
  languageOptions: {
    customSyntax: tailwindSyntax,
  },
  ...css.configs.recommended,
}, ...storybook.configs["flat/recommended"]];

export default eslintConfig;
