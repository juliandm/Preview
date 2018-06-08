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
// import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import LoginPage from 'containers/LoginPage'
// import Navbar from 'components/Navbar'


// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true
//     setTimeout(cb, 100)
//   },
//   signout(cb) {
//     this.isAuthenticated = false
//     setTimeout(cb, 100)
//   }
// }

// const Public = () => <h3>Public</h3>
// const Protected = () => <h3>Protected</h3>

// class LoginPage extends React.Component {
//   state = {
//     redirectToReferrer: false
//   }
//   login = () => {
//     fakeAuth.authenticate(() => {
//       this.setState(() => ({
//         redirectToReferrer: true
//       }))
//     })
//   }
//   render() {
//     const { from } = this.props.location.state || { from: { pathname: '/' } }
//     const { redirectToReferrer } = this.state

//     if (redirectToReferrer === true) {
//       return <Redirect to={from} />
//     }

//     return (
//       <div>
//         <p>You must log in to view the page</p>
//         <button onClick={this.login}>Log in</button>
//       </div>
//     )
//   }
// }

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      localStorage.getItem('user')
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )} />
)

// const AuthButton = withRouter(({ history }) => (
//   fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome! <button onClick={() => {
//         fakeAuth.signout(() => history.push('/'))
//       }}>Sign out</button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   )
// ))

export default class App extends React.Component {
  render () {
    const IS_AUTHENTICATED = localStorage.getItem('user')
    return (
      <div>
        <Header is_authenticated={IS_AUTHENTICATED} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={LoginPage} />
          <PrivateRoute path="/explorer" component={ExplorerPage} />
          <PrivateRoute path="/editor" component={EditorPage} />        
          <Route component={NotFoundPage} />
        </Switch>
        
        <Footer />
      </div>
    );
  }
}
