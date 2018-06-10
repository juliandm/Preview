import { REGISTER_REQUEST, REGISTER_FAILURE, REGISTER_SUCCESS } from '../constants/index.js';
import { fromJS } from 'immutable';

const initialState = fromJS({
  registering: false,
  error: false
});

export function register(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
    
      return state
        .set("registering", true)
    case REGISTER_SUCCESS:
      return state
        .set("registering", false)
    case REGISTER_FAILURE:
      return state
        .set("registering", false)
        .set("error", action.error); 
    default:
      return state
  }
}