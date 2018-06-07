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

import Button from "components/Button"

export class TopicBar extends React.Component {
  onChangeThisTopic(evt) {
    this.props.onChangeTopic(this.props.position,evt.target.value)
  }
  onRemoveThisTopic(evt) {
    this.props.onRemoveTopic(this.props.position)
  }
  render () {
    const {match} = this.props
    
    return (
      <Wrapper>
        <TopicBarInput
          name="chooseTopic"
          type="text"
          placeholder="Hello"
          value={this.props.topic.name}
          onChange={this.onChangeThisTopic.bind(this)}
        />
        <Button onClick={this.onRemoveThisTopic.bind(this)} >
        x
        </Button>
        <Route path={`${match.path}/:topicBarId`} render={()=><TopicBarTab data={this.props.topic.data} />} />
      </Wrapper>
    );
  }

}

TopicBar.propTypes = {

};

export default withRouter(TopicBar);
