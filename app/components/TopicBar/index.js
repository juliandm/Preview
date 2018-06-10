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
import TopicBarHeader from "./TopicBarHeader/index.js"
import TopicBarNavigation from "./TopicBarNavigation/index.js"
import RowWrapper from "components/RowWrapper"

export class TopicBar extends React.Component {
  mapTopicsToTabs (_tabNames) {
    var _topicsByTab = []

    _tabNames.forEach((tabKey, i)=>{
      
      var dataByTopic = []
      this.props.topics.forEach((topic,j)=>{
        const {data} = topic
        
        if (tabKey in data) {
          dataByTopic.push(data[tabKey])
        }
      })
      
      _topicsByTab.push({"id":tabKey,"dataByTopic": dataByTopic})
    })
    console.log(_topicsByTab);
    
    return _topicsByTab
  }
  renderLearning() {
    const _topicsByTab = this.mapTopicsToTabs(["links", "procon", "stats", "tips", "learningSettings"])
    return _topicsByTab.map(({id,dataByTopic}) => <TopicBarTab dataByTopic={dataByTopic} key={id} id={id} onDetail={()=>{alert("")}}/>)
  }
  renderStructure() {
    const _topicsByTab = this.mapTopicsToTabs(["parts", "alternatives", "parents","structureSettings"])
    return _topicsByTab.map(({id,dataByTopic}) => <TopicBarTab dataByTopic={dataByTopic} key={id} id={id} onDetail={()=>{alert("")}}/>)
  }
  renderInfo() {
    const _topicsByTab = this.mapTopicsToTabs(["description", "attributes", "users","infoSettings"])
    return _topicsByTab.map(({id,dataByTopic}) => <TopicBarTab dataByTopic={dataByTopic} key={id} id={id} onDetail={()=>{alert("")}}/>)
  }
  render () {
    const {match} = this.props
    const MAX_TOPICS_REACHED = this.props.topics.length === 3
    var tabs = {}
    const tabTitle = match.params.topicBarId
    console.log(tabTitle)
    
    switch (tabTitle) {
      case "learning": tabs = this.renderLearning();break;
      case "info": tabs = this.renderInfo();break;      
      case "structure": tabs = this.renderStructure();break;
      default: tabs = this.renderLearning();break;
    }
    return (
      <Wrapper>
        <TopicBarNavigation MAX_TOPICS_REACHED={MAX_TOPICS_REACHED} onAddTopic={this.props.onAddTopic} />
        
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
        {tabs}

        {/* <Route path={`${match.path}/:topicBarId`} render={()=><TopicBarTab data={this.props.topic.data} />} /> */}
      </Wrapper>
    );
  }

}

TopicBar.propTypes = {

};

export default withRouter(TopicBar);
