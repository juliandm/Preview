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
import {MemoryRouter,withRouter, Switch, Route} from "react-router-dom"

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
import {changeSearchAttribute, changeTopicName, loadTopicData, addTopic, removeTopic} from './actions';
import Map from "components/Map"
import Button from "components/Button"
import NavTab from "components/NavTab"
import Wrapper from "./Wrapper"
import TopicArea from "./Areas/TopicArea"
import FindArea from "./Areas/FindArea"
import LearnArea from "./Areas/LearnArea"
import CompareArea from "./Areas/CompareArea"
import SearchInput from "./SearchInput"
var topicChangeTimeout;


// Nav responsible for
// Select: Auswahl der Tabs

// Buttons: Add, Share

// Settings: Split Screen

export class ExplorerPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const MAX_TOPICS_REACHED = this.props.topics.length === 3
    const {match} = this.props
    const attributes = [{name: "Hallo", values:[{"active":true, "name": "trollo"},{"active":false}]},{name: "sdf", values:[{"active":true, "name": "Trollo"},{"active":false}]}]
    const topics = [{name: "Hallo"},{name: "What"}]
    const searchResults = [{"value": "hahaha", type:"attr"},{"value": "fsd", type:"topic"},{"value": "sdf", type:"attrValue"}]
    return (
      <Wrapper>
          <SecondaryNav >
            {/* <div style={{display:"flex",justifyContent:"flex-start",flex:1}}> 
              <Button disabled={MAX_TOPICS_REACHED} onClick={this.props.onAddTopic}><i className="fas fas-3x fa-plus" ></i> Add Topic</Button>
            </div>
             */}
            <NavTab to={`${match.url}/find`}>
              <i className="fas fa-search" ></i>  Find
            </NavTab>
            
            <NavTab to={`${match.url}/compare`}>
                      
              <i className="fas fa-sitemap" ></i>  Compare
            </NavTab>
            
            <NavTab to={`${match.url}/learn`}>
              <i className="fas fa-lightbulb" ></i>  Learn
            </NavTab>
            <div style={{display:"flex",justifyContent:"flex-end",flex:1}}>
            <NavTab mini>
              <i className="fas fa-save" ></i>
            </NavTab>
            <NavTab mini>
              <i className="fas fa-share" ></i>
            </NavTab>
            </div>
          </SecondaryNav>
          <SearchInput searchResults={searchResults} />
          
          <div>
            <Switch>
              <Route path={`${match.path}/find`} render={()=><FindArea findAttributes={attributes} proposedAttributes={attributes} topics={this.props.topics} />} />
              <Route path={`${match.path}/compare`} render={()=><CompareArea attributes={attributes} topics={this.props.topics} />} />
              <Route path={`${match.path}/learn`} render={()=><LearnArea topics={this.props.topics}  />} />                  
            </Switch>
          </div>
          <TopicArea topics={topics} maxTopics={3} />
      </Wrapper>
    );
  }
}

ExplorerPage.propTypes = {
};

const mapStateToProps = createStructuredSelector({
    topics: makeSelectTopics(),
    activeTabs: makeSelectActiveTabs(),
})

function mapDispatchToProps(dispatch) {
  return {
      onChangeSearchAttribute: (id)=>dispatch(changeSearchAttribute(id)),
      // onChangeTopic: (position,name) => {
      //   clearTimeout(topicChangeTimeout)
      //   topicChangeTimeout = setTimeout(()=>{
      //     dispatch(loadTopicData(position))
      //   }, 1000)
      //   return dispatch(changeTopicName(position,name))
      // },
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
