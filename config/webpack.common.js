var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'app': './app/main.ts',
    'polyfills': './app/polyfills.browser.ts'
  },

  resolve: {
    extensions: ['', '.js', '.ts']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['raw-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};