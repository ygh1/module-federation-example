const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'productsRemoteEntry.js',
      exposes: {
        './index': './src/index.js'
      }
    })
  ]
}
