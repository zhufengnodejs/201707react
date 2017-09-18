class LikeButton {
  //传入一个模板字符串，返回一个DOM对象
  createDOMFromString(domStr){
    let div = document.createElement('div');
    div.innerHTML = domStr;// <div><button/></div>
    //返回第一个子元素,因为只可能有一个元素，所以这样写是可以的
    return div.children[0];//<button/>
  }
  handleClick(){
     alert(1);
  }
  //render方法的返回值决定了此组件长什么样子
  render(){
    //传入一个模板字符串，返回一个DOM对象
    //DOM字符串永远有且只能有一个顶级元素
    this.ele = this.createDOMFromString(
      `
       <button id="like-button">
         <span id="like-text">点赞</span>
       </button>
      `);
    this.ele.addEventListener('click',this.handleClick);
    return this.ele;
  }
}