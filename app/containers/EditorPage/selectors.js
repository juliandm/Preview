import { createSelector } from 'reselect';

/**
 * Direct selector to the editorPage state domain
 */
const selectEditorPageDomain = (state) => state.editor;

/**
 * Other specific selectors
 */


/**
 * Default selector used by EditorPage
 */

const makeSelectEditorPage = () => createSelector(
  selectEditorPageDomain,
  (substate) => substate
);

export default makeSelectEditorPage;
export {
  selectEditorPageDomain,
};
