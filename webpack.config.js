let path = require('path');
module.exports = {
  //入口文件
  entry:'./src/index.js',
  //指定输出的配置
  output:{
    //输出的目录只能用绝对路径
    path:path.resolve('build'),
    //打包后的文件名
    filename:'bundle.js',
  },
  //配置模块
  module:{
   rules:[
     {
       test:/\.jsx?$/,//文件的正则匹配
       use:'babel-loader',//加载器
       exclude:/node_modules/ //不需要解析node_modules下的文件
     }
   ]
  }

}