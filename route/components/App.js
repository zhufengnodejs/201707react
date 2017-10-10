import React, {Component} from 'react';
//Router 容器，它是用来包裹路由规则的
//Route 是路由规则
//BrowserRouter as Router, HTML5  history api
import {HashRouter as Router, Route,Link,NavLink} from 'react-router-dom';
import Home from "./Home";
import User from "./User";
import Profile from "./Profile";
export default class App extends Component {
  render() {
    let activeStyle = {color:'red'};
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a href="#/" className="navbar-brand">用户管理</a>
                </div>
                <ul className="nav navbar-nav">
                  <li><NavLink exact activeStyle={activeStyle} to="/">首页</NavLink></li>
                  <li><NavLink activeStyle={activeStyle} to="/user">用户管理</NavLink></li>
                  <li><NavLink activeStyle={activeStyle} to="/profile">个人中心</NavLink></li>
                </ul>
              </div>
          </nav>
          <div className="row">
            <div className="col-sm-12">
              <Route exact path="/" component={Home}/>
              <Route path="/user" component={User}/>
              <Route path="/profile" component={Profile}/>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}