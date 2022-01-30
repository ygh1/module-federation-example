const HtmlWebpackPlugin = require('html-webpack-plugin')
const {ModuleFederationPlugin} = require("webpack").container

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'carts',
      filename: 'remoteEntry.js',
      exposes: {
        './index': './src/index.js'
      },
      remotes: {
        host: 'host@http://localhost:8080/hostRemoteEntry.js'
      },
      shared: {
        '@faker-js/faker': {
          eager: true
        }
      }
    })
  ]
}
