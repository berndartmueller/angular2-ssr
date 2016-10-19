var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  target: 'web',
  entry: {
    'app': './src/client/app/main.ts',
    'polyfills': './src/client/app/polyfills.browser.ts'
  },
  output: {
    path: helpers.root('dist/client'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
};