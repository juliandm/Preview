import styled from 'styled-components';
import media from "components/Helpers/media.js"

const Wrapper = styled.div`
  border-right: 1px solid #666;
  ${media.giant`width: 60%;`}
  ${media.desktop`width: 100%;`}
  ${media.tablet`width:100%`}
  ${media.phone`width:100%`}
`;


export default Wrapper;
