import React,{Component} from 'react';
export default class UserAdd extends Component{
    render(){
        return (
            <form>
              <div className="form-group">
                <label htmlFor="username" className="control-label">用户名</label>
                <input type="text" className="form-control" placeholder="用户名"/>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="control-label">密码</label>
                <input type="text" className="form-control" placeholder="密码"/>
              </div>
              <div className="form-group">
                <input type="submit" className="btn btn-primary"/>
              </div>
            </form>
        )
    }
}