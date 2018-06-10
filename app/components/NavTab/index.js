import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default styled(NavLink)`

  text-transform: capitalize;
  height: 64px;
  color: #445d6e;
  font-weight: 400;
  font-size: 14px;

  line-height: 44px;
  min-width: 100px;
  margin: 0;
  border-radius: 0;
  cursor: pointer;
  margin: 10px;
  padding: 12px 12px;
  text-decoration: none;
  text-align: center;
  transition: background-color .4s cubic-bezier(.25,.8,.25,1),border-color .6s cubic-bezier(.25,.8,.25,1);

  &:hover {

  }

  &.active {
    font-weight: 600;
    color: #1488c6;
    opacity: 1;
    border-bottom: 2px solid #1488c6;
  }
`;
