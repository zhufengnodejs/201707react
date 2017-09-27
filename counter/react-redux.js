import React from 'react';
class Provider extends React.Component {
 static childContextTypes = {
   store:React.PropTypes.object
 }
 getChildContext(){
   return {
     store:this.props.store
   }
 }
 render(){
   return this.props.children;
 }
}
export {Provider}