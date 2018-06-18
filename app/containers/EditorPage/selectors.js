import { createSelector } from 'reselect';

/**
 * Direct selector to the editorPage state domain
 */
export const selectEditor = (state) => state.editor;
export const selectEditorTab = (state) => {
  const {pathname} = state.route.location
  return pathname.substr(pathname.lastIndexOf('/') + 1)
};


export const makeSelectData = () => createSelector([selectEditor,selectEditorTab],(substate, tabKey) => substate[tabKey]);
export const makeSelectTopicName = () => createSelector(selectEditor,(substate) => substate.topicName);
export const makeSelectTabName = () => createSelector(selectEditorTab,(substate) => substate);

export const makeSelectNameAlternatives = () => createSelector(selectEditor,(substate) => substate.alternatives);
export const makeSelectChecking = () => createSelector(selectEditor,(substate) => substate.checking);
export const makeSelectLoading = () => createSelector(selectEditor,(substate) => substate.loading);




