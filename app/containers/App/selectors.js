import { createSelector } from 'reselect';

const selectRoute = (state) => state.route;
const selectAuth = (state) => state.authentication.auth ;
const selectRegister = (state) => state.authentication.register ;
const selectAlert = (state) => state.authentication.alert ;

const selectForm = (state) => state.form;





const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.location
);



const makeSelectLoggingIn = () => createSelector(
  selectAuth,
  (substate) => substate.loggingIn
);

const makeSelectLoggedIn = () => createSelector(
  selectAuth,
  (substate) => substate.loggedIn
);
const makeSelectRegistering = () => createSelector(
  selectRegister,
  (substate) => substate.registering
);
const makeSelectLoginEmail = () => createSelector(
  selectForm,
  (substate) => substate.login.values.email
);
const makeSelectLoginPw = () => createSelector(
  selectForm,
  (substate) => substate.login.values.password
);
const makeSelectRegisterEmail = () => createSelector(
  selectForm,
  (substate) => substate.register.values.email
);
const makeSelectRegisterPw = () => createSelector(
  selectForm,
  (substate) => substate.register.values.password
);

const makeSelectAlertType = () => createSelector(
  selectAlert,
  (substate) => substate.type
);

const makeSelectAlertMessage = () => createSelector(
  selectAlert,
  (substate) => substate.message
);

export {
  makeSelectLocation,
  makeSelectLoggingIn,
  makeSelectLoggedIn,
  makeSelectRegistering,
  makeSelectAlertMessage,
  makeSelectAlertType,

  makeSelectLoginEmail, 
  makeSelectLoginPw,
  makeSelectRegisterEmail, 
  makeSelectRegisterPw
};
