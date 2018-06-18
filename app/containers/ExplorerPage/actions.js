

import {
  CHANGE_ACTIVE_TABS,  
  CHANGE_TOPIC,
  ADD_TOPIC,
  REMOVE_TOPIC,  
  LOAD_TOPIC,
  LOAD_TOPIC_SUCCESS,
  LOAD_TOPIC_ERROR
} from './constants';

/**
 * Changes the input fields of the TopicsBars
 *
 * @param  {array} topics the name of the currently active topics
 *
 * @return {object}    An action object with a type of CHANGE_TOPICS
 */


export function changeTopicName(position,topicName) {
  return {
    type: CHANGE_TOPIC,
    position,
    topicName,
  };
}

export function addTopic(topicName) {
  return {
    type: ADD_TOPIC,
    topicName,
  };
}

export function removeTopic(position) {
  return {
    type: REMOVE_TOPIC,
    position,
  };
}

export function loadTopicData(position) {
  console.log("LOADDDDD")
  return {
    type: LOAD_TOPIC,
    position
  };
}

export function topicLoaded(position, topic, searchId) {
  console.log("LOAD TOPIC SUCESS ACTION", position, topic)
  
  return {
    type: LOAD_TOPIC_SUCCESS,
    position,
    topic,
    searchId
  };
}

export function topicLoadingError(position,error) {
  return {
    type: LOAD_TOPIC_ERROR,
    position,
    error
  };
}

export function changeActiveTabs(tabs) {
  return {
    type: CHANGE_ACTIVE_TABS,
    tabs,
  };
}
