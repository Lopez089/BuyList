module.exports = {
    stories: ['../src/components/**/*.stories.@(ts|js)'],
    addons: [
        "@storybook/preset-create-react-app",
      ],
    webpackFinal: (config) => {
      return {
        ...config,
        module: {
          ...config.module,
        },
        resolve: {
          ...config.resolve,
        }
      };
    },
  };