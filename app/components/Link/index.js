/**
*
* Input
*
*/

import React from 'react';
import styled from 'styled-components';
import {Link as RouterLink} from "react-router-dom"
import { FormattedMessage } from 'react-intl';
import Wrapper from "./Wrapper"

const StyledLink = styled(RouterLink)`
  text-decoration: none;
  color: #445d6e;
  line-height: 2rem;
  height: 2rem;
  
  &:hover {
    text-decoration: underline;
    
  }
`

function Link({to,children, ...rest}) {
  return (<Wrapper>
        <StyledLink to={to}>{children} </StyledLink>
        </Wrapper>);
}


export default Link;
