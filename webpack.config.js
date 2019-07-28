const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
  },

  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
      { test: /\.s(a|c)ss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
]
  },

  devServer: {
    contentBase: path.resolve('src'),
    hot: true,
    open: true,
    port: 8000,
    watchContentBase: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        secure: false
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new Dotenv(), 
    new webpack.EnvironmentPlugin({...process.env})  
  ],
    node: {
      fs: 'empty'
    }
}
