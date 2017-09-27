import React, {Component} from 'react';
import store from '../store';
import * as types from '../store/action-types';
export default class Counter extends Component {
  componentWillMount(){
    //this.unsubscribe是一个函数，调用它的话可以取消订阅
    this.unsubscribe = store.subscribe(()=>{
      this.setState({});
    })
  }
  componentWillUnmount(){
    this.unsubscribe();
  }

  render() {
    return (
      <div style={{border:'1px solid red',marginTop:'10px'}}>
        <p>{store.getState().number}</p>
        <button onClick={()=>store.dispatch({type:types.ADD})}>+</button>
        <button  onClick={()=>store.dispatch({type:types.MINUS})}>-</button>

      </div>
    )
  }
}