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
import {makeSelectTopics} from './selectors';

import { compose } from 'redux';
import styled from "styled-components"

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import reducer from './reducer';

import saga from './saga';
import messages from './messages';

import Map from "components/Map"
import Button from "components/Button"
import TopicBar  from "components/TopicBar"

import Wrapper from "./Wrapper"
import { changeTopicName, loadTopicData, addTopic, removeTopic} from './actions';

var topicChangeTimeout = 0

export class ExplorerPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        {/* <FormattedMessage {...messages.header} /> */}
        <Map />
        <TopicBar topics={this.props.topics} onAddTopic={this.props.onAddTopic} onChangeTopic={this.props.onChangeTopic} onRemoveTopic={this.props.onRemoveTopic} />
      </Wrapper>
    );
  }
}

ExplorerPage.propTypes = {
  onChangeTopic: PropTypes.func.isRequired,
  onAddTopic: PropTypes.func.isRequired,
  onRemoveTopic: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  topics: makeSelectTopics(),
});

function mapDispatchToProps(dispatch) {
  return {
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

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'explorer', reducer });

const withSaga = injectSaga({ key: 'explorer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ExplorerPage);
