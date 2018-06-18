/**
*
* Tile
*
*/

import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom"
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Wrapper from "./Wrapper"
import media from "components/Helpers/media.js"

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: #212121;
  overflow: hidden;
  cursor: pointer;
  outline: 0;
  border: 0;
  border-radius: 1px;
  transition: all 0.2s ease-in-out;
  height: 100px;
  background-color: #1798deba;
  margin-top: 10px;
  ${media.giant`width: 30%;`}
  ${media.desktop`width: 30%;`}
  ${media.tablet`width: 46%;`}
  ${media.phone`width: 96%;`}
  &:hover,
  &:active,
  &.active,
  &:focus,
  &:active:focus,
  &.active:focus {
    background-color: #1488c6;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  &:hover{
    i {
      bottom: 35px;
      right: 35px;
    }
    .text {
      opacity: 1;
    }
    .title {
      opacity: 0;
    }
  }


`

const ContentWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  height: 100%;
  z-index: 2;
  width: 100%;
  transition: all 0.5s;
`

const Icon = styled.i`
  transition: all 0.5s;

  transform: scale(8);
  bottom: 30px;
  right: 30px;
  color: white;
  z-index: 1;
    position: absolute;
    opacity: 0.2;

`
const Title = styled.div`
  position: absolute;
  top:0;
  font-size: 52px;
  text-align: center;
  
  transition: all 0.3s;
  color: #fff;
  text-shadow: 0px 0px 10px #585858;

  
`
const Text = styled.span`
  opacity: 0;
  top: 0;
  font-size: 1.2rem;
  padding: 4.8px;
  color: #fff;
  text-align: center;
  transition: all 0.3s;
`
function Tile(props) {
  return (
      <StyledLink {...props} >
        <Icon className={`fas fa-${props.icon}`} />
        <ContentWrapper>
           <Title className="title" >{props.title} </Title>
           <Text className="text" > {props.text} </Text>
          
          </ContentWrapper>
      </StyledLink>
  );
}

Tile.propTypes = {

};

export default Tile;
