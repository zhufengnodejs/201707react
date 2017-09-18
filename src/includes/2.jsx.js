import React from 'react';
import ReactDOM from 'react-dom';
/**
 * js+html混合写法
 **/
function upper(str){
  return str.toUpperCase();
}
//let name = 'zfpx';
//如果想在HTML中显示一个变量的值，需要用{}包裹
//{}里面可以放任意的表达式
//表达式 变量和操作符的组合,表达式必须返回一个值
/*let a = 10;
let ele = <h1>{a}</h1>;*/
let names = ['a','a','c','d'];
//Each child in an array or iterator should have a unique "key" prop.数组中的每一个子元素都应该有一个唯一的key属性 dom diff
//
let style={color:'green'};
//className
//style
ReactDOM.render(<ul>
  {
    names.map((item,index)=>(
      <li style={style} className="bg" key={index}>{item}</li>
    ))
  }
</ul>,document.querySelector('#root'));