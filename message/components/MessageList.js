import React, {Component} from 'react';
import Message from "./Message";
export default class MessageList extends Component {
  render() {
    return (
      <ul className="list-group">
        {
          this.props.messages.map((item, index) => (
             <Message item={item} delMessage={this.props.delMessage}/>
          ))
        }
      </ul>
    )
  }
}