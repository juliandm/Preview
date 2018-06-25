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
  LOAD_TOPIC,
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
        topics: [...state.topics, topicConstructor({id: action.id})],
      }    
    case REMOVE_TOPIC:
      return {
        ...state,
        topics: state.topics.filter((topic,i) => topic.id !== action.id)
      }
      
    case LOAD_TOPIC:
      return {
        ...state,
        topics: state.topics.map(
          (topic, i) => i === action.position ? {...topic, loading: true,error:false } : topic
        ),
      }    
    case LOAD_TOPIC_SUCCESS:
      return {
        ...state,
        topics: state.topics.map(
          (topic, i) => i === action.position ? {...topic, loading: false, changed:false, id:action.searchId} : topic
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
