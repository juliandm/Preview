import {css} from 'styled-components';

export default css`
  // flex: 1;
  overflow: hidden; // Hide the Title if it gets too small
  text-transform: capitalize;
  height: 64px;
  color: #445d6e;
  font-weight: 400;
  font-size: 14px;

  line-height: 44px;
  min-width: 70px;
  border-radius: 0;
  cursor: pointer;
  margin: 0 5px;
  padding: 12px 12px;
  text-decoration: none;
  text-align: center;
  transition: all .4s cubic-bezier(.25,.8,.25,1),border-color .6s cubic-bezier(.25,.8,.25,1);

  &:hover {

  }

  &.active {
    // font-weight: 600;
    color: #1488c6;
    opacity: 1;
    border-bottom: 2px solid #1488c6;
  }
`;
