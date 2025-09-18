const config = require('./../webpack.config');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

config.devtool = 'eval-source-map';
config.output.publicPath = '/static/';

// ❌ Not needed in Webpack 6 (dev server auto-injects client)
// config.entry.push('webpack-dev-server/client?http://localhost:3001');

config.devServer = {
  progress: true,
  colors: true,
  port: 3001,
  inline: true,
  historyApiFallback: true,
};

config.entry.push(
  'webpack-dev-server/client?http://localhost:3001'
);

config.plugins = [
  new WebpackNotifierPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    __DEVELOPMENT__: true,
    __DEVTOOLS__: false
  })
];

// Optional: modern optimization setting
config.optimization = {
  emitOnErrors: false
};

module.exports = config;
