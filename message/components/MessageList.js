import React,{Component} from 'react';
export default class MessageList extends Component{
  render(){
    return (
      <ul className="list-group">
        {
          this.props.messages.map((item,index)=>(
            <li key={item.id} className="list-group-item">{item.author}:{item.content} <span className="pull-right">{item.createAt.toLocaleString()}</span></li>
          ))
        }
      </ul>
    )
  }
}