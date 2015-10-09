var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'main.js');

module.exports = {
  entry: [ 
    mainPath
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        loader: 'babel',
        exclude: [nodeModulesPath],
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      }, {
        test: /\.woff$/,
        loader: 'url?limit=100000'
      }
    ]
  },
  plugins: [
      new webpack.optimize.OccuranceOrderPlugin(),
      new webpack.DefinePlugin({
        'process.env' : {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      }),
      new webpack.ProvidePlugin({
        $ : "jquery",
        jQuery : "jquery",
        "window.jQuery" : "jquery",
        "root.jQuery" : "jquery"
      })
  ]
};