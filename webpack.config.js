var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'main.js');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack/hot/dev-server', 
    'webpack-dev-server/client?http://localhost:8080', 
    mainPath
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        loader: 'babel',
        exclude: [nodeModulesPath],
      }, {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: path.resolve(__dirname, 'app')
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
      new HtmlwebpackPlugin({ title: 'Wire Design' }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
        $ : "jquery",
        jQuery : "jquery",
        "window.jQuery" : "jquery",
        "root.jQuery" : "jquery"
      })
  ]
};