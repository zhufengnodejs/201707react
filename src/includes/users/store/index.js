import {createStore} from 'redux';
let initState = [];
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
export default store;