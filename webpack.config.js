const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        presets: ['@babel/react', '@babel/env'],
        plugins: [
          '@babel/plugin-proposal-object-rest-spread',
        ],
      },
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.(jpg|png)$/,
      use: {
        loader: 'url-loader',
      },
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
