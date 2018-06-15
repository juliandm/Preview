/**
*
* Sidebar
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import {Route, MemoryRouter} from "react-router-dom"
import { withRouter } from 'react-router'
import Wrapper from "./Wrapper"
import TopicBarTab from 'components/TopicBarTab/index.js';
import TopicBarHeader from "./TopicBarHeader/index.js"
import SecondaryNav from "components/SecondaryNav"
import RowWrapper from "components/RowWrapper"
import NavTab from "components/NavTab"
import Button from "components/Button"
import { compose } from 'redux';
import {connect } from "react-redux"
import { createStructuredSelector } from 'reselect';
import { changeTopicName, loadTopicData, addTopic, removeTopic, changeActiveTabs} from './actions';
import reducer from "./reducer.js"
import saga from "./saga.js"
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {TransitionMotion, spring, presets} from "react-motion"
import RouteTransition from "components/RouteTransition"
var topicChangeTimeout = 0
import GroupTransition from "components/GroupTransition"
import {makeSelectErrors, makeSelectTopics, makeSelectActiveTabs,makeSelectProcon, makeSelectStats, makeSelectLearningSettings, makeSelectAlternatives, makeSelectStructureSettings, makeSelectDescription, makeSelectAttributes, makeSelectUsers, makeSelectInfoSettings, makeSelectLinks, makeSelectTips, makeSelectParts, makeSelectParents} from "./selectors"
export class TopicBar extends React.Component {

  willLeave() {
    return {opacity: spring(0)}
  }

  willEnter() {
    return {opacity: spring(0)}
  }
  render () {
    const {match} = this.props
    const MAX_TOPICS_REACHED = this.props.topics.length === 3

    return (
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
            
          </SecondaryNav>
        <div style={{padding: "10px"}} >
          <RowWrapper>
            {this.props.topics.map((topic,i)=> <TopicBarHeader
              key={i}
              name="chooseTopic"
              type="text"
              placeholder="Hello"
              value={topic.name}
              onRemoveTopic={()=>this.props.onRemoveTopic(i)}
              onChange={(evt)=>{this.props.onChangeTopic(i,evt.target.value)}}
            />)}
          </RowWrapper>

            {/* <GroupTransition attributes={["height","opacity","scale"]} data={[[0,0,0.98],[0,0,1.2],[100,1,1]]}  > */}
              {this.props.activeTabs.map((title,i) =>
                <TopicBarTab topics={this.props.topics} errors={this.props.errors} key={title} id={title} tabEls={this.props[title]} onDetail={()=>{alert("")}}/>
              )}
            {/* </GroupTransition> */}

          {/* <div> {this.props.activeTabs.map((title,i) => <TopicBarTab key={title} id={title} dataByTopic={this.props[title]} onDetail={()=>{alert("")}}/>)} </div> */}

        </div>

        {/* <Route path={`${match.path}/:topicBarId`} render={()=><TopicBarTab data={this.props.topic.data} />} /> */}
      </Wrapper>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  topics: makeSelectTopics(),
  
  errors: makeSelectErrors(),  
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


// TODO in Zukunft mit active Tabs arbeiten
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
  };
}
TopicBar.propTypes = {

};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'explorer', reducer });

const withSaga = injectSaga({ key: 'explorer', saga });

export default compose(
  withReducer,  
  withSaga,
  withRouter,
  
  withConnect,
  
)(TopicBar);
