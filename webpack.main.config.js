const { join } = require("path");
const webpack = require("webpack");
const devMode = process.env.NODE_ENV !== "production";
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");

const base = require("./webpack.base.config");

const webpackConfig = merge(base, {
  entry: ['babel-polyfill', join(__dirname, "main/index.js")],
  target: "electron-main",
  output: {
    path: join(__dirname, "./build"),
    filename: "main.js",
    publicPath: "./"
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: /node_module/
      }
    ]
  },
  node: {
    __dirname: false,
    __filename: false
  },
});

module.exports = webpackConfig;
