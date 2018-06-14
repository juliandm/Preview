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

//<TopicBarTabElement key={i} id={this.props.id} data={data} />

export class TopicBarTab extends React.Component {

render () {
  return (
    <Wrapper>
      <BackTitle>{this.props.id}</BackTitle>

    </Wrapper>
  )
}

}

// const mapStateToProps = function (state) {
//   return {
//     dataByTopic: selectTab(state, this.props.id)
//   }
// }.bind(this)

TopicBarTab.propTypes = {

};
// const withConnect = connect(mapStateToProps);
export default TopicBarTab;
