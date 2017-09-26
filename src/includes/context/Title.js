import React,{Component} from 'react';
export default class Title extends Component{
  //我要接收哪些上下文件对象属性
  static contextTypes = {
    color:React.PropTypes.string
  }
  render(){
    return (
      <div style={{color:this.context.color}}>
        Title
      </div>
    )
  }
}