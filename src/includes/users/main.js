import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import UsersList from './components/UsersList';
ReactDOM.render(
  <Provider store={store}>
    <UsersList/>
  </Provider>,document.querySelector('#root')
);