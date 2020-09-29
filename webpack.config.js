const path = require('path');

module.exports = {
    //入口文件
    entry: './src/index.js',
    
    //出口文件对象形式
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, './dist')
    },

    //devServer
    devServer:{
        publicPath:'/dist',
        port: 3000,
        stats:'minimal'
    },

    //打包模式
    mode: "development"
}
