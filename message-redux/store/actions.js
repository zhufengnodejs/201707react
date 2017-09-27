import * as types from '../store/action-types';
export default  {
  addMessage(message){
     return {type:types.ADD_MESSAGE,message};
  },
  delMessage(id){
    return {type:types.DEL_MESSAGE,id};
  }
}