var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: ['webpack/hot/dev-server','./index'],

  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')}
    ]
  },

  plugins: [
    new ExtractTextPlugin('index.css'),
    new webpack.NormalModuleReplacementPlugin(
      /^react-text-highlight$/,
      '../src/index'
    )
  ]
};