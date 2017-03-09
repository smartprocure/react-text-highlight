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
      {test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })}
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
