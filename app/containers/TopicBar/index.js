/**
*
* Sidebar
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { withRouter } from 'react-router'

import {Route, MemoryRouter} from "react-router-dom"
import Wrapper from "./Wrapper"
import TopicBarTab from 'components/TopicBarTab/index.js';
import TopicBarHeader from "./TopicBarHeader/index.js"
import RowWrapper from "components/RowWrapper"
import NavTab from "components/NavTab"
import Button from "components/Button"
import { compose } from 'redux';
import {connect } from "react-redux"
import { createStructuredSelector } from 'reselect';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {TransitionMotion, spring, presets} from "react-motion"
import RouteTransition from "components/RouteTransition"
import GroupTransition from "components/GroupTransition"
export class TopicBar extends React.Component {

  willLeave() {
    return {opacity: spring(0)}
  }

  willEnter() {
    return {opacity: spring(0)}
  }
  render () {


    return (
      <Wrapper>

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


        </div>

      </Wrapper>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  

})


// TODO in Zukunft mit active Tabs arbeiten
function mapDispatchToProps(dispatch) {
  return {

  };
}
TopicBar.propTypes = {

};
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  
  withConnect,  
  withRouter
)(TopicBar);
