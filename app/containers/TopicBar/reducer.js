/*
 *
 * ExplorerPage reducer
 *
 */

import {topicConstructor, initialState, tabConstructor} from "./constructors"
import {
  LOAD_TOPIC_SUCCESS,
  LOAD_TOPIC,
  LOAD_TOPIC_ERROR,
  CHANGE_TOPIC,
  ADD_TOPIC,
  REMOVE_TOPIC,
  CHANGE_ACTIVE_TABS
} from './constants';






function explorerPageReducer(state = initialState(), action) {
  var mergedTabs = {}
  
  switch (action.type) {
    case CHANGE_ACTIVE_TABS:
    console.log("CHANGE REDUCE ACTIVE TABS",action.tabs)
    return {
      ...state,
      activeTabs: action.tabs
    }  
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
      for (let key in tabConstructor()) {
        mergedTabs[key] = [...state[key], {}]
      }
      return {
        ...state,
        ...mergedTabs,
        topics: [...state.topics, topicConstructor(action.topicName)],

      }    
    case REMOVE_TOPIC:
      console.log("REMOVE REDUCE TOPIC",action.topicName)
      for (let key in tabConstructor()) {
        mergedTabs[key] = state[key].filter((tab,i) => i !== action.position)
      }
      return {
        ...state,
        ...mergedTabs,
        topics: state.topics.filter((topic,i) => i !== action.position)
      }
      
    case LOAD_TOPIC:
      return {
        ...state,
        topics: state.topics.map(
          (topic, i) => i === action.position ? {...topic, loading: true,error:false } : topic
        ),
      }    
    case LOAD_TOPIC_SUCCESS:
      for (let key in action.topic.data) {
        mergedTabs[key] = state[key].map(
          (tab, i) => i === action.position ? {...tab, data:action.topic.data[key]}: tab
        )
      }
      return {
        ...state,
        ...mergedTabs,
        topics: state.topics.map(
          (topic, i) => i === action.position ? {...topic, loading: false, changed:false, id:action.searchId} : topic
        )
      }         
    case LOAD_TOPIC_ERROR:
      for (let key in tabConstructor()) {
        mergedTabs[key] = state[key].map(
          (tab, i) => i === action.position ? {}: tab
        )
      }
      return {
        ...state,
        ...mergedTabs,
        topics: state.topics.map(
          (topic, i) => i === action.position ? {...topic, loading: false, error:action.error, changed:false} : topic
        ),
      }         
    default:
      return state;
  }
}


export default explorerPageReducer;
