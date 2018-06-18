import React from 'react';
import styled from 'styled-components';

import Spinner from "./Spinner"
// https://projects.lukehaas.me/css-loaders/



const LoadingIndicator = ({small}) => {
  const Wrapper = styled.div`
    margin: ${!small ? "2em": "0"} auto;
    height: ${!small ? "40px": "inherit"};
    
    width: ${!small ? "40px": "inherit"};
    position: relative;
  `;
  return <Wrapper>
    {!small ? <Spinner /> : <div>Loading...</div>}
  </Wrapper>
};

export default LoadingIndicator;
