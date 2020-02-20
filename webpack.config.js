const path = require('path'); // eslint-disable-line no-unused-vars
const webpack = require('webpack'); // eslint-disable-line no-unused-vars
const HtmlWebPackPlugin = // eslint-disable-line no-unused-vars
  require('html-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: '/node_modules',
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/client/views/index.html',
      filename: './index.html',
    }),
  ],
};
