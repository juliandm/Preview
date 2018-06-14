import styled from 'styled-components';
const Wrapper = styled.div`
  border-left: solid 1px #d7dfe8;
  min-height: 80px;
  transition: all 300ms ease-out;
  &:first-child {
    border-left: none;
  }
`;

export default Wrapper;
