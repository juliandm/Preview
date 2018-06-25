

import {
  SEARCH,
  SEARCH_ERROR,
  SEARCH_SUCCESS,
  ADD_TOPIC,
  REMOVE_TOPIC,  
  LOAD_TOPIC,
  LOAD_TOPIC_SUCCESS,
  LOAD_TOPIC_ERROR,
} from './constants';


export function search() {return {type: SEARCH}}
export function searchSuccess(results) {return {type: SEARCH_SUCCESS,results}}

export function addTopic(id) {return {type: ADD_TOPIC,id}}
export function removeTopic(id) {return {type: REMOVE_TOPIC,id};}

export function loadTopic(position) {return {type: LOAD_TOPIC,position}}

export function topicLoaded(position, topic, searchId) {return {type: LOAD_TOPIC_SUCCESS,position,topic,searchId}}

export function topicLoadingError(position,error) {return {type: LOAD_TOPIC_ERROR,position,error}}

