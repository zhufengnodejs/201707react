/**
 * 1.还需要我们自己手工维护DOM状态 以数据的思想去思考
 * 2.数据改变之后还需要手工修改DOM
 */
class LikeButton {
  constructor(){
    //如何定义组件内部的私有状态
    this.state = {liked:false};
  }
  //传入一个模板字符串，返回一个DOM对象
  createDOMFromString(domStr){
    let div = document.createElement('div');
    div.innerHTML = domStr;// <div><button/></div>
    //返回第一个子元素,因为只可能有一个元素，所以这样写是可以的
    return div.children[0];//<button/>
  }
  //事件处理函数需要绑定this为组件实例
  handleClick(event){
    let likeText = document.querySelector('#like-text');
    this.state.liked  = !this.state.liked;
    likeText.innerHTML = this.state.liked?'取消':'点赞';
  }
  //render方法的返回值决定了此组件长什么样子
  render(){
    //传入一个模板字符串，返回一个DOM对象
    //DOM字符串永远有且只能有一个顶级元素
    this.ele = this.createDOMFromString(
      `
       <button id="like-button">
         <span id="like-text" style="color:red">点赞</span>
       </button>
      `);
    this.ele.addEventListener('click',this.handleClick.bind(this));
    return this.ele;
  }
}