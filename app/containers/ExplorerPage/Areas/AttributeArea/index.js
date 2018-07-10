/**
*
* Sidebar
*
*/

import React from 'react';
import styled from 'styled-components';
import GroupTransition from "components/GroupTransition"

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import LoadingIndicator from "components/LoadingIndicator"
import Area from "./../Area"
import {renderAttributeRow} from "../SubComponents"


const Wrapper = styled.div`
position: relative;
  width: 100%;
  flex-direction: column;
`;

export default class AttributeArea extends React.Component {
  // go through AttributePairs and find same, different and no match 


  render () {
    const {attributesByTopic, activeTopicIds, loading} = this.props
    console.log(this.props.attributesByTopic, "Attribute")

    return (
      <Area title={"Attributes"} {...this.props} >
        <Wrapper>
          <LoadingIndicator active={this.props.loading} />
          <GroupTransition childWrapperStyles={{}} wrapperStyles={{  }} attributes={["opacity","scale", "height"]} data={[[0,0.98,0],[0,1.2,0],[1,1,50]]} >
            {attributesByTopic.map((attrRow,i)=>renderAttributeRow(attrRow,i))}
          </GroupTransition>
        </Wrapper>
      </Area>
    );
  }

}

