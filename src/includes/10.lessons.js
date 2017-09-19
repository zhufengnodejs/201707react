import React,{Component} from 'react';
import ReactDOM from 'react-dom';
const lessons = [
  { title: 'Lesson 1: title', description: 'Lesson 1: description' },
  { title: 'Lesson 2: title', description: 'Lesson 2: description' },
  { title: 'Lesson 3: title', description: 'Lesson 3: description' },
  { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]
class Lesson extends Component {
  handleClick = ()=>{
    //console.log(`${this.props.item.index} - ${this.props.item.title}`);
  }
  render(){
    return (
      <div onClick={this.handleClick}>
        <h1>{this.props.item.title}</h1>
        <p>{this.props.item.description}</p>
      </div>
    )
  }
}
class LessonsList extends Component {
  render(){
    return (
      <div>
        {
          this.props.lessons.map((item,index)=>(
            <Lesson item={item} key={index} index={index}/>
          ))
        }
      </div>
    )
  }
}

ReactDOM.render(<LessonsList lessons={lessons}/>,document.querySelector('#root'));