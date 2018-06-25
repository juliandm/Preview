/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_TOPICS, SEARCH } from './constants';
import { topicLoaded, topicLoadingError, searchSuccess } from './actions';

// import request from 'utils/request';
import { makeSelectTopics, makeSelectSearchValue } from './selectors';
import {topicDataConstructor} from "./constructors"
import delay from "helpers/delay"


export function* getSearchResults() {
  console.log("SAGA SEARCH")
  const searchResults = [{"id": "react",value: "react", type:"topic"},{"id": "fsd","value":"FSD", type:"topic"}]
  // const searchValue = yield select(makeSelectSearchValue())
  yield delay(500)
  yield put(searchSuccess(searchResults));
}

export function* getTopicData() {
  // Select Topic Names from store
  const topics = yield select(makeSelectTopics());
  const data = {"links":{"title":"Hwattt","author": "Hehehe"}, "stats":";)"};
  const attributes = [{name: "Hallo", values:[{"active":true, "name": "trollo"},{"active":false}]},{name: "sdf", values:[{"active":true, "name": "Trollo"},{"active":false}]}]

  try {
    for (let topic of topics) {
      if (topic.attributes.length === 0) {
        //Simulate topics on server
        
        const serverTopics = [{id: "react", name: "react", attributes:attributes}]
        const topicById = serverTopics.filter(thistopic=>thistopic.id === topic.id)
        if (topicById.length > 0) {
          
          yield put(topicLoaded(topic.id, topicById[0]));
        } else {
          yield put(topicLoadingError(topic.id,"Not found in system"));
        }
      }
    }

  } catch (err) {
    for (let topic of topics) {
      yield put(topicLoadingError(topic.id,"Failed to fetch"));
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* ExplorerAsync() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_TOPICS, getTopicData);
  yield takeLatest(SEARCH, getSearchResults);
  
}
