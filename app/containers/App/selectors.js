import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');
const selectAuth = (state) => state.getIn(['authentication', "auth"]) ;
const selectRegister = (state) => state.getIn(['authentication', "register"]) ;
const selectRegisterForm = (state) => state.getIn(['form', "register"]) ;
const selectLoginForm = (state) => state.getIn(['form', "login"]) ;





const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);



const makeSelectLoggingIn = () => createSelector(
  selectAuth,
  (substate) => substate.get("logginIn")
);

const makeSelectLoggedIn = () => createSelector(
  selectAuth,
  (substate) => substate.get("loggedIn")
);
const makeSelectRegistering = () => createSelector(
  selectRegister,
  (substate) => substate.get("registering")
);
const makeSelectLoginEmail = () => createSelector(
  selectLoginForm,
  (substate) => substate.get("email")
);
const makeSelectLoginPw = () => createSelector(
  selectLoginForm,
  (substate) => substate.get("password")
);
const makeSelectRegisterEmail = () => createSelector(
  selectRegisterForm,
  (substate) => substate.get("email")
);
const makeSelectRegisterPw = () => createSelector(
  selectRegisterForm,
  (substate) => substate.get("password")
);
export {
  makeSelectLocation,
  makeSelectLoggingIn,
  makeSelectLoggedIn,
  makeSelectRegistering,

  makeSelectLoginEmail, 
  makeSelectLoginPw,
  makeSelectRegisterEmail, 
  makeSelectRegisterPw
};
