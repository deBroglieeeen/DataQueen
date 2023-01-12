// const path = require('path')

// module.exports = {
//   stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
//   addons: [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     '@storybook/addon-interactions',
//     '@chakra-ui/storybook-addon',
//   ],
//   features: {
//     emotionAlias: false,
//   },
//   framework: '@storybook/react',
//   core: {
//     builder: '@storybook/builder-webpack5',
//     disableTelemetry: true,
//   },
//   typescript: {
//     reactDocgen: false,
//   },
//   webpackFinal: async (config) => {
//     return {
//       ...config,
//       resolve: {
//         ...config.resolve,
//         alias: {
//           ...config.resolve.alias,
//           '@emotion/core': path.toPath('node_modules/@emotion/react'),
//           'emotion-theming': path.toPath('node_modules/@emotion/react'),
//         },
//       },
//     }
//   },
// }

module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@chakra-ui/storybook-addon'],
  core: {
    builder: '@storybook/builder-webpack5',
  },
}
