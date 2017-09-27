import {createStore} from 'redux';
import * as types from './action-types';
//初始状态对象
let initState = {number:0};

let reducer = (state=initState,action)=>{
  //判断组件发给仓库的动作类型
  switch(action.type){
    case types.ADD://+1
      return {number:state.number+1};
    case types.MINUS://+1
      return {number:state.number-1};
    default://如果发送的action不能识别，保持不变
      return state;
  }
}
let store = createStore(reducer);
window.__store = store;
export default store;