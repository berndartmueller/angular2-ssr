var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var clientConfig = require('./webpack.client.js');
var serverConfig = require('./webpack.server.js');

module.exports = [
  // Client
  webpackMerge({}, commonConfig, clientConfig),

  // Server
  webpackMerge({}, commonConfig, serverConfig)
];