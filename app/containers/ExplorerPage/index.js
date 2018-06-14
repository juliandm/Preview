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
import {MemoryRouter} from "react-router-dom"
import { compose } from 'redux';
import styled from "styled-components"

import messages from './messages';

import Map from "components/Map"
import Button from "components/Button"
import TopicBar  from "containers/TopicBar"

import Wrapper from "./Wrapper"

export class ExplorerPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <MemoryRouter>
          <TopicBar />        
        </MemoryRouter>
        <MemoryRouter>
          <Map />
        </MemoryRouter>
      </Wrapper>
    );
  }
}

ExplorerPage.propTypes = {
 
};


export default ExplorerPage
