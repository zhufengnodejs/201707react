import React, {Component} from 'react';
export default class UserAdd extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    let username = this.refs.username.value;//用户名
    let password = this.refs.password.value;//密码
    let user = {username,password,id:Date.now()};
    let users = JSON.parse(localStorage.getItem('USERS')||"[]");
    users.push(user);
    localStorage.setItem('USERS',JSON.stringify(users));
    this.props.history.push('/user/list');
  }

  render() {
    /**
     * history 用来前后跳转页面的
     * location.pathname存放当前路径
     *          .state
     * match 代表匹配的结果
     */
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className="control-label">用户名</label>
          <input ref="username" required type="text" className="form-control" placeholder="用户名"/>
        </div>
        <div className="form-group">
          <label required htmlFor="password" className="control-label">密码</label>
          <input ref="password" type="text" className="form-control" placeholder="密码"/>
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary"/>
        </div>
      </form>
    )
  }
}