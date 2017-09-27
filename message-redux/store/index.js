import {createStore} from 'redux';
import message from './reducers/message';
let store = createStore(message);
window.__store = store;
export default store;