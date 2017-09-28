import React, {Component} from 'react';
import {connect} from 'react-redux';
import actions from '../store/actions';
class UserApp extends Component {
  componentWillMount(){
    this.props.fetchUsers();
  }
  render() {
    return (
      <div>
        <h3>{this.props.userStatus.status}</h3>
        <ul>
          {
            this.props.users.list.map((item,index)=>{
              <li key={item.id}>{item.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
export default connect(state => state,actions)(UserApp);