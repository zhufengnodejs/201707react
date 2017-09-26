import React,{Component} from 'react';
export default class Message extends Component{
  constructor(){
    super();
    this.state = {time:'',filteredContent:''};
  }
  componentWillMount(){
    this.getTime();
    this.getContent();
    this.timer = setInterval(this.getTime,5000);
  }
  getContent = ()=>{
    let content = this.props.item.content;
    // I like `js` very much .  =>   `js` <code>js</code>
    let filteredContent = content.replace(/`([\s\S]+)`/,'<code>$1</code>');
    this.setState({filteredContent});
  }
  getTime = ()=>{
    let createAt = this.props.item.createAt;//创建时间
    let duration = (Date.now() - new Date(createAt))/1000;
    let time;
    if(duration>=60){
      time = `${Math.round(duration/60)}分钟以前`;
    }else{
      time = duration<1?'刚刚':`${Math.round(duration)}秒以前`;
    }
    this.setState({time});
  }
  render(){
    return (
      <li key={this.props.item.id} className="list-group-item">{this.props.item.author}:{this.state.filteredContent}
        <button onClick={()=>this.props.delMessage(this.props.item.id)} className="btn btn-danger btn-xs">删除</button>
        <span className="pull-right">{this.state.time}</span></li>
    )
  }
}