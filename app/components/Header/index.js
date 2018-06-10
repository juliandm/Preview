import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import Button from "components/Button"
import Wrapper from "./Wrapper"
class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <A href="#">
          Edurata Project
        </A>
        <NavBar>
          <HeaderLink exact to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/explorer">
            <FormattedMessage {...messages.explorer} />
          </HeaderLink>
          <HeaderLink to="/editor">
            <FormattedMessage {...messages.editor} />
          </HeaderLink>
          {this.props.is_authenticated && <Button to="/login" onClick={()=>this.forceUpdate()}>Logout </Button>}
        </NavBar>
      </Wrapper>
    );
  }
}

export default Header;
