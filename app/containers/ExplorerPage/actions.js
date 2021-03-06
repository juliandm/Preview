

import {
  SEARCH,
  SEARCH_ERROR,
  SEARCH_SUCCESS,
  ADD_TOPIC,
  REMOVE_TOPIC,  
  LOAD_TOPICS,
  LOAD_TOPIC_SUCCESS,
  LOAD_TOPIC_ERROR,
} from './constants';


export function search() {return {type: SEARCH}}
export function searchSuccess(results) {return {type: SEARCH_SUCCESS,results}}

export function addTopic(fields) {return {type: ADD_TOPIC,fields}}
export function removeTopic(id) {return {type: REMOVE_TOPIC,id};}

export function loadTopics() {return {type: LOAD_TOPICS}}

export function topicsLoaded({attributes, topics, tree, info}) {return {type: LOAD_TOPIC_SUCCESS,attributes, topics, tree, info}}

export function topicsLoadingError(id,error) {return {type: LOAD_TOPIC_ERROR,id,error}}

