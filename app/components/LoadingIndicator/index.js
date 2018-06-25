import React from 'react';
import styled from 'styled-components';

import Spinner from "./Spinner"
import styles from "./smallSpinner.css"
// https://projects.lukehaas.me/css-loaders/



const LoadingIndicator = ({small, active=true}) => {
  const Wrapper = styled.div`
    margin: ${!small ? "2em": "0"} auto;
    height: ${!small ? "40px": "20px"};
    width: ${!small ? "40px": "20px"};
    opacity: ${!active ? "0": "1"};
    position: absolute;
  `;

  return <Wrapper>
    {!small ? <Spinner /> : <div className="spinner">
  <div className="double-bounce1"></div>
  <div className="double-bounce2"></div>
</div>}
  </Wrapper>
};

export default LoadingIndicator;
