/*
 *
 * ExplorerPage reducer
 *
 */

import {topicConstructor, initialState} from "./constructors"
import {
  LOAD_TOPIC_SUCCESS,
  LOAD_TOPIC,
  LOAD_TOPIC_ERROR,
  CHANGE_TOPIC,
  ADD_TOPIC,
  REMOVE_TOPIC
} from './constants';






function explorerPageReducer(state = initialState(), action) {
  switch (action.type) {
    case CHANGE_TOPIC:
      console.log("CHANGE REDUCE NAME",action.position,action.topicName)
      return state
        .setIn(["topics",action.position,"name"], action.topicName)
        .setIn(["topics",action.position,"changed"], true)        
    case ADD_TOPIC:
      console.log("ADD REDUCE TOPIC",action.topicName)
      return state
        .setIn(["topics",state.get("topics").size], topicConstructor(action.topicName))
    case REMOVE_TOPIC:
      console.log("REMOVE REDUCE TOPIC",action.topicName)
      return state
        .deleteIn(["topics",action.position])
    case LOAD_TOPIC:
      return state
        .setIn(["topics",action.position,"loading"], true)    
        .set('error', false)
    case LOAD_TOPIC_SUCCESS:
      return state
        .setIn(["topics",action.position,"data"], action.topicData)
        .setIn(["topics",action.position,"loading"], false)    
        .setIn(["topics",action.position,"changed"], false)            
    case LOAD_TOPIC_ERROR:
      return state
        .set('error', action.error)
        .setIn(["topics",action.position,"loading"], false)    
    default:
      return state;
  }
}


export default explorerPageReducer;
