const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const WebpackPwaManifestPluguin = require('webpack-pwa-manifest')
const WorkbocWebpackPlugin = require('workbox-webpack-plugin')

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
    }),
    new WebpackPwaManifestPluguin({
      name: 'Woffu list demo',
      shortname: 'Woffu demo',
      description: 'View and filter and sort data',
      background_color: '#fff',
      theme_color: '#3a4bbb',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]

    }),
    new WorkbocWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp('https://app-dev.woffu.com/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
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
      },
      {
        test: /\.(jpg|jpeg|gif|png|ico)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=1024&name=./assets/img/[name]-[hash].[ext]'
      },
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
