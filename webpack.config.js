const Webpack = require('webpack')
const path = require('path') // path is native to Node.js

const isProd = process.env.NODE_ENV === 'production'

// Webpack Properties
const devtool = isProd ? 'source-map' : 'cheap-module-eval-source-map'
const entry = './src/index.js'

const output = {
  path: path.resolve(process.cwd(), 'build'),
  filename: 'build.js',
  publicPath: '/',
}

const our_module = {
  loaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
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
    extensions: ['.js'],
  },
  target: 'web',
}
