import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from "components/Button"
import LoadingIndicator from "components/LoadingIndicator"
import { reduxForm } from 'redux-form'
import Field from "components/Field"
import RowWrapper from "components/RowWrapper"
import { compose } from 'redux';
import Wrapper from "./Wrapper"
import Alert from "components/Alert"
import Link from "components/Link"

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

function LoginPage ({userLogin, loggingIn,location,alertType, alertMessage, ...rest}) {
    const prevPath = () => {
        const {state} = location || {"state":{"from":{"pathname":"/"}}}
        return state.from.pathname
    }
    console.log(rest)
    return (<Wrapper>
        <h2>Login into your account</h2>
        <form>
        <Field name="email" type="email"  label="Email" />
        <Field name="password" type="password" label="Password" />
        <RowWrapper>
            <Button cut type="submit" disabled={loggingIn||rest.syncErrors} onClick={()=>userLogin(prevPath())}>
            Submit
            </Button>
            <Link to="/register" >Signup</Link>
            <Link to="/reset" >I forgot my password</Link>
            
            <Alert message={alertMessage} type={alertType} />
        </RowWrapper>
        </form>
    </Wrapper>);
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
  