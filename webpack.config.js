const path = require("path");

const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const PrettierPlugin = require("prettier-webpack-plugin");


module.exports = {
  entry: "./src/script.tsx",
  devtool: "source-map",
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "script.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        loader: require.resolve("babel-loader"),
        exclude: /node_modules/,
      },
      {
          test: /\.(js|ts)x?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
      },
      {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
      }
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
