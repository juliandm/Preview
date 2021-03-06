/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD, CHECK_TOPIC } from './constants';
import { loadSuccess, loadError, checkTopicSuccess, loadEditorTab } from './actions';
import {makeSelectTopicName, makeSelectTopicId, makeSelectData, selectEditorTab} from "./selectors"
import {mainApi} from "services"
import delay from "helpers/delay"

export function* checkTopicName() {
  try {
    //Simulate data on server
    const name = yield select(makeSelectTopicName())
    const answer = yield call(topicApi({id:name,method: "GET", query:{id_method: "name"} }))
    yield put(checkTopicSuccess(answer));
    yield put(loadEditorTab())
  } catch (err) {
    yield put(loadError("Failed to fetch "));
  }
}

export function* getEditorData() {
  try {
    //Simulate data on server
    const tab = yield select(selectEditorTab) 
    const id = yield select(makeSelectTopicId())
     
    //Use tab info in backend  
    yield call(topicApi({id,method: "GET",path:["children"]}))
    yield delay(1000)
    
    const serverData = {"treeData": [{ id:"chicken", title: 'Chicken', children: [{ id:"hallo", title: 'Egg' }] }]}
    yield put(loadSuccess(tab,serverData));
  } catch (err) {
    yield put(loadError("Failed to fetch"));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* EditorHandler() {
  yield takeLatest(CHECK_TOPIC, checkTopicName);  
  yield takeLatest(LOAD, getEditorData);
}
