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
//连接把组件和仓库(store)连接在一起
//mapStateToProps 把仓库里的状态对象映射为组件属性对象
//mapDispatchToProps 把仓库里的dispatch方法映射为组件的属性对象
let connect = (mapStateToProps,mapDispatchToProps)=>(__component)=>{
   class Proxy extends React.Component{
     constructor(){
       super();
       this.state = {};
     }
     mapState = ()=>{
       this.setState(mapStateToProps(this.context.store.getState()));
     }
     componentDidMount(){
      this.mapState();
      this.unsubscribe = this.context.store.subscribe(()=>{
        this.mapState();
      });
     }
     componentWillUnmount(){
       this.unsubscribe();
     }
     static contextTypes= {
       store:React.PropTypes.object
     }

     render(){
       return <__component {...this.state} {...mapDispatchToProps(this.context.store.dispatch)}/>
     }
   }
   return Proxy;
}
export {Provider,connect}