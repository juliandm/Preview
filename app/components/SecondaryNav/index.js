/**
*
* TopicBarNavigation
*
*/

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import NavTab from './NavTab'
import { withRouter } from 'react-router'
import Wrapper from "./Wrapper.js"
import Button from "components/Button"

function SecondaryNav({children}) {
  return (
    <Wrapper>  
        {children}
    </Wrapper>
  );
}

SecondaryNav.propTypes = {

};


export default withRouter(SecondaryNav);
