import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers';
//thunk就是让你可以派发一个函数
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise';
let store = applyMiddleware(thunk,promise,logger)(createStore)(reducer);
window.__store = store;
export default store;