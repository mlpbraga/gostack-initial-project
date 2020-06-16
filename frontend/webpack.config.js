const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname,'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/, //arquivos que terminam com .js
        exclude: /node_modules/, //arquivos do node modules não passarão pelo loader
        use: { loader: 'babel-loader' }
      }
    ]
  }
}