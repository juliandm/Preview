/**
*
* Input
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import Wrapper from "./Wrapper"

function Alert({message,type, ...rest}) {
  return (
    <Wrapper className={type} >
          {message}
    </Wrapper>
  );
}


export default Alert;
