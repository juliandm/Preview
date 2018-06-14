/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import cn from "classnames"
import Wrapper from './Wrapper';
import styled from 'styled-components';
import {Link} from "react-router-dom";

import styles from './styles';

const A = styled.a`${styles}`;
const StyledLink = styled(Link)`${styles}`;

function Button({classType="primary",size,disabled=false, cut=false, ...props}) {
  const classes = cn(classType,size,{"disabled":disabled})
  // Render an anchor tag
  let button = (
    <A href={props.href} className={classes} onClick={props.onClick}>
      {Children.toArray(props.children)}
    </A>
  );

  // If the Button has a to prop, we want to render a Link
  if (props.to) {
    button = (
      <StyledLink disabled to={props.to} {...props} className={classes}>
        {Children.toArray(props.children)}
      </StyledLink>
    );
  }

  return (
    <Wrapper className={cn({"cut":cut})} >
      {button}
    </Wrapper>
  );
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
