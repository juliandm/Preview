import React from 'react';

import Wrapper from './Wrapper';
import Spinner from "./Spinner"
// https://projects.lukehaas.me/css-loaders/
const LoadingIndicator = () => (
  <Wrapper>
    <Spinner />
  </Wrapper>
);

export default LoadingIndicator;
