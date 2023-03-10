const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './src/main.js',

  output: {
    // pwd，打印當前工作目錄 = __dirname
    // D:\VUE-STARTER
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  // webpack 中，任何文件都是模塊
  module: {
    // 模塊打包規則
    // rules 是一個對象數組
    // 匹配規則，匹配要去轉換的那些文件，是否符合規則，通常是判斷副檔名
    // loader 就是用於轉換作用，例如 vue 轉換 js、sass 轉換 css
    rules: [
      // test 匹配的文件名；use 使用什麼 loader 處理文件
      { test: /\.vue$/, use: 'vue-loader'},
      // scss 或 sass
      { test: /\.s[ca]ss$/, use: ['style-loader' ,'css-loader' ,'sass-loader'] },
      // { test: /\.s[ca]ss$/, use: ['style-loader' ,'css-loader' ,'scss-loader'] },
      // js 或 mjs
      { 
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          // 配置 babel-loader
          options: {
            // 可以放入多個預設組合使用
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        type: 'asset/resource'
      }
    ],
  },

  // 插件的作用是增加 webpack 功能
  // 插件的構造函數實例數組，因為可以存在多個插件
  plugins: [
    new VueLoaderPlugin()
  ]
}