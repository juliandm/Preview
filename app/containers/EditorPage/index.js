/**
 *
 * EditorPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEditorPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Wrapper from "./Wrapper"
import Tile from "components/Tile"
import MemoryRouter from "react-router-dom"
import styled from "styled-components"
import media from "components/Helpers/media.js"
import Input from "components/Input"
import SecondaryNav from "components/SecondaryNav"
import NavTab from "components/NavTab"
import Button from "components/Button"
import H2 from "components/H2"
const TileWrapper = styled.div`
  position:relative;
  width:100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`
const InputWrapper = styled.div`

  ${media.giant`width: 30%;`}
  ${media.desktop`width: 31%;`}
  ${media.tablet`width: 100%;`}
  ${media.phone`width: 100%;`}
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`
const TabWrapper = styled.div`
  flex:1;
  display: flex;
  justify-content: center;
  ${media.desktop`justify-content: flex-end;`}
  ${media.tablet`justify-content: space-around`}
`
const LargeInput = Input.extend`
margin-left: 5px;
  width: 100%
`

export class EditorPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <SecondaryNav>
            <InputWrapper> 
              <LargeInput placeholder="Which topic do you want to edit?" />
            </InputWrapper>
            <TabWrapper  >
            <NavTab to="/attributes">
              <i className="fas fa-address-card" ></i>  Attributes
            </NavTab>
            
            <NavTab  to="/structure">
                      
              <i className="fas fa-align-center" ></i>  Structure
            </NavTab>
            
            <NavTab  to="/stats">
              <i className="fas fa-chart-bar" ></i>  Stats
            </NavTab>
            <NavTab  to="/text">
              <i className="fas fa-pencil-alt" ></i>  Text
            </NavTab>
            <NavTab  to="/other">
              <i className="fas fa-hands-helping" ></i>  Other
            </NavTab>
            </TabWrapper>
        </SecondaryNav>
        <H2>Pick a way of contributing</H2>
        
        <TileWrapper >
          
          <Tile to="attributes" icon="address-card" title="Attributes" text={<span>You had experience with <b>alternatives</b> to this topic</span>} />
          <Tile to="structure" icon="align-center" title="Structure" text={<span>You know about the <b>structure & hierarchy</b> of subtopics</span>} />
          <Tile to="stats" icon="chart-bar" title="Stats" text={<span>You know about the <b>importance & workload</b> of subtopics</span>} />
          <Tile to="text" icon="pencil-alt" title="Text" text={<span>You have general experience and want to <b> write</b> about it </span>}/>
          <Tile to="other" icon="hands-helping" title="Other" text={<span>You want to contribute in another way</span>} />


        </TileWrapper>
      </Wrapper>
    );
  }
}

EditorPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  editorpage: makeSelectEditorPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'editor', reducer });
const withSaga = injectSaga({ key: 'editor', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EditorPage);
