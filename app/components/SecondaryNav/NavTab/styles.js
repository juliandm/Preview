import {css} from 'styled-components';

export default css`
  // flex: 1;
  overflow: hidden; // Hide the Title if it gets too small
  text-transform: capitalize;
  height: 64px;
  color: white;
  line-height: 44px;
  min-width: ${({mini})=> !mini ? "70px" : "40px"};
  border-radius: 0;
  cursor: pointer;
  margin: ${({mini})=> !mini ? "0 5px" : "0"};
  padding: ${({mini})=> !mini ? "12px" : "12px 0px"};
  text-decoration: none;
  text-align: center;
  transition: all .1s;

  &:hover {
    color: #1798de;
    border-bottom: 1px solid #1798de;
  }

  &.active {
    // font-weight: 600;
    color: #1488c6;
    opacity: 1;
    border-bottom: 2px solid #1488c6;
  }
`;
