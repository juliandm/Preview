/**
*
* TopicBarTabElement
*
*/

import React from 'react';
// import styled from 'styled-components';
import Wrapper from "./Wrapper"
import H3 from "components/H3"
import A from "components/A"
import TopicBarTabElement from "./TopicBarTabElement"
import RowWrapper from "components/RowWrapper"
export class TopicBarTab extends React.Component {

render () {
  console.log(this.props.dataByTopic)
  return (
    <Wrapper>
      <h3 style={{textAlign:"center"}} onClick={this.props.onDetail}>{this.props.id}</h3>
      <RowWrapper>
        {this.props.dataByTopic.map((tabData,i)=><TopicBarTabElement key={i} id={this.props.id} data={tabData} />)}
      </RowWrapper>
    </Wrapper>
  )
}

}

TopicBarTab.propTypes = {

};

export default TopicBarTab;
