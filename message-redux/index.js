import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import {render} from 'react-dom';
import MessageApp from "./components/MessageApp";
import {Provider} from 'react-redux';
import store from './store';
render(<Provider store={store}>
  <MessageApp/>
</Provider>, document.querySelector('#root'));