// development config
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const { resolve } = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = merge(commonConfig, {
  mode: "development",
  output: {
    publicPath: "/",
  },
  entry: ["./index.tsx"],

  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 3030,
    hot: true,
  },
  devtool: "source-map",
  plugins: [
    new Dotenv({
      defaults: true,
      path: resolve(__dirname, "./.env.dev"),
    }),
  ],
  module: {
    rules: [],
  },
});
