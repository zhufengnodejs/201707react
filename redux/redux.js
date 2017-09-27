function createStore(reducer){
  let state;//内部的状态
  let getState = ()=>state;
  let listeners = [];
  //订阅
  let subscribe = listener=>{
    listeners.push(listener);//把所有的监听函数全部保存起来
  }
  //派发action
  let dispatch = (action)=>{
    state = reducer(state,action);
    //当状态发生改变的时候，依次调用监听函数
    listeners.forEach(listener=>{
      listener();
    });
  }
  //先调一下是为了获取初始状态
  dispatch({});
  return {getState,dispatch,subscribe}
}
export {createStore};