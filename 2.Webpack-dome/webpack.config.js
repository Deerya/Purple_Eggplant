// nodejs核心模块，专门用来处理路径问题
const path = require('path')

module.exports = {
    // 入口
    entry : './src/main.js',
    // 输出
    output : {
        // 文件输出路径
        path : path.resolve(__dirname,"dist"),//绝对路径
        // 文件名
        filename : 'main.js',
    },
    // 加载器
    module:{
        rules:[
            // loader的配置
            {
                test: /\.css$/,//只检测.css文件
                // 执行顺寻左右上下
                use: [
                    // 将js中css通过创建style标签添加HTML文件中生效
                    "style-loader", 
                    // 将css资源编译成commonjs的模块到js中
                    "css-loader",
                ],
            },
            {
                test: /\.less$/,
                use: [
                // compiles Less to CSS
                'style-loader',
                'css-loader',
                'less-loader',
                ],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                // compiles Less to CSS
                'style-loader',
                'css-loader',
                'sass-loader',
                ],
            },
            {
                test: /\.styl$/,
                use: [
                // compiles Less to CSS
                'style-loader',
                'css-loader',
                'stylus-loader',
                ],
            },
        ],
    },
    // 插件
    plugins:[
        // plugin的配置
    ],
    // 模式
    mode:"development",
}