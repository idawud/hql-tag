const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  plugins: [new CompressionPlugin()],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  output: {
    path: path.resolve("dist"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
};
