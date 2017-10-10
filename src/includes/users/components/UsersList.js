import React,{Component} from 'react';
import {connect} from 'react-redux';
import User from "./User";
class UsersList extends Component {
  addUser = () => {
    let username = this.refs.username.value;
    let age = this.refs.age.value;
    let checked = this.refs.female.checked;
    let gender = 'male';
    if(checked){
      gender = 'female';
    }
    this.props.addUser({username,age,gender})
  }

  render() {
    return (
      <div>
        <div className='add-user'>
          <div>Username: <input ref="username" type='text'/></div>
          <div>Age: <input type='number'/></div>
          <div>Gender:
            <label>Male: <input ref="male" type='radio' name='gender' value='male'/></label>
            <label>Female: <input ref="female" type='radio' name='gender' value='female'/></label>
          </div>
          <button onClick={this.addUser}>增加</button>
        </div>
        <div className='users-list'>
          {
            this.props.users.map((user, index) => (
              <User
                deleteUser={() => this.props.deleteUser(index)}
                key={index}
                user={user}/>
            ))
          }
        </div>
      </div>
    )
  }
}
//链接的是当前的UsersList组件和redux中的仓库
let mapStateToProps = state => ({users: state});
let mapDispatchToProps = dispatch => ({
  addUser(user){
    dispatch({type: 'ADD_USER', user});
  },
  deleteUser(index){
    dispatch({type: 'DELETE_USER', index});
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);