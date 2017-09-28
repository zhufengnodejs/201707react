import * as types from '../action-types';
let initState = {list:[]};
let users = (state=initState,action)=>{
   switch (action.type){
     case types.FETCH_USERS_OVER:
       console.log(action);
       if(action.payload.error){
         return {list:[]};
       }else{
         return {list:action.payload};
       }
     default:
       return state;
   }
}
export default users;