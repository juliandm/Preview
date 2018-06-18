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
import { compose } from 'redux';
import { connect } from 'react-redux';
import BackTitle from "./BackTitle.js"
import GroupTransition from "components/GroupTransition"
import {selectDataByTab } from "containers/ExplorerPage/selectors.js"
import { createStructuredSelector } from 'reselect';
import {makeSelectDataByTab} from "containers/ExplorerPage/selectors"

//<TopicBarTabElement key={i} id={this.props.id} data={data} />

//topics


export class TopicBarTab extends React.Component {

render () {
  const id = this.props.id
  const calculatedWidth = parseInt(100/this.props.tabEls.length)
  console.log(this.props.tabEls)
  return (
    <Wrapper>
      
      <BackTitle>{this.props.id}</BackTitle>
        <GroupTransition {...this.props} childWrapperStyles={{ float:"left"}} wrapperStyles={{  }} attributes={["height","width","opacity","scale"]} data={[[0,0,0,0.98],[0,0,0,1.2],[100,calculatedWidth,1,1]]} >
          {this.props.tabEls.map((el,i) => 
             <TopicBarTabElement key={this.props.id + this.props.topics[i].id} topic={this.props.topics[i]} tab={this.props.id} data={el} onDetail={()=>{alert("")}}/> 
          )}
        </GroupTransition>
    </Wrapper>
  )
}

}

const mapStateToProps = (state, props)=> {
  return {
    tabEls: selectDataByTab(state, props)
  }
}

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,  
)(TopicBarTab);
