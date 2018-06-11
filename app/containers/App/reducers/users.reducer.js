import { GETALL_FAILURE, GETALL_REQUEST, GETALL_SUCCESS } from '../constants/index.js';


const initialState = {
  loading: false,
  items: false,
  error: false
}
export function users(state = initialState, action) {
  switch (action.type) {
    case GETALL_REQUEST:
      return {...state, loading: true, items: false}
    case GETALL_SUCCESS:
      return {...state, loading: false, items: action.users}
    case GETALL_FAILURE:
      return {...state, loading: false, error: action.error}
    default:
      return state
  }
}