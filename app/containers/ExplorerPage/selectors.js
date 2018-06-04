/**
 * Explorer selectors
 */

import { createSelector } from 'reselect';

const selectExplorer = (state) => state.get('explorer');

// const makeSelectTopicData = (position) => createSelector(
//   selectExplorer,
//   (explorerState) => explorerState.getIn(['topics',position,"data"])
// );
// const makeSelectTopicName = (position) => createSelector(
//   selectExplorer,
//   (explorerState) => explorerState.getIn(['topics',position,"name"])
// );

const makeSelectTopics = (position) => createSelector(
  selectExplorer,
  (explorerState) => explorerState.get("topics").toJS()
);

export {
  makeSelectTopics
  // makeSelectTopicData,
  // makeSelectTopicName,
};
