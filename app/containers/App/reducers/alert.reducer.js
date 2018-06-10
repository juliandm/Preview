import { ALERT_CLEAR, ALERT_SUCCESS, ALERT_ERROR } from '../constants/index.js';
import { fromJS } from 'immutable';

const initialState = fromJS({
  type: "",
  message: "",
});

export function alert(state = initialState, action) {
  switch (action.type) {
    case ALERT_SUCCESS:
      return state
        .set("type", "alert-success")
        .set("message", action.message);    
    case ALERT_ERROR:
      return state
        .set("type", "alert-danger")
        .set("message", action.message);    
    case ALERT_CLEAR:
      return state
        .set("type", "")
        .set("message", "");    
    default:
      return state
  }
}