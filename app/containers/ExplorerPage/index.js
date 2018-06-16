/**
 *
 * ExplorerPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import {MemoryRouter} from "react-router-dom"
import { withRouter, Link } from 'react-router'

import { compose } from 'redux';
import styled from "styled-components"
import SecondaryNav from "components/SecondaryNav"
import messages from './messages';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import reducer from "./reducer"
import saga from "./saga.js"
import {changeActiveTabs} from "./actions";
import {makeSelectActiveTabs,makeSelectTopics} from "./selectors.js"
import { changeTopicName, loadTopicData, addTopic, removeTopic} from './actions';
import Map from "components/Map"
import Button from "components/Button"
import TopicBar  from "containers/TopicBar"
import NavTab from "components/NavTab"
import {makeSelectProcon, makeSelectStats, makeSelectLearningSettings, makeSelectAlternatives, makeSelectStructureSettings, makeSelectDescription, makeSelectAttributes, makeSelectUsers, makeSelectInfoSettings, makeSelectLinks, makeSelectTips, makeSelectParts, makeSelectParents} from "./selectors"

import Wrapper from "./Wrapper"
var topicChangeTimeout;

export class ExplorerPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const MAX_TOPICS_REACHED = this.props.topics.length === 3
    return (<MemoryRouter>
      <Wrapper>
        
          <SecondaryNav >
            <div style={{display:"flex",justifyContent:"flex-start",flex:1}}> 
              <Button disabled={MAX_TOPICS_REACHED} onClick={this.props.onAddTopic}><i className="fas fas-3x fa-plus" ></i> Add Topic</Button>
            </div>
            
            <NavTab onClick={()=>this.props.onChangeActiveTabs(["description", "attributes", "users", "infoSettings"])} to="/info">
              <i className="fas fa-info" ></i>  Info
            </NavTab>
            
            <NavTab onClick={()=>this.props.onChangeActiveTabs(["parts", "alternatives", "parents", "structureSettings"])} to="/structure">
                      
              <i className="fas fa-sitemap" ></i>  Structure
            </NavTab>
            
            <NavTab onClick={()=>this.props.onChangeActiveTabs(["links", "procon", "stats", "tips", "learningSettings"])} to="/learning">
              <i className="fas fa-lightbulb" ></i>  Learning
            </NavTab>
            <NavTab to="/map">
              <i className="fas fa-map" ></i>  Map
            </NavTab>
              
            <NavTab to="/detail">          
              <i className="fas fa-search" ></i>  Detail
            </NavTab>
              <i className="fas fa-search" ></i>
              <i className="fas fa-square-full" ></i>
          </SecondaryNav>
          
          <TopicBar {...this.props} topics={this.props.topics} activeTabs={this.props.activeTabs} />        
        
      </Wrapper>
      </MemoryRouter>
    );
  }
}

ExplorerPage.propTypes = {
 
};

const mapStateToProps = createStructuredSelector({
  topics: makeSelectTopics(),
  activeTabs: makeSelectActiveTabs(),
    //Learning
    links: makeSelectLinks(),
    procon: makeSelectProcon(), 
    stats: makeSelectStats(), 
    tips: makeSelectTips(),
    learningSettings: makeSelectLearningSettings(),
    //Structure
    parts: makeSelectParts(), // shared and unique
    alternatives: makeSelectAlternatives(), 
    parents: makeSelectParents(), 
    structureSettings: makeSelectStructureSettings(),
    //Info
    description: makeSelectDescription(), 
    attributes: makeSelectAttributes(), 
    users: makeSelectUsers(), // experts and mentors
    infoSettings: makeSelectInfoSettings()
})

function mapDispatchToProps(dispatch) {
  return {
      onChangeActiveTabs: (tabs)=>dispatch(changeActiveTabs(tabs)),
      onChangeTopic: (position,name) => {
        clearTimeout(topicChangeTimeout)
        topicChangeTimeout = setTimeout(()=>{
          dispatch(loadTopicData(position))
        }, 1000)
        return dispatch(changeTopicName(position,name))
      },
      onAddTopic: () => {
        return dispatch(addTopic(""))      
      },
      onRemoveTopic: (position) => {
        return dispatch(removeTopic(position))      
      }
  }
}

const withConnect = connect(mapStateToProps,mapDispatchToProps);
const withReducer = injectReducer({ key: 'explorer', reducer });
const withSaga = injectSaga({ key: 'explorer', saga });

export default compose(
  withReducer,  
  withConnect,
  withSaga,
  withRouter  
  
)(ExplorerPage)
