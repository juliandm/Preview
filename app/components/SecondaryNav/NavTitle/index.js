import React from 'react';
import styled from 'styled-components';


export default function NavTitle({children, ...rest}) {
  var Styled = styled.div`
    transform: rotate(-90deg);
    position: absolute;
    bottom: 0;
  `;
  var Wrapper = styled.div`
position: relative;
width: 40px;
`;
  return (<Wrapper>
    <Styled {...rest}>{children} </Styled>
    </Wrapper>
);
}


