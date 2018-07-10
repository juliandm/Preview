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
    console.log(action.fields)
      return {
        ...state,
        changed: true,
        topics: [...state.topics, topicConstructor({...action.fields})],
      }    
    case REMOVE_TOPIC:
      return {
        ...state,
        changed: true,        
        topics: state.topics.filter((topic,i) => topic._id !== action.id)
      }
      
    case LOAD_TOPICS:
    console.log("Load")
    
      return {
        ...state,
        loading: true,
      }    
    case LOAD_TOPIC_SUCCESS:
    console.log("Succ")
    
      return {
        ...state,
        topics: action.topics,
        info: action.info,
        tree: action.tree,
        loading:false,
        changed: false,        
        attributes: action.attributes
      }         
    case LOAD_TOPIC_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }         
      
    default:
      return state;
  }
}


export default explorerPageReducer;
