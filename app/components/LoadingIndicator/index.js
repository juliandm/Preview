import React from 'react';
import styled from 'styled-components';

import Spinner from "./Spinner"
import styles from "./smallSpinner.css"
// https://projects.lukehaas.me/css-loaders/

const LoadingWrapper = styled.div`
background: #f7f8f9;
transition: all 0.2s ease;
display: flex;
opacity: ${({active})=>!active ? "0": "1"};
z-index: ${({active})=>!active ? "-100": "10"};
pointer-events: none;
height: 100%; 
justify-content: center;
align-items: center;
width: 100%;
position: absolute;
top: 0;
left: 0;
`
const LoadingIndicator = ({small, active=true}) => {

//margin: ${!small ? "2em": "0"} auto;

const SpinnerWrapper = styled.div`
height: ${!small ? "40px": "20px"};
width: ${!small ? "40px": "20px"};
`;
  return (
    <LoadingWrapper active={active} >
      <SpinnerWrapper>
        {!small ? <Spinner /> : <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>}
      </SpinnerWrapper>
    </LoadingWrapper>)
};

export default LoadingIndicator;
