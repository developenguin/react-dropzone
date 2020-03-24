const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.js', '../src/**/*.stories.jsx'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register'
  ],
  webpackFinal: config => {

    config.module.rules.push({
      test: /\.scss$/,
      loader: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    });

    config.module.rules.push({
      test: /stories.js(x)?$/,
      loader: require.resolve('@storybook/source-loader'),
      include: [path.resolve(__dirname, '../src/components/')],
      enforce: 'pre',
      options: {
        injectParameters: true,
        inspectLocalDependencies: false,
        inspectDependencies: false
      }
    });

    return config;

  }
};
