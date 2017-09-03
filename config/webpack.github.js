var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
const path = require('path');

const ENV = process.env.NODE_ENV = process.env.ENV = 'github';

module.exports = webpackMerge(commonConfig, {

  output: {
    path: path.join(process.cwd(), "docs"),
    publicPath: 'https://little-group.github.io/firstTry/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },
});
