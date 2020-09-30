const path = require('path');
//打包html插件
const html_webpack_plugin = require('html-webpack-plugin') 

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
        //publicPath:'/dist',
        port: 3000,
        stats:'minimal'
    },

    //插件
    plugins:[
        new html_webpack_plugin({
            template:'./index.html',//文件模板
            filename:'index.html'//生成文件名称
        })
    ],

    //devTool
    devtool:'inline-source-map',

    //打包模式
    mode: "development"
}
