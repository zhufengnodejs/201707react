/**
 * 1. 搭建react开发环境
 *   1. 初始化项目  npm init -y
 *   2. 安装依赖的模块 react react-dom babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react html-webpack-plugin
 *   3. 编写配置文件 webpack.config.js
 *     entry
 *     output
 *     devtool
 *     module -> rules
 *     plugins
 *  4.配置.babelrc
 *  5.在package.json中添加脚本
 *  npm run dev  npm run build  --save --save-dev
 * 2. jsx语法
 *    javascript+xml
 * 3. 渲染
 *   h1React元素, 是构建react应用的基本单位
 *   React.createElement()->虚拟DOM对象-再转成真实DOM元素插入容器内部
 *   ReactDOM.render(<h1></h1>,container);
 * 4.组件
 *  class Dog extends React.Component (setState)
 *  render方法，必须有一个返回值，返回且只能返回一个顶级的React元素
 *  组件内容可以定义状态 constructor(){this.state = {}}
 *  状态可以用来渲染视图，而且当状态发生改变的时候可以重新渲染视图
 *  只能用setState修改状态，因为只有使用setState才能重新渲染页面
 * 5.事件
 *  可以React元素添加事件处理器，值是一个函数的定义,当指定事件发生的时候，就会执行对应的事件处理函数.注意THIS的问题。或者bind this,或者使用箭头函数
 *
 *
 */