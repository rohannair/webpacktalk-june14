const webpack = require('webpack')
const path = require('path') // path is native to Node.js

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

// Webpack Properties
const devtool = 'source-map'
const entry = './src/index.js'

const output = {
  path: path.resolve(process.cwd(), 'build'),
  filename: '[name].[hash].js',
  publicPath: '/',
}

const our_module = {
  loaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      exclude: /node_modules/,
    },
  ],
}

module.exports = {
  devtool,
  entry,
  output,
  module: our_module,
  resolve: {
    modules: ['./src', 'node_modules'],
    extensions: ['.js', '.css'],
  },
  target: 'web',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.LoaderOptionsPlugin({
      debug: !isProd,
      minify: true,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
    }),
  ],
}
