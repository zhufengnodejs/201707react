/**
 * 状态树 {messages:[]}
 * 动作类型 增加留言 删除留言
 **/
import * as types from '../action-types';
let initState = {messages: []};
let message = (state = initState, action) => {
  switch (action.type) {
    // dispatch({type:ADD_MESSAGE,message:{id,createAt,author,content}});
    case types.ADD_MESSAGE:
      return {messages: [...state.messages, action.message]};
    //dispatch({type:DEL_MESSAGE,id:1});
    case types.DEL_MESSAGE:
      return {messages: state.messages.filter(item => item.id != action.id)};
    default:
      return state;
  }
}
export default message;