// shared config (dev and prod)

const autoprefixer = require("autoprefixer");
const { resolve } = require("path");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const webpack5esmInteropRule = {
  test: /\.m?js/,
  resolve: {
    fullySpecified: false,
  },
  exclude: /node_modules/,
};

module.exports = {
  resolve: {
    modules: ["node_modules", resolve(__dirname, "node_modules")],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      handlebars: "handlebars/dist/handlebars.js",
    },
  },
  context: resolve(__dirname, "src"),
  module: {
    rules: [
      webpack5esmInteropRule,
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /.(ts|tsx)$/,
        // include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [{ loader: "ts-loader" }],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          "file-loader?hash=sha512&digest=hex&name=img/[contenthash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
        ],
      },
      {
        test: /.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new NodePolyfillPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css",
      chunkFilename: "[id].css",
    }),
  ],
  performance: {
    hints: false,
  },
};
