const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')

// dotenvｘ設定
dotenv.config()

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      // 環境変数とその値をkey: valueで指定
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
    }),
  ],
}
