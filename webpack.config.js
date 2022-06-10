const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/main.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(js|jsx)$/, use: ['babel-loader'], exclude: /node_modules/ },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new ESLintPlugin()],
};
