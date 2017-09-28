import React from 'react';
import ReactDOM from 'react-dom';
import UserApp from "./components/UserApp";
import store from './store';
import {Provider} from 'react-redux';
ReactDOM.render(<Provider store={store}><UserApp/></Provider>, document.querySelector('#root'));