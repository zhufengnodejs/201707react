/**
 * 高阶组件其实是一个函数,传进去一个组件，返回一新的组件
 * 高阶函数
 **/
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
function Input(){
  return <input/>
}
class Form extends Component{
  render(){
    return (
      <form>
        用户名 <Input/>
      </form>
    )
  }
}
ReactDOM.render(<Form/>,document.querySelector('#root'));