/*
 *
 * ExplorerPage reducer
 *
 */

import {
  SEARCH,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  ADD_TOPIC,
  REMOVE_TOPIC,
  LOAD_TOPICS,
  LOAD_TOPIC_ERROR,
  LOAD_TOPIC_SUCCESS
} from './constants';
import {initialState, topicConstructor} from "./constructors"


function explorerPageReducer(state = initialState(), action) {
  switch (action.type) {   
    case SEARCH:
      return {
        ...state,
        searching: true,
        searchResults: []
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        searching: false,
        searchResults: action.results
      }          
    case ADD_TOPIC:
      return {
        ...state,
        topics: [...state.topics, topicConstructor({...action.fields})],
      }    
    case REMOVE_TOPIC:
      return {
        ...state,
        topics: state.topics.filter((topic,i) => topic.id !== action.id)
      }
      
    case LOAD_TOPICS:
      return {
        ...state,
        topics: state.topics.map(
          (topic, i) => topic.attributes.length === 0 ? {...topic, loading: true,error:false } : topic
        ),
      }    
    case LOAD_TOPIC_SUCCESS:
      return {
        ...state,
        topics: state.topics.map(
          (topic, i) => topic.id === action.id ? {...topic,...action.topic, loading: false, changed:false} : topic
        )
      }         
    case LOAD_TOPIC_ERROR:
      return {
        ...state,
        topics: state.topics.map(
          (topic, i) => i === action.position ? {...topic, loading: false, error:action.error, changed:false} : topic
        ),
      }         
      
    default:
      return state;
  }
}


export default explorerPageReducer;
