const path = require('path'); // eslint-disable-line no-unused-vars
const webpack = require('webpack'); // eslint-disable-line no-unused-vars

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
};
