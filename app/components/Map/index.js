/**
*
* Sidebar
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import {Route} from "react-router-dom"
import { withRouter } from 'react-router'
import Wrapper from "./Wrapper"
import SecondaryNav from "components/SecondaryNav"
import RowWrapper from "components/RowWrapper"
import NavTab from "components/NavTab"
import Button from "components/Button"
import BarChart from "components/D3/BarChart.js"

export class Map extends React.Component {
    render () {
      
      return (
        <Wrapper>
            <SecondaryNav >


            </SecondaryNav>
            <BarChart />
            
        </Wrapper>
    );
  }

}

Map.propTypes = {

};

export default withRouter(Map);
