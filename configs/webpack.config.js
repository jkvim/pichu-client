const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV
const ROOT_PATH = path.join(__dirname, '..')

const getPath = (filePath) => path.resolve(ROOT_PATH, filePath)

module.exports = {
  mode: NODE_ENV === 'production' ? 'production' : 'development',
  // devtool: 'inline-source-map',
  entry: getPath('./src/index.tsx'),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: getPath('./index.html'),
    }),
  ],
  // for skip warning
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devServer: {
    historyApiFallback: true
  }
}
