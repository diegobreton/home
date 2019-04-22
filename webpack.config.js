const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react']
        }
      }
    },
    {
      test:/\.(s*)css$/,
      use: ExtractTextPlugin.extract({
            fallback:'style-loader',
            use:['css-loader','sass-loader'],
        })
     }]
  },
  plugins: [
        new ExtractTextPlugin({filename:'bundle.css'})
    ]
}
