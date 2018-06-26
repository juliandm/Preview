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
import LoadingIndicator from "components/LoadingIndicator"

const AttributeRow = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const AttributeLabel = styled.div`
    width: 100%;
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
    flex: 1;
    text-align: center;
    background: black;
    color: white;
    height: 100%;
`
export default class AttributeArea extends React.Component {
  // go through AttributePairs and find same, different and no match 
  renderAttributeRow(attrRow,i) {
    return (
        <AttributeRow key={`${attrRow.name}${i}`} > 
          <AttributeLabel> {attrRow.name} </AttributeLabel>
          <AttributeValuesWrapper>
            {/* <GroupTransition childWrapperStyles={{}} wrapperStyles={{  }} AttributePairs={["opacity","scale"]} data={[[0,0.98],[0,1.2],[1,1]]} > */}
              {attrRow.values.map((value,j) =>
                  <AttributeValue key={`${value}${j}`} id={value}> 
                    {value}
                  </AttributeValue>
              )}
            {/* </GroupTransition>     */}
          
          </AttributeValuesWrapper>
          
        </AttributeRow>
    )
  }
  categorizeAttributePairs(mutableAttributePairsByTopic) {
    var matches = [] // name, values, INdex is number of matches
    const saveAttributePairsByTopic = [...mutableAttributePairsByTopic.map(attr=>[...attr])]
    
    // AttributePairsByTopic = [
    //   [{"value":1, "name": 1}, {"value":1, "name": 2},{"value":1, "name": 3},{"value":1, "name": 4}],
    //   [{"value":2, "name": 2}, {"value":1, "name": 5},{"value":1, "name": 6},{"value":1, "name": 7}],
    //   [{"value":1, "name": 1}, {"value":1, "name": 2}]            
    // ]
    //Find same AttributePairs
    for (let activeTopic of saveAttributePairsByTopic) {
      // Has to be backwards because we are reducing array
      for (let i=activeTopic.length-1; i >=0; --i){
        let activeAttr = activeTopic[i]
        let thisRow = {"name": activeAttr.name, "values":[]}
        let matchCounter = 0
        
        for (let compareTopic of saveAttributePairsByTopic){
          let foundI = compareTopic.findIndex(compareAttr=>compareAttr.name === activeAttr.name)
          let foundEl = compareTopic[foundI]
          // Push to Row
          thisRow.values.push(foundEl ? foundEl.value : false)
          if (foundEl) {
            matchCounter = matchCounter + 1;
            // Remove of array, this also removes from the Topic in the parent loop
            compareTopic.splice(foundI,1)
          }
        }
        thisRow.matchCounter = matchCounter
        matches.push(thisRow)
      }
    }
    matches.sort((a,b)=>b.matchCounter-a.matchCounter)
    return matches
  }
  render () {
    const {AttributePairsByTopic, activeTopicIds, loading} = this.props
    const matches = this.categorizeAttributePairs(AttributePairsByTopic)
    console.log(matches,this.props.AttributePairsByTopic, "Attribute")

    return (
      <Wrapper>
        {loading && <LoadingIndicator />} 
        {matches.map((attrRow,i)=>this.renderAttributeRow(attrRow,i))}
      </Wrapper>
    );
  }

}

