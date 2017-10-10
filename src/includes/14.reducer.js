import {createStore} from 'redux';
let initState;
initState = [];
let reducer = (state=initState,action)=>{
  switch (action.type){
    case 'ADD_USER':
      return [...state,action.user];
    case 'DELETE_USER':
      state.splice(action.index,1);
      //切记，不要返回原来的状态对象
      return [...state];
    case 'UPDATE_USER':
      return state.map((item,index)=>{
        if(index == action.index){
          return {...item,...action.user};
        }
        return item;
      })
    default:
      return state;
  }
}
let store = createStore(reducer);
store.dispatch({
  type: 'ADD_USER',
  user: {
    username: 'Lucy',
    age: 12,
    gender: 'female'
  }
})
console.log(store.getState());
/* 通过 id 删除用户操作 */
store.dispatch({
  type: 'DELETE_USER',
  index: 0 // 删除特定下标用户
})
console.log(store.getState());
/* 修改用户操作 */
store.dispatch({
  type: 'UPDATE_USER',
  index: 0,
  user: {
    username: 'Tomy'
  }
})
console.log(store.getState());