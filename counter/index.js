import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "./components/Counter";
let killMySelf = ()=>{
  ReactDOM.unmountComponentAtNode(document.querySelector('#root'));
}
ReactDOM.render(<div>
  <Counter/>
  <Counter/>
  <button onClick={killMySelf}>自杀</button>
</div>,document.querySelector('#root'));