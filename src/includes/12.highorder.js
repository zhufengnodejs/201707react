/**
 * 高阶组件其实是一个函数,传进去一个组件，返回一新的组件
 * 高阶函数
 **/
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
function local(Comp,key){ //
   class Proxy extends Component{
     constructor(){
       super();
       this.state = {data:''}
     }
     componentWillMount(){
      let data =  localStorage.getItem(key);
      this.setState({data});
     }
     handler = (event)=>{
       let data = event.target.value;
       localStorage.setItem(key,data);
     }
     render(){
       return <Comp handler={this.handler} data={this.state.data}/>
     }
   }
   return Proxy;
}
//value赋值之后此组件称为受控组件
//defaultValue赋值后还可以随便改，不受控制
function Input(props){
  return <input defaultValue={props.data} onBlur={props.handler}/>;//username
}
function Textarea(props){
  return <textarea defaultValue={props.data}  onBlur={props.handler}></textarea>;//content
}

let LocalInput =  local(Input,'username');
let LocalTextarea =  local(Textarea,'content');
class Form extends Component{
  render(){
    return (
      <form>
        用户名:<LocalInput/>
        内容:<LocalTextarea/>
      </form>
    )
  }
}
ReactDOM.render(<Form/>,document.querySelector('#root'));