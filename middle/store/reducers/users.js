import * as types from '../action-types';
let initState = {list:[]};
let users = (state=initState,action)=>{
   switch (action.type){
     case types.FETCH_USERS_SUCCESS:
       return {list:action.list};
     default:
       return state;
   }
}
export default users;