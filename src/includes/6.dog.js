/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import React from 'react';
import ReactDOM from 'react-dom';
class Dog extends React.Component {
  constructor () {
    super()
    this.state = {isRunning :false,isBarking:false};
  }

  bark () {
  }

  run () {
  }
  handleClick = ()=>{
    this.bark();
    this.run();
    this.setState({isRunning :true,isBarking:true});
    setTimeout(()=>{
      this.setState({isRunning :false,isBarking:false});
    },Math.random()*30+2000);
  }
  render () {
    return (<div onClick={this.handleClick}>
      <p>{this.state.isRunning?'疯狂的奔跑中':'静静的卧着'}</p>
      <p>{this.state.isBarking?'狂吠中':'静静的'}</p>
    </div>)
  }
}
ReactDOM.render(<Dog/>,document.querySelector('#root'));
