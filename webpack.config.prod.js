'use strict';

const path = require('path');
const webpack = require('webpack');
const validator = require('webpack-validator');

module.exports = validator({
  entry: path.join(__dirname, 'src', 'js', 'index.js'),

  output: {
    path: path.join(__dirname, 'build', 'js'),
    filename: 'main.min.js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules|src\/server/,
      include: /src/
    }]
  }
  // ,

  // resolve: {
  //   alias: {
  //     'react': 'preact-compat',
  //     'react-dom': 'preact-compat'
  //   }
  // }

});
