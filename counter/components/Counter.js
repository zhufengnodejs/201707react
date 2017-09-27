import React, {Component} from 'react';
import store from '../store';
import * as types from '../store/action-types';
import {connect} from 'react-redux';
//输入就是读取store中的状态 输出就是把组件内的事件发射出去
class Counter extends Component {
  render(){
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.add}>+</button>
        <button onClick={this.props.minus}>-</button>
      </div>
    )
  }
}
//state是仓库中的状态对象
let mapStateToProps = state=>({...state});//{number:0}
//dispatch是仓库中的dispatch方法
let mapDispatchToProps = (dispatch)=>({
  add:()=>dispatch({type:types.ADD}),
  minus:()=>dispatch({type:types.MINUS})
})
export default connect(mapStateToProps,mapDispatchToProps)(Counter);