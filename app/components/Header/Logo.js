import styled from 'styled-components';
import MyFont from './Pacifico-Regular.ttf';

export default styled.a`
  @font-face {
    font-family: Pacifico;
    src: url('${MyFont}') format('opentype');
  }
  font-family: 'Pacifico', cursive;
  font-size: 2rem;
  text-decoration: none;
  color: white;
  padding: 3px;
  text-align: center;
  align-items:center;

`;
