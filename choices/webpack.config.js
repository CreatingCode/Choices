var webpack = require('webpack');
module.exports = {
  entry: [
    './test.js'
  ],
  output: {
    path: './public/javascripts',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /test.js/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
