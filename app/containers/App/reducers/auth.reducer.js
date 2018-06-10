import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '../constants/index.js';
import { fromJS } from 'immutable';


let user = JSON.parse(localStorage.getItem('user'));

const initialState = fromJS({
  loggingIn: false,
  user: user || false,
  loggedIn: user ? true : false
});

export function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
    
      return state
        .set("loggingIn", true)
        .set("user", action.user);    
    case LOGIN_SUCCESS:
      return state
        .set("loggedIn", true)
        .set("loggingIn", false)
        .set("user", action.user); 
    case LOGIN_FAILURE:
      return state
        .set("loggingIn", false)
        .set("user", false); 
    case LOGOUT:
      return state
        .set("loggedIn", false)
        .set("user", false); 
    default:
      return state
  }
}