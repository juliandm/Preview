/**
 * Explorer selectors
 */

import { createSelector } from 'reselect';

const selectExplorer = (state) => state.get('explorer');
const selectTopics = (state) => state.getIn(['explorer','topics']);


// const makeSelectTopicData = (position) => createSelector(
//   selectExplorer,
//   (explorerState) => explorerState.getIn(['topics',position,"data"])
// );
// const makeSelectTopicName = (position) => createSelector(
//   selectExplorer,
//   (explorerState) => explorerState.getIn(['topics',position,"name"])
// );

const makeSelectTopics = () => createSelector(
  selectExplorer,
  (explorerState) => explorerState.get("topics").toJS()
);

// const makeSelectChangedTopics = () => createSelector(
//   selectExplorer,
//   (explorerState) => explorerState.get("topics").filter(t => t.changed).toJS()
// );

const makeSelectChangedTopics = () => createSelector(
  selectTopics,
  (explorerState) => explorerState.toJS().filter(t => {return t.changed})
);

export {
  makeSelectTopics,
  makeSelectChangedTopics
  // makeSelectTopicData,
  // makeSelectTopicName,
};
