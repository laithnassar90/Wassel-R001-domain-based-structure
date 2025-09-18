// webpack/production.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Adjust if application.js is the entry point
  output: {
    path: path.resolve(__dirname, '../dist'), // Adjust path if dist is elsewhere
    filename: 'app.js',
    sourceMapFilename: 'app.js.map'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]' // Matches your previous output (e.g., 674f50d287a8c48dc19ba404d20fe713.eot)
        }
      }
    ]
  },
  devtool: 'source-map',
  mode: 'production'
};