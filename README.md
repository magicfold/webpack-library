

## webpack创建library

[创建library](https://www.webpackjs.com/guides/author-libraries/)

### 解释

#### --package.json

``` json
"main": "dist/webpack-numbers.js",
```

"main"是import包时的入口

#### --webpack.config.js

``` javascript
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-numbers.js',
        library: 'webpackNumbers',
        libraryTarget: 'umd'
    },
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    }
};
```

**output.library: 'webpackNumbers'**, 暴露library。将该library bundle暴露为名为 webpackNumbers 的全局变量。当使用script引用webpack-numbers.js时，可以直接通过webpackNumbers变量。

``` 
<script src="./webpack-numbers.js"></script>
<script>
    // ...
    // 全局变量
    webpackNumbers.wordToNum('Five');
    // window 对象中的属性
    window.webpackNumbers.wordToNum('Five');
    // ...
</script>
```

**output.libraryTarget: 'umd'**，library的暴露方式。'umd'将你的 library 暴露为所有的模块定义下都可运行的方式。它将在 CommonJS, AMD 环境下运行，或将模块导出到 global 下的变量。

**externals**， 外部化lodash（lodash不会被打包进代码。用户在使用本webpack-library包时，需要在自己的环境安装lodash）

### 将library发布到npmjs

> npm publish --access=public

### 安装

> npm install @magicfold/webpack-library

### 使用

``` javascript
import numToWord, {
    wordToNum
} from '@magicfold/webpack-library';

console.log(numToWord(2));
console.log(wordToNum('Three'));
```

