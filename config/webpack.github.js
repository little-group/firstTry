var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
const path = require('path');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin'); // Or `import 'base-href-webpack-plugin';` if using typescript

const ENV = process.env.NODE_ENV = process.env.ENV = 'github';

module.exports = webpackMerge(commonConfig, {

  output: {
    path: path.join(process.cwd(), "docs"),
    publicPath: 'https://little-group.github.io/firstTry/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },
  // Import package

// Add to plugins
plugins: [
  new BaseHrefWebpackPlugin({ baseHref: '/firstTry/' })
]
});
