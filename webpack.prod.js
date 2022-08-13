const { merge } = require("webpack-merge");
const { resolve } = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const commonConfig = require("./webpack.common");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./index.tsx",
  output: {
    filename: "js/bundle.[contenthash].min.js",
    path: resolve(__dirname, "./dist"),
    publicPath: "/",
  },
  module: {
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 3030,
    hot: true, 
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: resolve(__dirname, "./public") }],
    }),
    new Dotenv({
      defaults: true,
      path: resolve(__dirname, "./.env.prod"),
    }),
  ],
});
