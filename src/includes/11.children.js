/**
 * 珠峰培训 http://www.zhufengpeixun.cn
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class BlackBorderContainer extends Component {
  render() {
    console.log(this.props.children);
    return (
      <div>
        {React.Children.map(this.props.children,(item,index)=>(
          <div key={index} style={{border:'1px solid #000'}}>{item}</div>
        ))}
      </div>
    )
  }
}

ReactDOM.render(
  <BlackBorderContainer>
    <div className='name'>My Name：Lucy</div>
    <p className='age'>
      My Age：<span>12</span>
    </p>
  </BlackBorderContainer>, document.querySelector('#root'));
