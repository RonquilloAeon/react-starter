var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client?noInfo=true&reload=true',
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.ejs',
      includeAnalytics: false,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
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
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.styl$/,
        oneOf: [
          {
            resourceQuery: /standard/,
            loader: 'style-loader!css-loader!stylus-loader',
          },
          {
            loader: 'style-loader!css-loader?modules=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.css', '.js', '.json', '.styl'],
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true,
  },
};
