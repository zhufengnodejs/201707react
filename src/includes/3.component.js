/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
/**
 * 组件 是构成React页面的基础，是由React元素组成的
 **/
import React from 'react';
import ReactDOM from 'react-dom';
//每个组件必须要有一个render的方法,此方法名称是固定的，此方法必须返回一个React元素，并且最多只能返回一个React顶级元素
class Message extends React.Component{
  render(){
     return <h1>message</h1>
  }
}
//组件的用法中普通React元素用法相同
//组件首字母必须大写
//因为React是通过首字母大小写来区分组件和React元素的
/**
 * 组件的渲染过程
 * 1. 先根据类创建组件类的实例  let message = new Message();
 * 2. 调用实例的render方法得到返回React元素 let ele = message.render();
 * 3. 把React元素转成真实DOM元素并插入容器中
 */
ReactDOM.render(<Message/>,document.querySelector('#root'));