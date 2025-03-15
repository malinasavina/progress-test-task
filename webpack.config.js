import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';

export default {
  entry: './src/scripts/main.js',
  mode: process.env.NODE_ENV || 'production',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle[contenthash].js',
    publicPath: process.env.NODE_ENV === 'production' ? '/progress-test-task/' : '',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ESLintPlugin({
      extensions: ['js'],
      emitWarning: true,
    }),
  ],
  devServer: {
    open: true
  },
  resolve: {
    extensions: ['.js']
  }
};