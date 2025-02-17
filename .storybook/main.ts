import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],

  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-themes',
  ],

  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },

  "docs": {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
