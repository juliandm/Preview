import { GETALL_FAILURE, GETALL_REQUEST, GETALL_SUCCESS } from '../constants/index.js';

export function users(state = {}, action) {
  switch (action.type) {
    case GETALL_REQUEST:
      return {
        loading: true
      };
    case GETALL_SUCCESS:
      return {
        items: action.users
      };
    case GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}