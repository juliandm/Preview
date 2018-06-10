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
  return (
    <Wrapper>
        <Input {...rest} onChange={onChange.bind(this)} />
        <Button className="primary" onClick={onRemoveTopic} >
        x
        </Button>
    </Wrapper>
  );
}

TopicBarHeader.propTypes = {

};

export default TopicBarHeader;
