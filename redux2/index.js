import {createStore} from './redux';

const CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE'
/**
 * 处理函数
 * 1. 指定初始状态
 * 2. 指定action如何修改状态
 */
let initState = {
  fontSize:'16px',
  title:{
    text:'标题',
    color:'red'
  },
  content:{
    text:'内容',
    color:'green'
  }
}
//传入老状态，和动作，返回新状态
let reducer = (state=initState,action)=>{
  switch(action.type){
    case CHANGE_FONT_SIZE:
      //永远要返回一个新对象
      return {...state,fontSize:action.fontSize};
    default:
      return state;
  }
}

let store = createStore(reducer);
function renderTitle(){
  let titleEle = document.querySelector('#title');
  titleEle.innerHTML = store.getState().title.text;
  titleEle.style.color = store.getState().title.color;
  titleEle.style.fontSize = store.getState().fontSize;
}
function renderContent(){
  let contentEle = document.querySelector('#content');
  contentEle.innerHTML = store.getState().content.text;
  contentEle.style.color = store.getState().content.color;
  contentEle.style.fontSize = store.getState().fontSize;
}
function renderApp(){
  renderTitle();
  renderContent();
}
renderApp();
store.subscribe(renderApp);
setTimeout(function(){
  store.dispatch({type:CHANGE_FONT_SIZE,fontSize:'50px'});
},3000);

