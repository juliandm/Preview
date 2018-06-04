/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_TOPIC } from 'containers/ExplorerPage/constants';
import { topicLoaded, topicLoadingError } from 'containers/ExplorerPage/actions';

// import request from 'utils/request';
import { TopicBar } from '../../components/TopicBar';
// import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Github repos request/response handler
 */
export function* getTopicBarData() {
  // Select Topic Names from store
  const topicName = "test"
  // const username = yield select(makeSelectUsername());
  // const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    // const repos = yield call(request, requestURL);
    yield put(topicLoaded(repos, topicName));
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