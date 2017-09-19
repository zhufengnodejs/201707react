import React,{Component} from 'react';
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";
import './index.css'
export default class MessageApp extends Component{
  constructor(){
    super();
    this.state = {messages:[]};
  }
  addMessage = (message)=>{
    message.id = Date.now();
    message.createAt = new Date();
    this.setState({
      messages:[...this.state.messages,message]
    });
  }
  //定义一个删除消息的方法
  delMessage = (id)=>{
    let messages = this.state.messages.filter(item=>item.id != id);
    this.setState({messages})
  }
  render(){
    return (
      <div className="container" style={{marginTop:'20px'}}>
        <div className="row" >
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="text-center">欢迎光临珠峰留言板</h4>
              </div>
              <div className="panel-body">
                <MessageList delMessage={this.delMessage} messages={this.state.messages}/>
              </div>
              <div className="panel-footer">
                <MessageForm addMessage={this.addMessage}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}