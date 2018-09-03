const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    }, //入口文件, 就是开始打包整个项目的起点
    output: {
        filename: '[name].bundle.js',
        //输出文件的名字和输出位置，在这里更改
        path: path.resolve(__dirname, 'dist')
    }, //出口文件
    module: {
    }, //处理对应模块
    plugins: [new HtmlWebpackPlugin({
        title: 'Output Management'
    }),
    new CleanWebpackPlugin('dist')], //对应的插件
    devServer: {}, //开发服务器配置
}