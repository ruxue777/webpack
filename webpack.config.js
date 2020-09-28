const path = require('path');

module.exports = {
    //入口文件
    entry: './01/src/index.js',
    
    //出口文件对象形式
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, './dist')
    },

    //打包模式
    mode: "development"
}
