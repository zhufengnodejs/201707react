import * as types from './action-types';
import $ from 'jquery';
export default {
  /*fetchUsers(){
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
  }*/
  /*fetchUsers(){
    //派发一个函数，我们希望这个函数会得到执行
    return (dispatch)=>{
      //1.派发一个action
      dispatch({type:types.FETCH_USERS});
      //redux-promise拦截promise类型的action,如果发现是promise的话，会等待此promise或者成功或者失败，如果成功后其实会再次派发action
      dispatch(
        fetch('http://localhost:3000/users')
          .then(res=>res.json())
          .then(list=>({type:types.FETCH_USERS_SUCCESS,list}))
      );
    }
  }*/
  fetchUsers(){
    //派发一个函数，我们希望这个函数会得到执行
    return (dispatch)=>{
      //1.派发一个action
      dispatch({type:types.FETCH_USERS});
      //redux-promise拦截promise类型的action,如果发现是promise的话，会等待此promise或者成功或者失败，如果成功后其实会再次派发action
      dispatch(
        {
          type:types.FETCH_USERS_OVER,
          payload:fetch('http://localhost:3000/users')
            .then(res=>res.json())
        }
      );
    }
  }
}