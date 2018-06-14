/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_TOPIC } from './constants';
import { topicLoaded, topicLoadingError } from './actions';

// import request from 'utils/request';
import { makeSelectTopics } from './selectors';
import {topicDataConstructor} from "./constructors"

var ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};
export function* getTopicBarData() {
  // Select Topic Names from store
  const topicName = "test"
  const topics = yield select(makeSelectTopics());
  const data = {"links":{"title":"Hwattt","author": "Hehehe"}, "stats":";)"};


  try {
    for (let i in topics) {
      const topic = topics[i]
      if (topic.changed) {
        //Simulate topics on server
        const serverTopics = [{id: "react", name: "react", data:Object.assign({},data)}]
        const topicById = serverTopics.filter(thistopic=>thistopic.name === topic.name)
        if (topicById.length > 0) {
          yield put(topicLoaded(parseInt(i), topicById[0], ID()));
        } else {
          yield put(topicLoadingError(parseInt(i),"Not found in system"));
        }
      }
    }

  } catch (err) {
    for (let i in topics) {
      yield put(topicLoadingError(parseInt(i),"Failed to fetch"));
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* TopicBarData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_TOPIC, getTopicBarData);
}
