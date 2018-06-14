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
import TopicBarTabElement from "./TopicBarTabElement"
import RowWrapper from "components/RowWrapper"
import {TransitionMotion, spring, presets} from "react-motion"
import {selectTab} from "./selectors"
import { connect } from 'react-redux';
import BackTitle from "./BackTitle.js"
import GroupTransition from "components/GroupTransition"
import {selectTopics, selectDataByTab, selectErrors } from "containers/TopicBar/selectors"
import { createStructuredSelector } from 'reselect';

//<TopicBarTabElement key={i} id={this.props.id} data={data} />

//topics


export class TopicBarTab extends React.Component {

render () {
  const calculatedWidth = parseInt(100/this.props.tabEls.length)
  console.log("ERRORS", this.props.errors, this.props.tabEls)
  
  return (
    <Wrapper>
      
      <BackTitle>{this.props.id}</BackTitle>
        <GroupTransition errorss={this.props.errors} {...this.props} childWrapperStyles={{ float:"left"}} wrapperStyles={{  }} attributes={["height","width","opacity","scale"]} data={[[0,0,0,0.98],[0,0,0,1.2],[100,calculatedWidth,1,1]]} >
          {this.props.tabEls.map((el,i) => !this.props.errors[i] ?               
             <TopicBarTabElement key={this.props.id + this.props.topics[i].id} topic={this.props.topics[i]} tab={this.props.id} data={this.props.data} onDetail={()=>{alert("")}}/> :
             <div key={this.props.id + this.props.topics[i].id}  >
                {this.props.errors[i]}
              </div>
          )}
        </GroupTransition>
    </Wrapper>
  )
}

}

const mapStateToProps = (state, ownProps) => {
  return {
    data: selectDataByTab(state,ownProps)
  }
}

TopicBarTab.propTypes = {

};
const withConnect = connect(mapStateToProps);
export default withConnect(TopicBarTab);
