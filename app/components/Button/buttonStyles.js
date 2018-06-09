import { css } from 'styled-components';

const buttonStyles = css`
  box-sizing: border-box;
  height: 10px;
  padding: 0.2em 0.25em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #41addd;
  color: #41addd;

  &:active {
    background: #41addd;
    color: #fff;
  }
`;

export default buttonStyles;
