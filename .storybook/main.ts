import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [],
  framework: '@storybook/nextjs-vite',
  staticDirs: ['../public'],
};

export default config;
