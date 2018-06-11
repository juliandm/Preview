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
        <i className="fas fa-info" ></i>  Info
        </NavTab>
        
        <NavTab to={`/explorer/structure`}>
                  
        <i className="fas fa-sitemap" ></i>  Structure
        </NavTab>
        
        
        <NavTab to={`/explorer/learning`}>
        <i className="fas fa-lightbulb" ></i>  Learning
        </NavTab>
        
        {!MAX_TOPICS_REACHED && <div style={{display:"flex",justifyContent:"flex-end",flex:1}}> <Button onClick={onAddTopic}><i className="fas fas-3x fa-plus" ></i> Add Topic</Button> </div>}

    </Wrapper>
  );
}

TopicBarNavigation.propTypes = {

};


export default withRouter(TopicBarNavigation);
