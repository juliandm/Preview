/**
*
* Input
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Field as ReduxField } from 'redux-form'

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Wrapper from "./Wrapper"
import Input from "./Input"
import Bar from "./Bar"
import cn from "classnames"
import Error from "./Error"
import Warning from "./Warning"
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning, active }
}) => (
  <Wrapper>
    <Input {...input} placeholder={label} type={type}  />
      <Bar className={cn({"focused":active||warning||error,"warning":warning,"error":error})} />
      {touched &&
        ((error && <Error>{error}</Error>) ||
          (warning && <Warning>{warning}</Warning>))}
      {/* <Bar  /> */}
          
  </Wrapper>
)

function Field({focused, ...rest}) {
  return (
      <ReduxField {...rest} component={renderField} />
  );
}

Field.propTypes = {

};

export default Field;
