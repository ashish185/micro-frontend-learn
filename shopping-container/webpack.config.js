const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: "development",
  devServer: {
    port: '3003',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Shopping container',
      template: 'public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: { // remotes are the other micro-frontend that we are used in container.
        'cart': 'cart@http://localhost:3002/remoteEntry.js',
        'products': 'products@http://localhost:3001/remoteEntry.js',
      }
    })
  ],
};
  

