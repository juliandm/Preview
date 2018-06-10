import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from "components/Button"
import LoadingIndicator from "components/LoadingIndicator"
import { reduxForm } from 'redux-form/immutable'
import Field from "components/Field"
import RowWrapper from "components/RowWrapper"
import { compose } from 'redux';

const validate = values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.password) {
      errors.password = 'Required'
    }
    return errors
  }
  
  const warn = values => {
    const warnings = {}

    return warnings
  } 

function LoginPage ({userLogin, loggingIn,location,...rest}) {
    const prevPath = () => {
        const {state} = location || {"state":{"from":{"pathname":"/"}}}
        return state.from.pathname
    }
    
    return (
        <form>
        <Field name="email" type="email"  label="Email" />
        <Field name="password" type="password" label="Password" />
        <RowWrapper>
            <Button type="submit" disabled={loggingIn} onClick={()=>userLogin(prevPath())}>
            Submit
            </Button>
            <Button type="button" disabled={loggingIn} onClick={rest.reset}>
            Clear Values
            </Button>
            <Link to="/register" >Register</Link>
            
        </RowWrapper>
        </form>
    );
}
 
const withReduxForm = reduxForm({
    form:"login",
    validate,
    warn
  })
export default compose(
    withRouter,
    withReduxForm
)(LoginPage);
  