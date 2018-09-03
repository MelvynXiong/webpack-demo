const path = require('path');

module.exports = {
    entry: './src/index.js', //入口文件, 就是开始打包整个项目的起点
    output: {
        filename: 'bundle.js', //输出文件的名字和输出位置，在这里更改
        path: path.resolve(__dirname, 'dist')
    }, //出口文件
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]

            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
            ]
    }, //处理对应模块
    plugins: [], //对应的插件
    devServer: {}, //开发服务器配置
}