import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class Head extends Component{
  render(){
    return <div>头</div>
  }
}
class Shang extends Component{
  render(){
    return <div>上肢</div>
  }
}
class Xia extends Component{
  render(){
    return <div>下肢</div>
  }
}
class Person extends Component{
  render(){
    return (
      <div>
        <Head/>
        <Shang/>
        <Xia/>
      </div>
    )
  }
}
ReactDOM.render(<Person/>,document.querySelector('#root'));

