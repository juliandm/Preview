/**
*
* Input
*
*/

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import styles from './styles';
import { NavLink } from 'react-router-dom';


function NavTab({to,children, ...rest}) {
  var StyledTab = styled.div`${styles}`;

  if(to){
     StyledTab = styled(NavLink)`${styles}`;
  }
  return (
    <StyledTab {...rest} to={to}>{children} </StyledTab>
);
}


export default NavTab;
