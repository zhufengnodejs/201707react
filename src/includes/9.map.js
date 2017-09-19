import React,{Component} from 'react';
import ReactDOM from 'react-dom';
let users = [
  {id:1,name:'何静',age:8},
  {id:2,name:'周静',age:9},
  {id:3,name:'何静',age:10}
]
class User extends Component{
  render(){
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.age}</td>
      </tr>
    )
  }
}
//状态越少越好
class UserList extends Component{
  render(){
    return (
      <table style={{border:'1px solid black'}}>
        <thead>
         <tr>
           <th>ID</th>
           <th>名称</th>
           <th>年龄</th>
         </tr>
        </thead>
        <tbody>
        {
          this.props.users.map((item,index)=>
              <User {...item} key={index}/>
          )
        }
        </tbody>
      </table>
    )
  }
}
ReactDOM.render(<UserList users={users}/>,document.querySelector('#root'));