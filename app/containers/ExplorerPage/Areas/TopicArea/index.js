/**
*
* TopicBarInput
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Button from "components/Button"
import Area from "../Area"
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
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  color: #445d6e;
`

const Topic = styled.div`
  border-radius: 1px;
  margin: 5px;
  flex:1;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:not(:first-child) {
    border-left: 1px dotted #cbcbcb;
  }
`

class TopicInput extends React.Component {
  render() {
    const {maxTopics, topics} = this.props
    // const split = topics.length/maxTopics*100
    return (<Area title={"Topics"} {...this.props} >
      <Wrapper>
          {topics.map(({_id, name})=>
            <Topic key={_id} >
              {name}
              <Button size="s" onClick={()=>this.props.onRemoveTopic(_id)} ><i className="fas fa-trash" ></i> </Button>
            </Topic>
          )}
      </Wrapper>
      </Area>  
    );
  }
}


export default TopicInput;
