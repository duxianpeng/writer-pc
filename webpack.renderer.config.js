const { join } = require("path");
const webpack = require("webpack");
const devMode = process.env.NODE_ENV !== "production";
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");

const base = require("./webpack.base.config");

const webpackConfig = merge(base, {
  entry: ['babel-polyfill', join(__dirname, "renderer/index.js")],
  target: "electron-renderer",
  output: {
    path: join(__dirname, "build"),
    filename: "renderer.js",
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
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: join(__dirname, "postcss.config.js")
              }
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 500000
            }
          }
        ]
      },
      {
        test: /\.(woff|svg|eot|ttf|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 500000
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: join(__dirname, "postcss.config.js")
              }
            }
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        removeAttributeQuotes: true
      },
      hash: true,
      template: "./renderer/index.html"
    })
  ]
});
module.exports = webpackConfig;
