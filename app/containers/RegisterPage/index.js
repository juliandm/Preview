/**
 *
 * RegisterPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { reduxForm } from 'redux-form'
import { withRouter } from "react-router-dom"
import Field from "components/Field"
import Button from "components/Button"
import RowWrapper from "components/RowWrapper"
import scorePassword from "./passwordScore"
import Wrapper from "./Wrapper"

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else {

  }
  if (!values.password) {
    errors.repeatPassword = 'Repeat the password please'
  } else if (values.password !== values.repeatPassword) {
    errors.repeatPassword = "Passwords don't match!"
  }
  return errors
}

const warn = values => {
  const warnings = {}
  var score = scorePassword(values.password);
  if (score > 80) warnings.password =  "strong";
  if (score > 60) warnings.password =  "good";
  if (score >= 30) warnings.password = "weak";
  else warnings.password = "Not good enough";
  return warnings
}



export class RegisterPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {registering, userRegister, reset, alertType, alertMessage} = this.props
    return (
      <Wrapper>
        <h2>Create a new account</h2>
        
      <form>
      <Field name="email" type="email"  label="Email" />
      <Field name="password" type="password" label="Password" />
      <Field name="repeatPassword" type="password" label="Repeat Password" />
      
      <RowWrapper>
        <Button cut type="submit" disabled={registering} onClick={()=>userRegister()}>
          Signup
        </Button>

        {alertMessage}
      </RowWrapper>
    </form>
    </Wrapper>)
  }
}

RegisterPage.propTypes = {
};

const withReduxForm = reduxForm({
  form:"register",
  validate,
  warn
})
export default compose(
  withRouter,
  withReduxForm
)(RegisterPage);
