import { ALERT_CLEAR, ALERT_SUCCESS, ALERT_ERROR } from '../constants/index.js';

const initialState = {
  type: "",
  message: "",
};

export function alert(state = initialState, action) {
  switch (action.type) {
    case ALERT_SUCCESS:
      return {...state,type: "success", message: action.message}
    case ALERT_ERROR:
      return {...state, type: "danger", message: action.message}
    case ALERT_CLEAR:
      return {...state, type: "", message: ""}
    default:
      return state
  }
}