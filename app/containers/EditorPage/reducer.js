/*
 *
 * EditorPage reducer
 *
 */

import {
  LOAD,
  UPDATE,
  SAVE,
  CHECK_TOPIC,
  CHECK_TOPIC_RESULT,
  LOAD_SUCCESS,
  LOAD_ERROR,
  CHANGE_TOPIC
} from './constants';

const initialState = {
  topicName: "",
  is_valid: false,
  alternatives: false,
  checking:false,
  loading: false,
  error: false,

  attributes: false,
  structure: false,
  stats: false,
  text: false,
  other: false
};

function editorPageReducer(state = initialState, action) {
  switch (action.type) {

    case CHANGE_TOPIC:
      return {
        ...state,
        topicName: action.name
      }
    case CHECK_TOPIC:
      return {
        ...state,
        checking: true,
        alternatives: false
      } 
    case CHECK_TOPIC_RESULT:    
      return {
        ...state,
        checking: false,
        is_valid: action.is_valid,
        alternatives: action.alternatives
      } 
    case LOAD:
      return {
        ...state,
        loading: true
      }    
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        [action.key]: action.data
      } 
    case LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case UPDATE:
      return {
        ...state,
        [action.key]: {
          ...[action.key],
          ...action.newValues
        }
      }
    default:
      return state;
  }
}

export default editorPageReducer;
