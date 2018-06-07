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
import titles from "./titles"

export class TopicBarTab extends React.Component {

  renderLearning() {
    const {links, procon, stats, tips, learningSettings} = this.props.data
    return {links, procon, stats, tips}
  }
  renderStructure() {
    const {uniqueParts, sharedParts, alternatives, parents, structureSettings} = this.props.data
    return {uniqueParts, sharedParts, alternatives, parents}
  }
  renderInfo() {
    const {description, attributes, students, experts, mentors, infoSettings} = this.props.data
    return {description, attributes, students, experts, mentors}
  }
  render () {
    const {match} = this.props
    var elements = {}
    const tabTitle = match.params.topicBarId
    switch (tabTitle) {
      case "learning": elements = this.renderLearning();break;
      case "info": elements = this.renderInfo();break;      
      case "structure": elements = this.renderStructure();break;
    }
    var renderedElements = Object.keys(elements).map((key,i) => {
      const el = elements[key]
      const title = titles[key]
      console.log(el,title)

      return <TopicBarTabElement key={i} data={el} title={title} id={key} onDetail={()=>{alert(el)}}/>
    });
    console.log(renderedElements)
    
    return (
      <Wrapper>
        <h3>{tabTitle}</h3>
      {renderedElements}
    </Wrapper>
    )
  }

}

TopicBarTab.propTypes = {

};

export default withRouter(TopicBarTab);
