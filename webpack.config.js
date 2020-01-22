const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },

  resolve: {
    extensions: [ '*', '.js', '.jsx' ]
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]

};
