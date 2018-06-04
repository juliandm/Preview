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
import { compose } from 'redux';
import styled from "styled-components"

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {makeSelectTopics} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Map from "components/Map"
import TopicBar  from "components/TopicBar"

import Wrapper from "./Wrapper"
import { changeTopicName, loadTopicData } from './actions';

export class ExplorerPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    console.log(this.props.topics)
    return (
      <Wrapper>
        {/* <FormattedMessage {...messages.header} /> */}
        <Map />
        {this.props.topics.map((topic,i)=>slot.name && <TopicBar topic={topic} position={i} onChangeTopic={this.props.onChangeTopic} />)}
        
      </Wrapper>
    );
  }
}

ExplorerPage.propTypes = {
  onChangeTopic: PropTypes.func.isRequired,
  onLoadTopic: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  topics: makeSelectTopics(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeTopic: (position,name) => {
      console.log("ChangeTopic",position,name)
      return dispatch(changeTopicName(position,name))
    },
    onLoadTopic: (position) => dispatch(loadTopicData(position))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'explorerPage', reducer });
const withSaga = injectSaga({ key: 'explorerPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ExplorerPage);
