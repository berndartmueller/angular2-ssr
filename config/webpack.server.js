var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');
var path = require('path');

module.exports = {
  target: 'node',
  entry: './src/server/server.ts',
  output: {
    path: helpers.root('dist/server'),
    publicPath: path.resolve(__dirname),
    filename: 'index.js'
  },
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  }
};