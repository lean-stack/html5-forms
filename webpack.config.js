// Plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCassExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: '[name].bundle.js',
  },

  // Development
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },

  // Loaders
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          // Extract CSS into files
          {
            loader: MiniCassExtractPlugin.loader
          },
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },

  // Plugins
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCassExtractPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
}
