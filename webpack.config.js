var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-numbers.js',
        library: 'webpackNumbers',   //暴露library（将该library bundle暴露为名为 webpackNumbers 的全局变量）
        libraryTarget: 'umd'    //暴露方式。使library和其它环境兼容
    },
    externals: { // 外部化lodash（lodash不会被打包进代码。用户在使用本webpack-library包时，需要在自己的环境安装lodash）
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    }
};