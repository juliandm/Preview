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
import Input from "components/Input"
import Bar from "./Bar"
import cn from "classnames"
import Error from "./Error"
import Warning from "./Warning"
import FloatLabel from "./FloatLabel"
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning, active }
}) => (
  <Wrapper>
    <FloatLabel className={cn({"focused":active||input.value.length>0})} >{label}</FloatLabel>
    <Input {...input} placeholder={""} type={type}  />
    <Bar className={cn({"focused":touched && (active||warning||error),"warning":touched && warning,"error":touched && error})} />
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
