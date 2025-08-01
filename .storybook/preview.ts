import type { Preview } from '@storybook/nextjs-vite';

import '../styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#333' },
        light: { name: 'Light', value: '#F7F9F2' },
      },
    },
  },
  initialGlobals: {
    backgrounds: { value: 'light' },
  },
  tags: ['autodocs'],
};

export default preview
