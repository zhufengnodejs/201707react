import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class UserList extends Component {
  constructor() {
    super();
    this.state = {users: []};
  }

  componentWillMount() {
    let users = JSON.parse(localStorage.getItem('USERS') || "[]");
    this.setState({users});
  }

  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          用户名
        </li>
        {
          this.state.users.map((user,index)=>(
            <li key={index} className="list-group-item">
             {/* <Link to={{
                pathname: '/user/detail',
                state: {user}
              }}>{user.username}</Link>*/}
              <Link to={`/user/detail/${user.id}`}>{user.username}</Link>
            </li>
          ))
        }

      </ul>
    )
  }
}