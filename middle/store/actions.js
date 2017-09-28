import * as types from './action-types';
import $ from 'jquery';
export default {
  fetchUsers(){
    //派发一个函数，我们希望这个函数会得到执行
    return (dispatch)=>{
       //1.派发一个action
      dispatch({type:types.FETCH_USERS});
      $.ajax({
        url:'http://localhost:3000/users',
        type:'GET',
        dataType:'json',
        success(list){//[]
          dispatch({type:types.FETCH_USERS_SUCCESS,list});
        }
      });
    }
  }
}