import * as types from '../action-types';
let initState = {status: ''};
let userStatus = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH_USERS://开始加载的时候状态改为正在加载中
      return {status: '正在加载中'};
    case types.FETCH_USERS_OVER://加载完成之后状态改为空
      if(action.payload.error){
        console.log(action.payload);
        return {status: action.payload.error};
      }else{
        return {status: '加载成功'};
      }
    default:
      return state;
  }
}
export default userStatus;