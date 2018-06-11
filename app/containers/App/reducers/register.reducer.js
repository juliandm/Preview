import { REGISTER_REQUEST, REGISTER_FAILURE, REGISTER_SUCCESS } from '../constants/index.js';

const initialState = {
  registering: false,
  error: false
};

export function register(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {...state, registering:true}
    case REGISTER_SUCCESS:
      return {...state, registering:false}
    case REGISTER_FAILURE:
      return {...state, registering: false, error: action.error}
    default:
      return state
  }
}