/**
 * Explorer selectors
 */

import { createSelector } from 'reselect';

const selectExplorer = (state) => state.explorer;
const selectTopics = (state) => state.explorer.topics;

const makeSelectTopics = () => createSelector(
  selectExplorer,
  (explorerState) => explorerState.topics
);



const makeSelectChangedTopics = () => createSelector(
  selectTopics,
  (explorerState) => explorerState.filter(t => {return t.changed})
);

export {
  makeSelectTopics,
  makeSelectChangedTopics
};
