const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:path.join(__dirname, "./src/app.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle[hash:6].js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test:/\.css?$/,
                use: ["style-loader", "css-loader"],
                exclude: /node_modules/
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use: ["file-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"],
                exclude: /node_modules/
            }            
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.join(__dirname, "./src/index.html")
        })
    ],
    devServer: {
        contentBase: path.join(__dirname,"dist"),
        inline: true
    }

}