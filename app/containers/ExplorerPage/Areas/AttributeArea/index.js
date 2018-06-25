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
import GroupTransition from "components/GroupTransition"

const AttributeRow = styled.div`
  flex: 1;
  width: 100%;
`
const AttributeLabel = styled.div`
    width: 100%;
    position:absolute;
    text-align: center;
    align-items: center;
    padding-left: 5px;
    font-size: 0.8rem;
`
const AttributeValuesWrapper = styled.div`
    flex: 1;
    display: flex; 
    justify-content: space-around;
`
const AttributeValue = styled.div`
    margin: 5px;
    background: black;
    color: white;
    height: 100%;
`
export default class AttributeArea extends React.Component {
  // go through attributes and find same, different and no match 
  renderAttributeRow() {
    return (
        <AttributeRow key={activeTopicIds[i]} >  
          <AttributeLabel> {attr.name} </AttributeLabel>
          <AttributeValuesWrapper>
            <GroupTransition childWrapperStyles={{}} wrapperStyles={{  }} attributes={["opacity","scale"]} data={[[0,0.98],[0,1.2],[1,1]]} >
              {attr.values.map((props,i) =>
                  <AttributeValue key={id + value.id} id={value.id}> 
                    {value.name}
                </AttributeValue>
              )}
            </GroupTransition>    
          
          </AttributeValuesWrapper>
          
        </AttributeRow>
    )
  }
  categorizeAttributes(attributesByTopic) {
    var matches = [] // name, values
    var differentAttrs = []
    var noMatchAttrs = []

  }
  render () {
    const {attributesByTopic, activeTopicIds} = this.props
    var sameAttrs = [] // name, values
    var differentAttrs = []
    var noMatchAttrs = []
    
    return (
      <Wrapper>
        {sameAttrs.map((attr,i)=>this.renderAttributeRow())}
        {differentAttrs.map((attr,i)=>this.renderAttributeRow())}
        {noMatchAttrs.map((attr,i)=>this.renderAttributeRow())}
      </Wrapper>
    );
  }

}

