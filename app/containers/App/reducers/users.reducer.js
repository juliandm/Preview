import { GETALL_FAILURE, GETALL_REQUEST, GETALL_SUCCESS } from '../constants/index.js';
import { fromJS } from 'immutable';


const initialState = fromJS({
  loading: false,
  items: false,
  error: false
})
export function users(state = initialState, action) {
  switch (action.type) {
    case GETALL_REQUEST:
      return state
        .set("loading",true)
        .set("items",false)
    case GETALL_SUCCESS:
      return state
        .set("loading",false)
        .set("items",action.users)
    case GETALL_FAILURE:
      return state
        .set("loading",false)
        .set("error",action.error)
    default:
      return state
  }
}