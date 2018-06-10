import { createSelector } from 'reselect';

/**
 * Direct selector to the loginPage state domain
 */
const selectLoginPageDomain = (state) => state.get('loginPage');
const selectAuth = (state) => state.get('authentication');


/**
 * Other specific selectors
 */


/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () => createSelector(
  selectLoginPageDomain,
  (substate) => substate.toJS()
);



export default makeSelectLoginPage;
export {
};
