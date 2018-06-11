/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_TOPIC } from 'containers/ExplorerPage/constants';
import { topicLoaded, topicLoadingError } from 'containers/ExplorerPage/actions';

// import request from 'utils/request';
import { TopicBar } from '../../components/TopicBar';
import { makeSelectTopics } from 'containers/ExplorerPage/selectors';
import {topicDataConstructor} from "./constructors"


export function* getTopicBarData() {
  // Select Topic Names from store
  const topicName = "test"
  const topics = yield select(makeSelectTopics());
  console.log("WHAT", topics)


  try {
    for (let i in topics) {
      const topic = topics[i]
      if (topic.changed) {
        //REQUEST HERE
        // const data = yield call(request, requestURL);
        const data = {"links":[{"title":"Hwattt","author": "Hehehe"}], "stats":";)"};
        yield put(topicLoaded(parseInt(i), data));
      }
    }

  } catch (err) {
    yield put(topicLoadingError(err));
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
