import React, {Component} from 'react';
export default class UserDetail extends Component {
  render() {
    //let user = this.props.location.state.user;
    let users = JSON.parse(localStorage.getItem('USERS')||"[]");
    let id = this.props.match.params.id;
    let user = users.find(item=>item.id == id);
    return (
      <table className="table table-bordered">
        <thead>
        <tr>
          <th>ID</th>
          <th>用户名</th>
          <th>密码</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>{user.id}</th>
          <th>{user.username}</th>
          <th>{user.password}</th>
        </tr>
        </tbody>
      </table>
    )
  }
}