/**
*
* TopicBarNavigation
*
*/

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import NavTab from 'components/NavTab'
import { withRouter } from 'react-router'
import Wrapper from "./Wrapper.js"
import Button from "components/Button"

function TopicBarNavigation({match, MAX_TOPICS_REACHED, onAddTopic}) {
  return (
    <Wrapper>
          
          <NavTab to={`/explorer/info`}>
          Info
          </NavTab>
        
        <NavTab to={`/explorer/structure`}>
        Structure
        </NavTab>
        
        
        <NavTab to={`/explorer/learning`}>
        Learning
        </NavTab>
        
        {!MAX_TOPICS_REACHED && <Button onClick={onAddTopic}>Add Topic</Button> }

    </Wrapper>
  );
}

TopicBarNavigation.propTypes = {

};


export default withRouter(TopicBarNavigation);
