/**
 * Explorer selectors
 */

import { createSelector } from 'reselect';

const selectExplorer = (state) => state.explorer;
const selectTopics = (state) => state.explorer.topics;

const makeSelectTopics = () => createSelector(
  selectExplorer,
  (substate) => substate.topics
);

export {
  makeSelectTopics
};
