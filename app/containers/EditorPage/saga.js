/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD, CHECK_TOPIC } from './constants';
import { loadSuccess, loadError, checkTopicResult, loadEditorTab } from './actions';
import {makeSelectTopicName, makeSelectData, selectEditorTab} from "./selectors"
const delay = (ms) => new Promise(res => setTimeout(res, ms))
export function* checkTopicName() {
  try {
    //Simulate data on server
    const name = yield select(makeSelectTopicName())
    yield delay(1000)
    yield put(checkTopicResult(name==="react", ["React Router", "React Redux"]));
    yield put(loadEditorTab())
  } catch (err) {
    yield put(loadError("Failed to fetch "));
  }
}

export function* getEditorData() {
  try {
    //Simulate data on server
    const tab = yield select(selectEditorTab)  
    //Use tab info in backend  
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
