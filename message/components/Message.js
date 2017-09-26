import React,{Component} from 'react';
export default class Message extends Component{
  constructor(){
    super();
    this.state = {time:''};
  }
  componentWillMount(){
    let createAt = this.props.item.createAt;//创建时间
    let duration = (Date.now() - new Date(createAt))/1000;
    let time;
    if(duration>=60){
      time = `${Math.round(duration/60)}分钟以前`;
    }else{
      time = duration<1?'刚刚':`${Math.round(duration)}秒以前`;
    }
    this.setState({time})
  }
  render(){
    return (
      <li key={this.props.item.id} className="list-group-item">{this.props.item.author}:{this.props.item.content}
        <button onClick={()=>this.props.delMessage(this.props.item.id)} className="btn btn-danger btn-xs">删除</button>
        <span className="pull-right">{this.state.time}</span></li>
    )
  }
}