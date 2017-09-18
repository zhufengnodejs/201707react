/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
class Circle extends Component{
  //props属性，是从外界传入的，在组件内部可以使用,但不能修改
  constructor(props){//{from:'10px',to:'1000px'}
    super();
    this.props = props;
    this.state = {
      width:props.from,
      height:props.from
    }
  }
  handleClick(){
    this.setState({
      width:this.props.to,
      height:this.props.to
    });
  }
  getDomStr(){
    return (
      `
      <div style="width:${this.state.width};height:${this.state.height};border-radius: 50%;background-color: green"></div>
      `
    )
  }
}