/**
 * 属性
 * 1. 是一般是由父组件传给子组件
 * 2. 子组件会有一人props属性对象，
 * 3. Cannot assign to read only property 'text' of object
   4. 子组件可以读取父组件传递的属性，但是不能直接改
 * 1.如何传递属性
 * 2.属性和状态的区别和联系
 * 3.单向数据流
 *
 * 1. 属性和状态都可以作为组件数据源
 * 2. 属性是外界传入的，内部不能改。状态是内部初始化的，可以修改。
 * 3. 状态改变后要会得新刷新视图
 * 4. 如果在子组件里要改变父组件的状态，需要在父组件里定义一个改变父组件状态的方法，然后作为属性传递给子组件，子组件在特定的时刻调用即可。
 * 5. 可以在组件内定义默认属性对象，这样的话在父组件没有传递属性的时候就可以使用默认对象。
 * 6. 在组件内部可以定义propTypes,规定父组件使用子组件的时候需要传递参数的名称和类型。
 *
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
class LikeButton extends Component{
  //组件的默认属性对象 静态的-这个属性是属于类的
  static defaultProps = {
    text:'默认状态'
  }
  //类似于一个接口文档，用来告诉父组件应该传入什么参数，什么类型
  static propTypes = {
    text:PropTypes.string,
    //isRequired必传，如果不传会报错，如果传了但类型不对也会报错
    age:PropTypes.number.isRequired
  }
  render(){
    /**
     * onClick等于的是一个函数定义，而非一个函数执行结果
     * 如果加上小括号，则会直接执行，再点击就没效果了
     */
    return (
      <button onClick={this.props.changeText}>
        {this.props.text}
      </button>
    )
  }
}
class Index extends Component{
  constructor(){
    super();
    this.state = {text:"点赞"};//初始化状态对象
  }
  //对状态字段取反
  changeText = ()=>{
    this.setState({
      text:this.state.text=='点赞'?'取消':'点赞'
    });
  }
  render(){
    return (
      <div>
        <LikeButton age={100} text={this.state.text}  changeText={this.changeText}/>
      </div>
    )
  }
}
ReactDOM.render(<Index/>,document.querySelector('#root'));