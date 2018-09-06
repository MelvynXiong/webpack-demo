const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
        //print: './src/print.js'
    }, //入口文件, 就是开始打包整个项目的起点
    output: {
        filename: '[name].bundle.js',
        //输出文件的名字和输出位置，在这里更改
        path: path.resolve(__dirname, 'dist'),
        //publicPath: "./xiong/"
    }, //出口文件
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }, //处理对应模块
    plugins: [
        new HtmlWebpackPlugin({ //用来自动生成入口index.html文件
            title: 'Output Management'
        }),
        new CleanWebpackPlugin('dist'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ], //对应的插件
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
        //publicPath: "/test/"
    }, //开发服务器配置
}