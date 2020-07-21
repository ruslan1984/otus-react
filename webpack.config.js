const path = require( 'path' );

const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
    entry: "./src/script.ts",
    output: {
        path: path.join( __dirname, '/dist' ),
        filename: "script.js",
    },
    mode: "development",
    resolve: {
        extensions: [ ".js", ".jsx", ".ts", ".tsx", ".json" ]
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
            }
        ]
    },
    devServer: {
        histryApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin( {
            template: "./src/index.html"
        } ),
        new PrettierPlugin({
            printWidth: 80,   
            tabWidth: 4 
        })
    ]
}