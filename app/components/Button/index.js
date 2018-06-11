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
import A from './A';
import StyledLink from './StyledLink';
import Wrapper from './Wrapper';

function Button({classType="primary",size,cut=false, ...props}) {
  const classes = cn(classType,size)
  // Render an anchor tag
  let button = (
    <A href={props.href} className={classes} onClick={props.onClick}>
      {Children.toArray(props.children)}
    </A>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.to) {
    button = (
      <StyledLink to={props.to} {...props} className={classes}>
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
