'use strict';

const path = require('path');
const staticDirPath = path.resolve(__dirname, 'public');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: staticDirPath,
  },
  devtool: 'source-map',
  devServer: {
    contentBase: staticDirPath,
    watchContentBase: true,
  },
};
