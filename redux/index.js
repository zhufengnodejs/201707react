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
function renderTitle(title){
  let titleEle = document.querySelector('#title');
  titleEle.innerHTML = title.text;
  titleEle.style.color = title.color;
}
function renderContent(content){

}
function renderApp(appState){
  renderTitle(appState.title);
  renderContent(appState.content);
}
renderApp(appState);