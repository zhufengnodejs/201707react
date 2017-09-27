import React,{Component} from 'react';
import MessageForm from "./MessageForm";
import MessageList from "./MessageList";
import './index.css';
import {connect} from 'react-redux';
import * as types from '../store/action-types';
import actions from '../store/actions';
//UI组件  木偶组件 傻瓜组件
//容器组件 聪明组件
class MessageApp extends Component{
  constructor(){
    super();
  }
  addMessage = (message)=>{
    message.id = Date.now();
    message.createAt = new Date();
    this.props.addMessage(message);
  }
  //定义一个删除消息的方法
  delMessage = (id)=>{
    this.props.delMessage(id);
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
                <MessageList delMessage={this.delMessage} messages={this.props.messages}/>
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
let mapStateToProps = state => state;
//action creator action的创建者
/*let mapDispatchToProps = dispatch=>({
  addMessage:(message)=>dispatch({type:types.ADD_MESSAGE,message}),
  delMessage:(id)=>dispatch({type:types.DEL_MESSAGE,id})
})*/
export default connect(mapStateToProps,actions)(MessageApp);