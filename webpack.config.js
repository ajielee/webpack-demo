const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    compress: true,
    port: 8888
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './public/dist'),
    publicPath: '/'
  }
}
