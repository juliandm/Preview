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
import Map from "components/Map"
import Button from "components/Button"
import NavTab from "components/NavTab"
import Wrapper from "./Wrapper"
import TopicArea from "./Areas/TopicArea"
import AttributeArea from "./Areas/AttributeArea"
import InfoArea from "./Areas/InfoArea"
import StructureArea from "./Areas/StructureArea"
import SearchInput from "./SearchInput"

var topicChangeTimeout;


// Nav responsible for
// Select: Auswahl der Tabs

// Buttons: Add, Share

// Settings: Split Screen


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
    if (prevProps.topics !== this.props.topics) {
      this.putTopicsInUrl()
    }
  }
  render() {
    const MAX_TOPICS_REACHED = this.props.topics.length === 3
    const {match} = this.props
    return (
      <Wrapper>
          <SecondaryNav >
            {/* <div style={{display:"flex",justifyContent:"flex-start",flex:1}}> 
              <Button disabled={MAX_TOPICS_REACHED} onClick={this.props.onAddTopic}><i className="fas fas-3x fa-plus" ></i> Add Topic</Button>
            </div>
             */}
            <NavTab to={{pathname:`${match.url}/attributes`,search:this.props.location.search}}>
              <i className="fas fa-puzzle-piece" ></i>  Attributes
            </NavTab>
            
            <NavTab to={{pathname:`${match.url}/structure`,search:this.props.location.search}}>
                      
              <i className="fas fa-sitemap" ></i>  Structure
            </NavTab>
            
            <NavTab to={{pathname:`${match.url}/info`,search:this.props.location.search}}>
              <i className="fas fa-lightbulb" ></i>  Info
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
          <SearchInput  
            MAX_TOPICS_REACHED={MAX_TOPICS_REACHED} 
            searchResults={this.props.searchResults}
            onSearch={this.props.onSearch} 
            onAddTopic={this.props.onAddTopic}
            activeTopicIds={this.props.activeTopicIds}
            searching={this.props.searching}
          />

           <div>
            <Switch>
              <Route path={`${match.path}/attributes`} render={()=><AttributeArea loading={this.props.loading} attributePairsByTopic={this.props.attributePairs}  activeTopicIds={this.props.activeTopicIds} />} />
              <Route path={`${match.path}/structure`} render={()=><StructureArea  topics={this.props.topics} />} />
              <Route path={`${match.path}/info`} render={()=><InfoArea topics={this.props.topics}  />} />                  
            </Switch>
          </div>
          
          <TopicArea onRemoveTopic={this.props.onRemoveTopic} topics={this.props.topics} MAX_TOPICS_REACHED={MAX_TOPICS_REACHED} />
      </Wrapper>
    );
  }
}

ExplorerPage.propTypes = {
};

const mapStateToProps = createStructuredSelector({
    topics: selectors.makeSelectTopics(),
    attributePairs: selectors.makeSelectAttributePairs(),
    activeTopicIds: selectors.makeSelectTopicIds(),
    searching: selectors.makeSelectSearching(),    
    loading: selectors.makeSelectLoading(),        
    searchResults: selectors.makeSelectSearchResults()
})

function mapDispatchToProps(dispatch, props) {
  return {
      onSearch: ()=>{console.log("Search");return dispatch(search())},
      onAddTopic: (id) => {

        dispatch(addTopic(id))

        dispatch(loadTopics()) 
      },
      onRemoveTopic: (id) => {
        return dispatch(removeTopic(id))      
      },
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
