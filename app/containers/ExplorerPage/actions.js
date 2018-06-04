/*
 *
 * ExplorerPage actions
 *
 */

import {
  CHANGE_TOPIC,
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

export function loadTopicData(position) {
  return {
    type: LOAD_TOPIC,
    position
  };
}

export function topicLoaded(position, topicData) {
  return {
    type: LOAD_TOPIC_SUCCESS,
    position,
    topicData
  };
}

export function topicLoadingError(error) {
  return {
    type: LOAD_TOPIC_ERROR,
    error,
  };
}
