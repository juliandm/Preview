/*
 *
 * ExplorerPage reducer
 *
 */

import { fromJS } from 'immutable';

import {
  LOAD_TOPIC_SUCCESS,
  LOAD_TOPIC,
  LOAD_TOPIC_ERROR,
  CHANGE_TOPIC,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentTopic: false,
  topics: [{"name":"Initial","data":false}]
  // topics: {"1":{"name":false,"data":false},2:{"name":false,"data":false},"3":{"name":false,"data":false}},
});


function explorerPageReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TOPIC:
      console.log("CHANGE REDUCE NAME",action.position,action.topicName)
      return state
        .setIn(["topics",action.position,"name"], action.topicName)
    case LOAD_TOPIC:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(["topics",action.position,"data"], false)
    case LOAD_TOPIC_SUCCESS:
      return state
        .setIn(["topics",action.position,"data"], action.topicData)
        .set('loading', false)
    case LOAD_TOPIC_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}


export default explorerPageReducer;
