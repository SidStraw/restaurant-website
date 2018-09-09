const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
// const webpackSpritesmith = require('webpack-spritesmith');
const webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devtool: "eval-source-map", //用以在打包後檢視Code的封裝來源
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        port: 4000
    },
    plugins: [ //插件設定，以陣列型態設定
        new miniCssExtractPlugin({ filename: "bundle.css" }),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "html", "index.html"),
            filename: "index.html",
            title: "我是標題"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
        // 將icon資料夾內的圖片組合並設置CSS
        // new webpackSpritesmith({
        //     src: {
        //         cwd: path.resolve(__dirname, "src", "icon"),
        //         glob: "*.png"
        //     },
        //     target: {
        //         image: path.resolve(__dirname, "src", "sprite", "sprite.png"),
        //         css: path.resolve(__dirname, "src", "sprite", "sprite.css")
        //     },
        //     apiOptions: {
        //         cssImageRef: "sprite.png"
        //     }
        // })
    ],
    module: {
        rules: [ //模組使用的規則，以陣列來設定
            {
                test: /\.js$/, //執行條件，可用正規表達式設定
                use: { //設定執行動作
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader", miniCssExtractPlugin.loader, "css-loader", "sass-loader"
                ]
            },
            {
                test: /\.ejs$/,
                loader: "ejs-loader"
            },
            {
                test: /\.(jpe?g|svg|png|gif)$/i,
                use: [{
                        loader: "file-loader",
                        options: {
                            outputPath: "img/",
                            publicPath: "img/",
                            name: "[name]-[hash:8].[ext]"
                        }
                    },
                    { loader: "image-webpack-loader" }
                ]
            },
            {
                test: /\.html$/i,
                loader: 'html-withimg-loader'
            }
        ]
    }

}