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

export default class FindArea extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const {findAttributes, proposedAttributes} = this.props
    return (
      <Wrapper>
        {findAttributes.map((props,i)=>
          <Attribute key={props.name + props.values[0]} {...props} />
        )}
        {proposedAttributes.map((props,i)=>
          <Attribute key={props.name + props.values[0]} {...props} />
        )}
        <Attribute name={""} values={[]} />
      </Wrapper>
    );
  }

}

