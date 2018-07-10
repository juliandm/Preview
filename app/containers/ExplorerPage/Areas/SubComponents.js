import styled from 'styled-components';
import React from "react"
import GroupTransition from "components/GroupTransition"

export const renderAttributeRow = function (attrRow,i) {
    const calculatedWidth = Math.round(100 / attrRow.values.length);
    return (
        <AttributeRow key={attrRow.key._id} > 
          <AttributeLabel> {attrRow.key.name} </AttributeLabel>
            <GroupTransition childWrapperStyles={{float: "left", padding: "0px 5px" }} wrapperStyles={{flex: 1}} attributes={["opacity","width"]} data={[[0,0],[0,0],[1,calculatedWidth]]} >
              {attrRow.values.map((attrValue,j) =>
                  <AttributeValue key={`${attrValue._id}${j}`}> 
                    {attrValue.value}
                  </AttributeValue>
              )}
            </GroupTransition>    
          
          
        </AttributeRow>
    )
  }
export const AttributeRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const AttributeLabel = styled.div`
    flex:1;
    text-align: center;
    align-items: center;
    background: #e6edf4;
    border-bottom: solid 1px #d7dfe8;
    font-size: 0.9rem;
    font-weight: bold;
`
export const AttributeValue = styled.div`
    text-align: center;
    &:not(:first-child) {
      border-left: 1px dotted #cbcbcb;
    }
`