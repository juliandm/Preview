/**
*
* TopicBarInput
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Wrapper from "./Wrapper"
import Button from "components/Button"

// const Input = styled.input`
//   position: absolute:
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 1;
//   font-size: 1.5rem;
//   margin-left: ${({split})=>split}%;
//   padding: 5px;
//   &:focus {
//     outline: none;
//   }
// `
const TopicLabelWrapper = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: ${({split})=>split}%;
  display: flex;
  flex-direction: row;
`
const TopicLabel = styled.div`
  background: #1488c6;
  border-radius: 1px;
  margin: 5px;
  color: white;
  flex:1;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

class TopicInput extends React.Component {
  render() {
    const {maxTopics, topics} = this.props
    const split = topics.length/maxTopics*100
    return (
      <Wrapper>
        <TopicLabelWrapper split={split}>
          {topics.map(({name})=>
            <TopicLabel>
              {name}
            </TopicLabel>
          )}
        </TopicLabelWrapper>  
      </Wrapper>
    );
  }
}


export default TopicInput;
