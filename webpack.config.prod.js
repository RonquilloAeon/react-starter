var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: [

    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.ejs',
      includeAnalytics: true,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.(?:png|jpg|svg|woff|woff2)$/,
        loader: 'url-loader',
        query: {
          // Inline images smaller than 10kb as data URIs
          limit: 10000,
        },
      },
      // js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      // CSS
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'src'),
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
    ],
  }
};
