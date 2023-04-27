const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode:"development",
  devServer: {
    port: '3002',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Cart App',
      template: 'public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'cart', // Name of the MicroFrontend
      filename: 'remoteEntry.js', //Name of a file which wil be imported in container.
      exposes: {
        './CartIndex': './src/index.js' //code to be exported and can be used in container.
      }
    })
  ],
};
  

