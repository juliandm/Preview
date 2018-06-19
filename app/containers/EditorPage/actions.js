/*
 *
 * EditorPage actions
 *
 */

import {
  LOAD,
  LOAD_SUCCESS,
  LOAD_ERROR,
  UPDATE,
  SAVE,
  CHECK_TOPIC,
  CHECK_TOPIC_SUCCESS,
  CHANGE_TOPIC
} from './constants';

export function loadEditorTab () {return {type: LOAD};}
export function loadSuccess (key,data) {return {type: LOAD_SUCCESS,key, data};}
export function loadError (error) {return {type: LOAD_ERROR, error};}
export function changeTopicName (name) {return {type: CHANGE_TOPIC, name};}
export function checkTopic () {return {type: CHECK_TOPIC};}
export function checkTopicSuccess (answer) {return {type: CHECK_TOPIC_SUCCESS, ...answer};}
export function saveTab () {return {type: SAVE};}
export function updateTab (key,newValues) {return {type: UPDATE, key,newValues};}
