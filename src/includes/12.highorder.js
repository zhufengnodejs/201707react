/**
 * 高阶组件其实是一个函数,传进去一个组件，返回一新的组件
 * 高阶函数
 **/
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
function local(Comp,key){ //
   class Proxy extends Component{
     render(){
       return <Comp/>
     }
   }
   return Proxy;
}
function Input(){
  return <input/>;//username
}
function Textarea(){
  return <textarea></textarea>;//content
}
let LocalInput =  local(Input,'username');
class Form extends Component{
  render(){
    return (
      <form>
        用户名:<LocalInput/>
        内容:<Textarea/>
      </form>
    )
  }
}
ReactDOM.render(<Form/>,document.querySelector('#root'));