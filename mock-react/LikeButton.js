/**
 * 1.还需要我们自己手工维护DOM状态 以数据的思想去思考
 * 2.数据改变之后还需要手工修改DOM
 */
class LikeButton extends Component{
  constructor(){
    super();
    //如何定义组件内部的私有状态
    this.state = {liked:false};
  }
  //事件处理函数需要绑定this为组件实例
  handleClick(event){
    //修改状态。
   this.setState({liked:!this.state.liked})
  }
  //render方法的返回值决定了此组件长什么样子
  //因为DOM字符串是由state决定的，所以只需要在修改了state之后重新render一下即可
  getDomStr(){
    return `
       <button id="like-button">
         <span id="like-text" style="color:red">${this.state.liked?'取消':'点赞'}</span>
       </button>
      `;
  }

}