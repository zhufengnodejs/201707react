/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 1.事件绑定的属性名是驼峰命名法，而非全小写 onClick
 * 2.
 */
class LikeButton extends React.Component {
  constructor() {
    super();//就是指的是父类的构造函数
    this.state = {liked: false};
  }
  //这是ES7的一个方法
  handleClick = (event)=>{
    //event事件对象
    event.preventDefault();
    // event.target
    //Cannot read property 'setState' of null
    console.log(this);
    //一旦调用了setState,就会重新渲染页面，而且由于domdiff算法，只会更新变化的部分
    //如果想修改状态，造成不能直接修改,这写直接改的话，其实可以修改状态的，但是不能重新刷新页面
    //this.state.liked = !this.state.liked;
    this.setState({liked:!this.state.liked});
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        按钮:
        <span>{this.state.liked ? '取消' : '点赞'}</span>
      </button>
    )
  }
}
ReactDOM.render(<LikeButton/>,document.querySelector('#root'));