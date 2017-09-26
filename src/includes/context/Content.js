import React,{Component} from 'react';
export default class Content extends Component{
  //我要接收哪些上下文件对象属性
  static contextTypes = {
    color:React.PropTypes.string,
    changeColor:React.PropTypes.func
  }
  render(){
    return (
      <div style={{color:this.context.color}}>
        Content
        <input onBlur={event=>this.context.changeColor(event.target.value)} type="text"/>
      </div>
    )
  }
}