const HtmlWebpackPlugin = require('html-webpack-plugin')
const {ModuleFederationPlugin} = require("webpack").container

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'hostRemoteEntry.js',
      remotes: {
        products: 'products@http://localhost:8081/productsRemoteEntry.js',
        carts: 'carts@http://localhost:8082/remoteEntry.js'
      },
      exposes: {
        './add': './src/add.js'
      },
      shared: {
        // 外部模块加载到 @faker-js/faker 不会重复加载
        '@faker-js/faker': {

        }
      }
    })
  ]
}
