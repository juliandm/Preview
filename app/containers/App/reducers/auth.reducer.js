import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '../constants/index.js';


let user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  loggingIn: false,
  user: user || false,
  loggedIn: user ? true : false
};

export function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state, loggingIn:true,user:action.user}  
    case LOGIN_SUCCESS:
      return {...state, loggingIn:false, loggedIn:true, user: action.user}
    case LOGIN_FAILURE:
      return {...state, loggingIn:false, user:false}
    case LOGOUT:
      return {...state, loggedIn:false, user:false}
    default:
      return state
  }
}