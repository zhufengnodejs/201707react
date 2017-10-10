import React from 'react';
import {Route, Redirect} from 'react-router-dom';
//函数组件
//把属性对象中的Component属性取出来赋给comp,把其它属性取出来赋给other对象
//再把other对象的全部属性取出来赋给Route
// component=组件
// render函数 当路由匹配的时候，渲染的是render方法的返回值
export default function ({component: _comp, ...rest}) {
  return <Route {...rest} render={
    props => localStorage.getItem('login') ? <_comp/> : <Redirect to="/login" state={{from: props.location.pathname}}/>
  }/>
  return null;
}