const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const spreadOperatorPlugin = require('babel-plugin-transform-object-rest-spread');

let NODE_ENV = 'production';
if (process.env.NODE_ENV) {
  NODE_ENV = process.env.NODE_ENV.replace(/^\s+|\s+$/g, '');
}

module.exports = {
  entry: {
    index: './index.js',
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../client_packages/cef/assets'),
    filename: '[name].js',
  },
  watch: NODE_ENV === 'development',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [/node_modules/],
      loader: 'babel-loader',
      options: {
        presets: ['react', 'es2015'],
        plugins: [spreadOperatorPlugin],
      },
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    ],
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  optimization: {
    minimize: true,
  },
  mode: NODE_ENV,
  plugins: [
    new webpack.EnvironmentPlugin('NODE_ENV'),
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, '../client_packages/cef/index.html'),
      template: './public/index.html',
    }),
  ],
};
