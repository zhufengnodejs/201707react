
/**
 * 1.我规定一个专门的修改数据的方法，如果想修改数据只能走这一个方法。
 * dispatch 派发 派遣
 * action 代表一个命令对象，动作对象，它就是一个普通JS对象,起码需要一个字段，type=命令的类型,其它字段随意
 */
const CHANGE_FONT_SIZE = 'CHANGE_FONT_SIZE'

function createStore(){
  let appState = {
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
  let getState = ()=>JSON.parse(JSON.stringify(appState));
  let dispatch = (action)=>{
    switch(action.type){
      case CHANGE_FONT_SIZE:
        appState.fontSize = action.fontSize;
      default:
        return;
    }
  }
  return {getState,dispatch}
}
let store = createStore();
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
store.dispatch({type:CHANGE_FONT_SIZE,fontSize:'50px'})
renderApp();