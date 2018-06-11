import { createSelector } from 'reselect';

/**
 * Direct selector to the loginPage state domain
 */
const selectLoginPageDomain = (state) => state.loginPage;
const selectAuth = (state) => state.authentication;


/**
 * Other specific selectors
 */


/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () => createSelector(
  selectLoginPageDomain,
  (substate) => substate
);



export default makeSelectLoginPage;
export {
};
