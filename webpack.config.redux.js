let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  //入口文件
  entry:'./redux/index.js',
  //指定输出的配置
  output:{
    //输出的目录只能用绝对路径
    path:path.resolve('build'),
    //打包后的文件名
    filename:'bundle.js',
  },
  //在浏览器建立打包前和打包后源代码的映射关系，之后报错的时候就可以提示源代码行数了，否则只会提示打包后的文件行数bundle.js
  devtool: "cheap-module-source-map",
  //配置模块
  module:{
   rules:[
     {
       test:/\.jsx?$/,//文件的正则匹配
       use:'babel-loader',//加载器
       exclude:/node_modules/ //不需要解析node_modules下的文件
     },
     {
       test:/\.css$/,
       use:["style-loader","css-loader"]
     },
     {
       test:/\.(ttf|eot|svg|woff|woff2)$/,
       use:'url-loader'
     }
   ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'index.html'
    })
  ]

}