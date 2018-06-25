/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_TOPIC, SEARCH } from './constants';
import { topicLoaded, topicLoadingError, searchSuccess } from './actions';

// import request from 'utils/request';
import { makeSelectTopics, makeSelectSearchValue } from './selectors';
import {topicDataConstructor} from "./constructors"
import delay from "helpers/delay"


export function* getSearchResults() {
  console.log("SAGA SEARCH")
  const searchResults = [{"id": "hahaha",value: "haha", type:"topic"},{"id": "fsd","value":"FSD", type:"topic"}]
  // const searchValue = yield select(makeSelectSearchValue())
  yield delay(500)
  yield put(searchSuccess(searchResults));
}

export function* getTopicData() {
  // Select Topic Names from store
  const topics = yield select(makeSelectTopics());
  const data = {"links":{"title":"Hwattt","author": "Hehehe"}, "stats":";)"};

  try {
    for (let i in topics) {
      const topic = topics[i]
      if (topic.attributes.length === 0) {
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
export default function* ExplorerAsync() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_TOPIC, getTopicData);
  yield takeLatest(SEARCH, getSearchResults);
  
}
