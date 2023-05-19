module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', {
    name: "@storybook/addon-styling",
    options: {
      postCss: true,
    }
  }],
  staticDirs: ['../public'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true // type-check stories during Storybook build
  },

  docs: {
    autodocs: true
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  }
};
