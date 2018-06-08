import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import {Link} from "react-router-dom"

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <A href="#">
          Edurata Project
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/explorer">
            <FormattedMessage {...messages.explorer} />
          </HeaderLink>
          <HeaderLink to="/editor">
            <FormattedMessage {...messages.editor} />
          </HeaderLink>
          {this.props.is_authenticated && <Link to="/login" >Logout </Link>}
        </NavBar>
      </div>
    );
  }
}

export default Header;
