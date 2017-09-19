/**
 * 属性
 * 1. 是一般是由父组件传给子组件
 * 2. 子组件会有一人props属性对象，
 * 3. Cannot assign to read only property 'text' of object
   4. 子组件可以读取父组件传递的属性，但是不能直接改
 * 1.如何传递属性
 * 2.属性和状态的区别和联系
 * 3.单向数据流
 *
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class LikeButton extends Component{
  render(){
    /**
     * onClick等于的是一个函数定义，而非一个函数执行结果
     * 如果加上小括号，则会直接执行，再点击就没效果了
     */
    return (
      <button onClick={this.props.changeText}>
        {this.props.text}
      </button>
    )
  }
}
class Index extends Component{
  constructor(){
    super();
    this.state = {text:"点赞"};//初始化状态对象
  }
  //对状态字段取反
  changeText = ()=>{
    this.setState({
      text:this.state.text=='点赞'?'取消':'点赞'
    });
  }
  render(){
    return (
      <div>
        <LikeButton text={this.state.text} changeText={this.changeText}/>
      </div>
    )
  }
}
ReactDOM.render(<Index/>,document.querySelector('#root'));