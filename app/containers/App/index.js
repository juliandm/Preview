/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import ExplorerPage from 'containers/ExplorerPage/Loadable';
import EditorPage from 'containers/EditorPage/Loadable';
import RegisterPage from "containers/RegisterPage/Loadable"
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import LoginPage from 'containers/LoginPage'
import Wrapper from "./Wrapper"
import { createStructuredSelector } from 'reselect';
import {makeSelectLoggingIn, makeSelectLoggedIn, makeSelectLocation, makeSelectRegistering, makeSelectAlertMessage, makeSelectAlertType} from "./selectors"
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { loginRequest, logout, registerRequest } from './actions/index.js';
import reducer from './reducers/index.js';
import saga from './saga';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      localStorage.getItem('user')
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
)


class App extends React.Component {// TODO redirect to old history
  render () {
    return (
      <Wrapper>
        <Header is_authenticated={this.props.loggedIn}  userLogout={this.props.userLogout} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" render={()=><LoginPage alertType={this.props.alertType} alertMessage={this.props.alertMessage} userLogin={this.props.userLogin} loggingIn={this.props.loggingIn} />} />
          <Route path="/register" render={()=><RegisterPage alertType={this.props.alertType} alertMessage={this.props.alertMessage} userRegister={this.props.userRegister} registering={this.props.registering} />} />
          <PrivateRoute path="/explorer" component={ExplorerPage} />
          
          <PrivateRoute path="/editor" component={EditorPage} />        
          <Route component={NotFoundPage} />
        </Switch>
        
        <Footer />
      </Wrapper>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  alertType: makeSelectAlertType(),  
  alertMessage: makeSelectAlertMessage(),    
  location: makeSelectLocation(),  
  loggedIn: makeSelectLoggedIn(),
  loggingIn: makeSelectLoggingIn(),  
  registering: makeSelectRegistering()
});


function mapDispatchToProps(dispatch) {
  return {
    userRegister: (from) => dispatch(registerRequest(from)),    
    userLogin: (from) => dispatch(loginRequest(from)),
    userLogout: () => dispatch(logout()),
  };
}


const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({ key: 'authentication', saga });
const withReducer = injectReducer({ key: 'authentication', reducer });



export default compose(
  withReducer,
  withSaga,  
  withConnect
)(App);