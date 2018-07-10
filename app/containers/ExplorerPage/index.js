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
import qs from "query-string"

import { compose } from 'redux';
import styled from "styled-components"
import SecondaryNav from "components/SecondaryNav"
import messages from './messages';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import reducer from "./reducer"
import saga from "./saga.js"
import * as selectors from "./selectors.js"
import {search, loadTopics, addTopic, removeTopic} from './actions';
import Button from "components/Button"
import NavTab from "components/SecondaryNav/NavTab"
import NavTitle from "components/SecondaryNav/NavTitle"
import NavSeparator from "components/SecondaryNav/NavSeparator"

import Wrapper from "./Wrapper"
import TopicArea from "./Areas/TopicArea"
import AttributeArea from "./Areas/AttributeArea"
import InfoArea from "./Areas/InfoArea"
import StructureArea from "./Areas/StructureArea"
import SearchInput from "./SearchInput"
import {mainApi} from "services"

var topicChangeTimeout;

export class ExplorerPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
    this.putTopicsInUrl = this.putTopicsInUrl.bind(this)
    this.getTopicsFromUrl = this.getTopicsFromUrl.bind(this)
  }
  putTopicsInUrl() {
    var topicIds = this.props.activeTopicIds || []
    
    this.props.history.push({search: `?${qs.stringify({"t":topicIds},{arrayFormat: 'bracket'})}`})
  }
  getTopicsFromUrl() {
    const {search} = this.props.location
    const parsed = qs.parse(search,{arrayFormat: 'bracket'})
    console.log(parsed)
    parsed.t && parsed.t.forEach((id,i)=>{
      console.log(!this.props.activeTopicIds.includes(id))
      !this.props.activeTopicIds.includes(id) && this.props.onAddTopic({id})
    })
  }
  componentDidMount() {
    //Get Topics from url
    this.getTopicsFromUrl()
    
    // Put Topics in Url
    this.putTopicsInUrl()
   }
  componentDidUpdate(prevProps) {
    //Update Url with new Topics
    if (this.props.changed && !this.props.loading) {
      this.putTopicsInUrl()
      this.props.onLoadTopics()
    }
  }
  render() {
    const MAX_TOPICS_REACHED = this.props.topics.length === 3
    const {match} = this.props
    return (
      <Wrapper>
          <SecondaryNav >
          <SearchInput  
            MAX_TOPICS_REACHED={MAX_TOPICS_REACHED} 
            searchResults={this.props.searchResults}
            onSearch={this.props.onSearch} 
            onAddTopic={this.props.onAddTopic}
            activeTopicIds={this.props.activeTopicIds}
            searching={this.props.searching}
          />
            {/* <div style={{display:"flex",justifyContent:"flex-end",flex:1}}> */}
              {/* <NavTab>
                <i className="fas fa-sitemap" ></i>  Map
              </NavTab>
              <NavTab>
                <i className="fas fa-list-ul" ></i>  List
              </NavTab>
              <NavTab>
                <i className="fas fa-info" ></i>  Info
              </NavTab> */}
            {/* </div> */}
            <div style={{display:"flex",justifyContent:"flex-end"}}>
              <NavTab mini>
                <i className="fas fa-cog" ></i>
              </NavTab>
              <NavTab mini>
                <i className="fas fa-save" ></i>
              </NavTab>
              <NavTab mini>
                <i className="fas fa-share" ></i>
              </NavTab>
            </div>
          </SecondaryNav>


           <div style={{padding: "10px"}} >

          <TopicArea  onRemoveTopic={this.props.onRemoveTopic} topics={this.props.topics} MAX_TOPICS_REACHED={MAX_TOPICS_REACHED} />
             
              <AttributeArea 
                loading={this.props.loading}
                attributesByTopic={this.props.attributes}  
                activeTopicIds={this.props.activeTopicIds} />
              <InfoArea topics={this.props.topics}  />  
              <StructureArea  topics={this.props.topics} />
                           
          </div>
          
      </Wrapper>
    );
  }
}

ExplorerPage.propTypes = {
};

const mapStateToProps = createStructuredSelector({
    topics: selectors.makeSelectTopics(),
    changed: selectors.makeSelectChanged(),    
    attributes: selectors.makeSelectAttributes(),
    activeTopicIds: selectors.makeSelectTopicIds(),
    searching: selectors.makeSelectSearching(),    
    loading: selectors.makeSelectLoading(),        
    searchResults: selectors.makeSelectSearchResults()
})

function mapDispatchToProps(dispatch, props) {
  return {
      onSearch: ()=>{console.log("Search");return dispatch(search())},
      onAddTopic: (id) => dispatch(addTopic(id)),
      onRemoveTopic: (id)=>dispatch(removeTopic(id)) ,
      onLoadTopics: ()=>dispatch(loadTopics()) 
  }
}

const withConnect = connect(mapStateToProps,mapDispatchToProps);
const withReducer = injectReducer({ key: 'explorer', reducer });
const withSaga = injectSaga({ key: 'explorer', saga });

export default compose(
  withReducer,  
  withRouter ,  
  withConnect,
  withSaga,
  
)(ExplorerPage)
