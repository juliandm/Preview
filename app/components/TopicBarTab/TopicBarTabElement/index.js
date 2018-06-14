/**
*
* TopicBarTabElement
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import A from "components/A"
import Wrapper from "./Wrapper"

class TopicBarTabElement extends React.Component {
  constructor (props) {
    super(props)
    this.renderLinks = this.renderLinks.bind(this)
    this.renderStats = this.renderStats.bind(this)
    
  }
  shouldComponentUpdate() {
    return false;
  }
  renderLinks() {
    let {links=[]} = this.props.data
    let renderedLinks = links.map((link)=>{<div>
      <A>{link.title}</A>
      {link}
      <p>{link.author && link.author}</p>
      <p>{link.provider && link.provider}</p>
      <p>{link.length && link.length}</p>   
    </div>
    })
    return <div>
      <div> <i className="fas fa-link" ></i>  Links</div>
      {renderedLinks}
    </div>
  }
  renderStats() {
    let {content} = this.props.data
    return <div>
      <div> <i className="fas fa-chart-pie" ></i>  Stats</div>
      
    </div>
  }
  renderProcon() {
    let {content} = this.props.data
    return <div>
      <div> <i className="fas fa-thumbs-up" ></i><i className="fas fa-thumbs-down" ></i>  Pro Contra</div>
    </div>
  }
  renderTips() {
    let {content} = this.props.data
    return <div>
      <div> <i className="fas fa-hand-peace" ></i><i className="fas fa-thumbs-down" ></i>  Tips</div>
    </div>
  }

  renderParts() {
    let {content} = this.props.data
    return <div >
      <div> <i className="fas fa-th-large" ></i><i className="fas fa-thumbs-down" ></i>  Parts</div>
    </div>
  }
  renderAlternatives() {
    let {content} = this.props.data
    return <div>
      <div> <i className="fas fa-boxes" ></i>  Alternatives</div>
    </div>
  }
  renderParents() {
    let {content} = this.props.data
    return <div>
      <div> <i className="fas fa-boxes" ></i>  Parents</div>
    </div>
  }
  renderDescription() {
    let {content} = this.props.data
    return <div >
      <div> <i className="fas fa-newspaper" ></i>  Description</div>
    </div>
  }
  renderAttributes() {
    let {content} = this.props.data
    return <div>
      <div> <i className="fas fa-newspaper" ></i>  Attributes</div>
    </div>
  }
  renderUsers() {
    let {content} = this.props.data
    return <div>
      <div> <i className="fas fa-users" ></i>  Users</div>
    </div>
  }


  render () {
    let renderedContent = <div ></div>
    switch (this.props.tab) {
      //Learning
      case "links": renderedContent = this.renderLinks(); break;
      case "procon": renderedContent = this.renderProcon(); break;
      case "stats": renderedContent = this.renderStats(); break;
      case "tips": renderedContent = this.renderTips(); break;
      // case "learningSettings": renderedContent = this.renderLearningSettings(); break;
      //Structure
      case "parts": renderedContent = this.renderParts(); break; 
      case "alternatives": renderedContent = this.renderAlternatives(); break; 
      case "parents": renderedContent = this.renderParents(); break; 
      // case "structureSettings": renderedContent = this.renderStructureSettings(); break;
      //Info
      case "description": renderedContent = this.renderDescription(); break; 
      case "attributes": renderedContent = this.renderAttributes(); break; 
      case "users": renderedContent = this.renderUsers(); break; 
      // case "infoSettings": renderedContent = this.renderInfoSettings(); break; 
    }
    
    return (
      <Wrapper >
        {renderedContent}
      </Wrapper>
    );
  }

}

TopicBarTabElement.propTypes = {

};

export default TopicBarTabElement;
