import { css } from 'styled-components';

const styles = css`

    box-sizing: border-box;
    user-select: none;
    position: relative;
    outline: 0;
    display: inline-block;
    align-items: center;
    border-style: solid;
    white-space: nowrap;
    text-align: center;
    font-weight: 700;
    text-decoration: none;
    overflow: hidden;
    transition: background-color .4s cubic-bezier(.25,.8,.25,1),border-color .6s cubic-bezier(.25,.8,.25,1);
    padding: 0 10px;
    min-width: 88px;
    line-height: 32px;
    min-height: 32px;
    border-width: 2px;
    border-radius: 2px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;

  &.primary {
    background-color: #1488c6;
    border-color: #1488c6;

    &:hover {
      background-color: #1798de;
      border-color: #1798de;
    }
  }

  &.s {
    min-width: 0px;
    
  }
  &:active {
    background: #41addd;
    color: #fff;
  }
`;

export default styles;
