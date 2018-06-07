/**
*
* TopicBarNavigation
*
*/

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router'
import Wrapper from "./Wrapper.js"

function TopicBarNavigation({match}) {
  return (
    <Wrapper>
        <Link to={`${match.url}/info`}>
        Info
        </Link>
        <Link to={`${match.url}/structure`}>
        Structure
        </Link>
        <Link to={`${match.url}/learning`}>
        Learning
        </Link>

    </Wrapper>
  );
}

TopicBarNavigation.propTypes = {

};


export default withRouter(TopicBarNavigation);
