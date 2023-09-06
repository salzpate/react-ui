module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-styling-webpack'],
  staticDirs: ['../public'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true // type-check stories during Storybook build
  },
  babel: async (options) => ({
    ...options,
    presets: [
      ...options.presets,
      [
    '@babel/preset-react', {
      runtime: 'automatic',
    },
        'preset-react-jsx-transform'
      ],
    ],
  }),

  docs: {
    autodocs: true
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  }
};
