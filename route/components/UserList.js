import React, {Component} from 'react';
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
          this.state.users.map((item,index)=>(
            <li className="list-group-item">
              {item.username}
            </li>
          ))
        }

      </ul>
    )
  }
}