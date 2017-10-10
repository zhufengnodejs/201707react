import React,{Component} from 'react';
export default class User extends Component {
  render() {
    const {user} = this.props
    return (
      <div>
        <div>Name: {user.username}</div>
        <div>Age: {user.age}</div>
        <div>Gender: {user.gender}</div>
        <button onClick={this.props.deleteUser}>删除</button>
      </div>
    )
  }
}