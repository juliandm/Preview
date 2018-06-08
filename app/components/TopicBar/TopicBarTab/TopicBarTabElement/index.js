/**
*
* TopicBarTabElement
*
*/

import React from 'react';
// import styled from 'styled-components';
import Wrapper from "./Wrapper"
import H3 from "components/H3"
import A from "components/A"
export class TopicBarTabElement extends React.Component {
  constructor (props) {
    super(props)
    this.renderLinks = this.renderLinks.bind(this)
    this.renderStats = this.renderStats.bind(this)
    
  }
  renderLinks() {
    let links = this.props.data
    return links.map((link)=>{<div>
        <A>{link.title}</A>
        {link}
        <p>{link.author && link.author}</p>
        <p>{link.provider && link.provider}</p>
        <p>{link.length && link.length}</p>   
      </div>})
  }
  renderStats() {
    let {content} = this.props.data
    return "More Complicated"
  }
  render () {
    let renderedContent = {}
    if (this.props.data) {
      switch (this.props.id) {
        //Learning
        case "links": renderedContent = this.renderLinks(); break;
        case "procon": renderedContent = this.renderProcon(); break;
        case "stats": renderedContent = this.renderStats(); break;
        case "tips": renderedContent = this.renderTips(); break;
        case "learningSettings": renderedContent = this.renderLearningSettings(); break;
        //Structure
        case "uniqueParts": renderedContent = this.renderUniqueParts(); break;//
        case "sharedParts": renderedContent = this.renderSharedParts(); break; 
        case "alternatives": renderedContent = this.renderAlternatives(); break; 
        case "parents": renderedContent = this.renderParents(); break; 
        case "structureSettings": renderedContent = this.renderStructureSettings(); break;
        //Info
        case "description": renderedContent = this.renderDescription(); break; 
        case "attributes": renderedContent = this.renderAttributes(); break; 
        case "students": renderedContent = this.renderStudents(); break; 
        case "experts": renderedContent = this.renderExperts(); break; 
        case "mentors": renderedContent = this.renderMentors(); break; 
        case "infoSettings": renderedContent = this.renderInfoSettings(); break; 
      }
    }
    return (
      <Wrapper>
        <h3 onClick={this.props.onDetail}>{this.props.title}</h3>
        {this.props.data ? renderedContent : "Nothing here yet"}
      </Wrapper>
    );
  }

}

TopicBarTabElement.propTypes = {

};

export default TopicBarTabElement;
