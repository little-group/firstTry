let webpackMerge = require('webpack-merge');
let commonConfig = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin'); // Or `import 'base-href-webpack-plugin';` if using typescript
const entryPoints = ["inline","polyfills","sw-register","scripts","styles","vendor","main"];

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
  new BaseHrefWebpackPlugin({ baseHref: '/firstTry/' }),
  new HtmlWebpackPlugin({
    "template": "./src/index.html",
    "filename": "./404.html",
    "hash": false,
    "inject": true,
    "compile": true,
    "favicon": false,
    "minify": false,
    "cache": true,
    "showErrors": true,
    "chunks": "all",
    "excludeChunks": [],
    "title": "Webpack App",
    "xhtml": true,
    "chunksSortMode": function sort(left, right) {
      let leftIndex = entryPoints.indexOf(left.names[0]);
      let rightindex = entryPoints.indexOf(right.names[0]);
      if (leftIndex > rightindex) {
        return 1;
      }
      else if (leftIndex < rightindex) {
        return -1;
      }
      else {
        return 0;
      }
    }
  }),
]
});
