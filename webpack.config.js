const path = require( "path" );
const webpackRules = require( "./webpackRules" );

const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  mode: "development",
  resolve: {
    extensions: [ ".js", ".jsx", ".ts", ".tsx", ".json" ],
    alias: {
      "@": path.resolve(__dirname, 'src/'),
      "@admin": path.resolve(__dirname, 'src/Admin'),
      "@auth": path.resolve(__dirname, 'src/Auth'),
      "@grammar": path.resolve(__dirname, 'src/Admin/Grammar'),
      "@orph": path.resolve(__dirname, 'src/Admin/Orphography'),
      "@store": path.resolve(__dirname, 'src/store'),
      types: path.resolve(__dirname, "src/types"),
      components: path.resolve(__dirname, "src"),
    },
  },
  output: {
    path: path.join( __dirname, "/dist" ),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /.css$/i,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      // {
      //   enforce: 'pre',
      //   test: /\.(js|ts)x?$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      //   options: {
      //     fix: true,
      //   },
      // },
      ...webpackRules,
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new PrettierPlugin({
      printWidth: 80,
      tabWidth: 2,
  })
  ],
};
