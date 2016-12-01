var webpack = require('webpack');


module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname, //__dirname是node.js的一个全局变量，它指向当前执行脚本所在的目录
        filename: 'bundle.js' //打包后输出文件的文件名
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' }
        ]
    },
    plugin: [
        new webpack.BannerPlugin('This file is created by huangkt...')
    ]
}