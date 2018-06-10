import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default styled(NavLink)`
font-family: Open Sans,sans-serif;
font-weight: 600;
    font-size: 14px;
    margin: 10px 18px;
    opacity: .7;
    align-items: center;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
  &.active {
opacity: 1;
  }
`;
