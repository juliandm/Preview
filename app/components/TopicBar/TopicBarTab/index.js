/**
*
* TopicBarTab
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Wrapper from "./Wrapper"
import TopicBarTabElement from "./TopicBarTabElement/index.js"
import { withRouter } from 'react-router'

export class TopicBarTab extends React.Component {

  renderLearning() {
    return ""
  }
  renderStructure() {
    return ""
  }
  renderInfo() {
    const {description, attributes, students, experts, mentors} = this.props
    const title = "Learning"
    const content = [description, attributes, students, experts, mentors]
    console.log(content)
    return <TopicBarTabElement content={content} title={title} />
  }
  render () {
    const {match} = this.props
    var renderedTab = ""
    switch (match.params.topicBarId) {
      case "learning": renderedTab = this.renderLearning();break;
      case "structure": renderedTab = this.renderStructure();break;
      case "info": renderedTab = this.renderInfo();break;      
    }
    console.log(renderedTab)
    return (
      <Wrapper>
        {renderedTab}
      </Wrapper>
    );
  }

}

TopicBarTab.propTypes = {

};

export default withRouter(TopicBarTab);
