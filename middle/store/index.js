import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers';
//thunk就是让你可以派发一个函数
import thunk from 'redux-thunk';
import logger from 'redux-logger';
let store = applyMiddleware(thunk,logger)(createStore)(reducer);
window.__store = store;
export default store;