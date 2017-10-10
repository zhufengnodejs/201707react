import React, {Component} from 'react';
//Router 容器，它是用来包裹路由规则的
//Route 是路由规则
import {HashRouter as Router, Route} from 'react-router-dom';
import Header from "../../src/includes/context/Header";
import Home from "./Home";
import User from "./User";
import Profile from "./Profile";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><a href="#/">首页</a></li>
            <li><a href="#/user">用户管理</a></li>
            <li><a href="#/profile">个人中心</a></li>
          </ul>
          <div>
            <Route path="/" component={Home}/>
            <Route path="/user" component={User}/>
            <Route path="/profile" component={Profile}/>
          </div>
        </div>
      </Router>
    )
  }
}