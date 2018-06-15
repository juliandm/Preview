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
import Button from "components/Button"
import Input from "components/Input"

function TopicBarHeader({onRemoveTopic, onChange, ...rest}) {
  console.log("HEADER CALLED")
  return (
    <Wrapper>
        <Input {...rest} onChange={onChange.bind(this)} />
        {/* <Input  /> */}
        <Button classType="primary" size="s" className="primary" onClick={onRemoveTopic} >
        <i className="fas fas-3x fa-trash-alt" ></i>
        </Button>
    </Wrapper>
  );
}

TopicBarHeader.propTypes = {

};

export default TopicBarHeader;
