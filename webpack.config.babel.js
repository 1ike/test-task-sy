import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpackMerge from 'webpack-merge';
import autoprefixer from 'autoprefixer';

const dist = 'docs';

const common = {
  entry: ['./src/js/index.js', './src/sass/styles.scss'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, dist),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer(),
              ],
              sourceMap: true,
            },
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],

};

const prod = {
  plugins: [
    new CleanWebpackPlugin(),
  ],
};

const dev = {
  devtool: '#cheap-module-eval-source-map',
};


export default (env, argv) => webpackMerge(common, argv.mode === 'production' ? prod : dev);
