const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  devServer: {
    port: 9000
  },
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
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
      }
    ]
  },
  resolve: {
    // Enable importing JS files without specifying their's extension
    extensions: ['.js', '.jsx'],
    alias: {
      // JS alias
      '@Components': path.resolve(__dirname, './src/components/'),
      '@Scenes': path.resolve(__dirname, './src/scenes/'),
      '@Services': path.resolve(__dirname, './src/services/'),
      '@Styles': path.resolve(__dirname, './src/styles/'),
      '@Utils': path.resolve(__dirname, './src/utils/')
    }
  }
}
