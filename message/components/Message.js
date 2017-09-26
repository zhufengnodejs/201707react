import React,{Component} from 'react';
export default class Message extends Component{
  render(){
    return (
      <li key={this.props.item.id} className="list-group-item">{this.props.item.author}:{this.props.item.content}
        <button onClick={()=>this.props.delMessage(this.props.item.id)} className="btn btn-danger btn-xs">删除</button>
        <span className="pull-right">{this.props.item.createAt.toLocaleString()}</span></li>
    )
  }
}