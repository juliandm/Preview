import { createSelector } from 'reselect';

const selectRoute = (state) => state.get('route');
const selectAuth = (state) => state.getIn(['authentication', "auth"]) ;
const selectRegister = (state) => state.getIn(['authentication', "register"]) ;
const selectAlert = (state) => state.getIn(['authentication', "alert"]) ;

const selectForm = (state) => state.get("form");





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
  (substate) => substate.get("type")
);

const makeSelectAlertMessage = () => createSelector(
  selectAlert,
  (substate) => substate.get("message")
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
