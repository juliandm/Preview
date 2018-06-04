/**
*
* TopicBarTabElement
*
*/

import React from 'react';
// import styled from 'styled-components';
import Wrapper from "./Wrapper"
import H3 from "components/H3"
function TopicBarTabElement({title,content,onEdit,onDetail,onItem}) {
  return (
    <Wrapper>
      <H3>{title}</H3>
      {content}
    </Wrapper>
  );
}

TopicBarTabElement.propTypes = {

};

export default TopicBarTabElement;
