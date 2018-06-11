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
      return {
        ...state,
        topics: state.topics.map(
          (topic, i) => i === action.position ? {...topic, name: action.topicName, changed:true} : topic
        )
      }      
    case ADD_TOPIC:
      console.log("ADD REDUCE TOPIC",action.topicName)
      return {
        ...state,
        topics: [...state.topics, topicConstructor(action.topicName)]
      }    
    case REMOVE_TOPIC:
      console.log("REMOVE REDUCE TOPIC",action.topicName)
      return {
        ...state,
        topics: state.topics.filter((topic,i) => i !== action.position)
      }
    case LOAD_TOPIC:
      return {
        ...state,
        topics: state.topics.map(
          (topic, i) => i === action.position ? {...topic, loading: true} : topic
        ),
        error: false
      }    
    case LOAD_TOPIC_SUCCESS:
      return {
        ...state,
        topics: state.topics.map(
          (topic, i) => i === action.position ? {...topic, loading: false, changed:false, data: {...topic.data, ...action.topicData}} : topic
        )
      }         
    case LOAD_TOPIC_ERROR:
      return {
        ...state,
        topics: state.topics.map(
          (topic, i) => i === action.position ? {...topic, loading: false} : topic
        ),
        error: action.error
      }         
    default:
      return state;
  }
}


export default explorerPageReducer;
