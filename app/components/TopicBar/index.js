/**
*
* Sidebar
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import {Route} from "react-router-dom"
import { withRouter } from 'react-router'
import Wrapper from "./Wrapper"
import TopicBarTab from './TopicBarTab/index.js';
import TopicBarInput from "./TopicBarInput/index.js"
import TopicBarNavigation from "./TopicBarNavigation/index.js"

export class TopicBar extends React.Component {
  onChangeThisTopic(evt) {
    const pos = this.props.position
    this.props.onChangeTopic(pos,evt.target.value)
  }
  render () {
    const {match} = this.props
    
    return (
      <Wrapper>
        <TopicBarNavigation />
        <TopicBarInput
          name="chooseTopic"
          type="text"
          placeholder="Hello"
          value={this.props.topic.name}
          onChange={this.onChangeThisTopic.bind(this)}
        />
        {match.path}
        <Route path={`${match.path}/:topicBarId`} component={TopicBarTab} />
      </Wrapper>
    );
  }

}

TopicBar.propTypes = {

};

export default withRouter(TopicBar);
