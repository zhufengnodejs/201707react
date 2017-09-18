//核心模块
import React from 'react';
//用来在页面面渲染DOM用的模块
import ReactDOM from 'react-dom';
/**
 * jsx=javascript+xml(html)混合写法
 * facebook自己创新的一种特殊的语法
 * React元素 是构建一个React应用的基本单位
 * render把React元素转换成真实的DOM节点并插入到容器内部
 * React元素=虚拟DOM元素，并不是真实的DOM对象，而只是描述 真实DOM对象的一种数据结构
 */
let ele = <h1 id="1">hello</h1>;
console.log(ele);//{type:'h1',props:{children:'hello'}}
//在真正渲染的时候，ReactDOM会把虚拟DOM变成真实的DOM对象并插入到容器内部
ReactDOM.render(ele,document.querySelector('#root'));
//createElement 1元素的类型 属性对象
//ReactDOM.render(React.createElement('h1',{style:{color:'red'}},React.createElement('span',null,'hello')),document.querySelector('#root'));