import {createStore} from 'redux';
import reducer from './reducers';
let store = createStore(reducer);
window.__store = store;
export default store;