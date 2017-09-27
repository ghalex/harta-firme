'use strict'

const webpack = require('webpack')
//const nodeExternals = require('webpack-node-externals')
const path = require('path')
const env = require('yargs').argv.env

process.env.BABEL_ENV = env
process.env.NODE_ENV = env

let libraryName = 'harta'
let plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  }),
  new webpack.NamedModulesPlugin()
]

if (env === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }))
}

const paths = {
  libSrc: path.resolve(__dirname, 'src'),
  libIndex: path.resolve(__dirname, 'src/index.js'),
  libOutputDir: path.resolve(__dirname, 'build'),
  libModules: path.resolve(__dirname, 'node_modules')
}

module.exports = {
  entry: paths.libIndex,
  devtool: 'source-map',
  target: 'web',
  output: {
    path: paths.libOutputDir,
    filename: libraryName + '.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {emitFile: false}
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [paths.libModules, paths.libSrc],
    extensions: ['.json', '.js', '.jsx']
  },
  plugins: plugins
}
