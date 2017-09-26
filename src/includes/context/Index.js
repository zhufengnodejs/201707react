import React, {Component} from 'react';
import Header from "./Header";
import Main from "./Main";
/**
 * context是一种从父组件向下级组件传值的一种方式
 *
 */
export default class Index extends Component {
  constructor(){
    super();
    this.state = {color:'red'};
  }
  changeColor = (color)=>{
    this.setState({color});
  }
  //定义下层组件的上下文对象的名称和类型
  static childContextTypes = {
     color:React.PropTypes.string,
     changeColor:React.PropTypes.func
  }
  //返回下层组件的上下文对象
  getChildContext(){
    return {color:this.state.color,changeColor:this.changeColor};
  }
  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    )
  }
}