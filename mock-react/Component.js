/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
class Component{
  //传入一个模板字符串，返回一个DOM对象
  createDOMFromString(domStr){
    let div = document.createElement('div');
    div.innerHTML = domStr;// <div><button/></div>
    //返回第一个子元素,因为只可能有一个元素，所以这样写是可以的
    return div.children[0];//<button/>
  }
  setState(newState){
    //如果原来有，现在没有，则添加此属性，如果原来有，现在也有，覆盖此属性，如果原来有，现在没有，则纹丝不动
    this.state = Object.assign(this.state,newState);
    let oldEle = this.ele;//缓存老的DOM对象
    let newEle = this.render();//生成一个新的DOM对象
    oldEle.parentNode.replaceChild(newEle,oldEle);
  }
  render(){
    //传入一个模板字符串，返回一个DOM对象
    //DOM字符串永远有且只能有一个顶级元素
    this.ele = this.createDOMFromString(this.getDomStr());
    this.ele.addEventListener('click',this.handleClick.bind(this));
    return this.ele;
  }
}