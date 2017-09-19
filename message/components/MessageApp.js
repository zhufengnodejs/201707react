import React,{Component} from 'react';
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";
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
                <MessageList messages={this.state.messages}/>
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