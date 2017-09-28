//日志中间件
import {applyMiddleware,createStore} from 'redux';
import logger from 'redux-logger';
const ADD = 'ADD';
let counter = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
}
//let store = createStore(counter,applyMiddleware(logger));
// 先应用中间件，再传入createStore方法，再传入reducer
let store = applyMiddleware(logger)(createStore)(counter);
/*let next = store.dispatch;
store.dispatch = action =>{
  console.log('老状态:'+store.getState());
  next(action);
  console.log('新状态:'+store.getState());
}*/
store.dispatch({type:ADD});

