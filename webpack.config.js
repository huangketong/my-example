var webpack = require('webpack');


module.exports = {
    devtool: 'eval-source-map', //配置生成Source Maps,选择合适的选项
    entry: './entry.js',
    output: {
        path: __dirname, //__dirname是node.js的一个全局变量，它指向当前执行脚本所在的目录

        filename: 'bundle.js' // 打包后输出文件的文件名
    },

    devServer: {
        contentBase: "./", //本地服务器所加载的页面所在的目录
        color: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.json$/, loader: 'json' },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'bable',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugin: [
        new webpack.BannerPlugin('This file is created by huangkt...')
    ]
}