/**
*
* TopicBarInput
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Wrapper from "./Wrapper"
import Input from "./Input"
import Button from "components/Button"


function TopicBarHeader({onRemoveTopic, onChange, ...rest}) {
  console.log("HEADER CALLED")
  return (
    <Wrapper>
        <Input {...rest} onChange={onChange.bind(this)} />
        <Button classType="primary" size="s" className="primary" onClick={onRemoveTopic} >
        <i className="fas fas-3x fa-trash-alt" ></i>
        </Button>
    </Wrapper>
  );
}

TopicBarHeader.propTypes = {

};

export default TopicBarHeader;
