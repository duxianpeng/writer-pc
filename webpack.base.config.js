const { join } = require("path");
const webpack = require("webpack");
const devMode = process.env.NODE_ENV !== "production";
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = {
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 100,
    ignored: /node_modules/
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      _: "lodash"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};


if (devMode) {
  webpackConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': '"development"'}
    })
  );
} else {
  webpackConfig.plugins.push(
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': '"production"'}
    })
  );
}

module.exports = webpackConfig;