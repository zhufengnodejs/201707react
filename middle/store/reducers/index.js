import {combineReducers} from 'redux';
import users from './users';
import userStatus from './userStatus';
//reducer是合并后的reducer,本身并没有什么实际的功能。只是负责组装数据而矣。当收到新的action之后，需要调用它里面的子reducer计算新的状态
/**
 * {
    users:{list:[]},
     userStatus:{status: ''}:
  }
 {
    users:users(老的users状态,action),
     userStatus:userStatus(老的users状态,action):
  }
 *
 */
let reducer = combineReducers({
  users,
  userStatus
});
export default reducer;
