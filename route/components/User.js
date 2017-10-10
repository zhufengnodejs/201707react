import React, {Component} from 'react';
import {Link, Route,NavLink} from 'react-router-dom';
import UserList from "./UserList";
import UserAdd from "./UserAdd";
import UserDetail from "./UserDetail";
export default class User extends Component {
  render() {
    let activeStyle = {color:'red'};
    return (
      <div className="row">
        <div className="col-sm-3">
          <ul className="nav nav-stacked" style={{textAlign:'center'}}>
            <li><NavLink activeStyle={activeStyle} to="/user/list">用户列表</NavLink></li>
            <li><NavLink activeStyle={activeStyle} to="/user/add">添加用户</NavLink></li>
          </ul>
        </div>
        <div className="col-sm-9">
          <Route path="/user/list" component={UserList}/>
          <Route path="/user/add" component={UserAdd}/>
          <Route path="/user/detail/:id" component={UserDetail}/>
        </div>
      </div>
    )
  }
}