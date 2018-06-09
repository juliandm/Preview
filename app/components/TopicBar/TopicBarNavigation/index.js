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
import Button from "components/Button"

function TopicBarNavigation({match, MAX_TOPICS_REACHED, onAddTopic}) {
  return (
    <Wrapper>
          
          <Link to={`/explorer/info`}>
          Info
          </Link>
        
        <Link to={`/explorer/structure`}>
        Structure
        </Link>
        
        
        <Link to={`/explorer/learning`}>
        Learning
        </Link>
        
        {!MAX_TOPICS_REACHED && <Button onClick={onAddTopic}>Add Topic</Button> }

    </Wrapper>
  );
}

TopicBarNavigation.propTypes = {

};


export default withRouter(TopicBarNavigation);
