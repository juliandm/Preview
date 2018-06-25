/**
*
* Sidebar
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Wrapper from "./Wrapper"
import Attribute from "./Attribute"

export default class AttributeArea extends React.Component {

  render () {
    const {attributes} = this.props
    return (
      <Wrapper>
        {attributes.map((props,i) =>
          <Attribute key={props.name + props.values[0]} {...props} />
        )}
      </Wrapper>
    );
  }

}

