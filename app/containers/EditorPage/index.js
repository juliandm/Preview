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
import {checkTopic, loadEditorTab, changeTopicName, updateTab} from "./actions"
import {BrowserRouter, withRouter, Route} from "react-router-dom"
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEditorPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Wrapper from "./Wrapper"
import Tile from "components/Tile"
import styled from "styled-components"
import media from "components/Helpers/media.js"
import Input from "components/Input"
import SecondaryNav from "components/SecondaryNav"
import LoadingIndicator from "components/LoadingIndicator"
import NavTab from "components/SecondaryNav/NavTab"
import Button from "components/Button"
import H2 from "components/H2"
import Structure from "./Tabs/Structure"
import Attributes from "./Tabs/Attributes"
import Other from "./Tabs/Other"
import Stats from "./Tabs/Stats"
import Text from "./Tabs/Text"
import NotFound from "containers/NotFoundPage"
import {makeSelectData, makeSelectTopicName,makeSelectTabName, makeSelectNameAlternatives, makeSelectChecking, makeSelectLoading} from "./selectors"

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
  flex-direction: column;
  justify-content: center;
  position: relative;
`
const TabWrapper = styled.div`
  flex:1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  
  ${media.desktop`justify-content: flex-end;`}
  ${media.tablet`justify-content: space-around`}
`
const LargeInput = Input.extend`
margin-left: 5px;
  width: 100%
`
var checkTopicTimeout;
export class EditorPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
    this.renderEditorTab = this.renderEditorTab.bind(this)
  }
  
  renderEditorTab() {
    const key = this.props.tabName  
    const data = this.props.data // Already selected
    switch(key) {
      case "attributes": return <Attributes data={data} />;
      case "other": return <Other data={data} />
      case "stats": return <Stats data={data} />
      case "structure": return <Structure onTabChange={this.props.onTabChange} data={data} />
      case "text": return <Text data={data} />
      default: return   <NotFound />
    }
  }
  render() {
    const {match} = this.props
    return (
      <Wrapper>
        <SecondaryNav>
            <InputWrapper> 
              <LargeInput value={this.props.topicName} onChange={(evt)=>this.props.changeTopicName(evt.target.value)} placeholder="Which topic do you want to edit?" />
              {!this.props.checking ?
                (this.props.topicName.length > 0 && this.props.alternatives) &&
                  <div>
                    <span>Similar: </span> 
                    {this.props.alternatives.map((name)=>
                      <span key={name} ><a href="#" onClick={(e)=>{e.preventDefault(); return this.props.changeTopicName(name,true)}}>{name}</a> </span>  
                    )} 
                  </div>
                  :
                <LoadingIndicator small />
              }
            </InputWrapper>
            <TabWrapper  >
            <NavTab to={`${match.url}/attributes`}>
              <i className="fas fa-address-card" ></i>  Attributes
            </NavTab>
            
            <NavTab  to={`${match.url}/structure`}>
                      
              <i className="fas fa-align-center" ></i>  Structure
            </NavTab>
            <NavTab  to={`${match.url}/stats`}>
              <i className="fas fa-chart-bar" ></i>  Stats
            </NavTab>
            <NavTab  to={`${match.url}/text`}>
              <i className="fas fa-pencil-alt" ></i>  Text
            </NavTab>
            <NavTab  to={`${match.url}/other`}>
              <i className="fas fa-hands-helping" ></i>  Other
            </NavTab>
            </TabWrapper>
        </SecondaryNav>
        
        <Route exact path={`${match.path}/:editorKey`} render={()=>{return !this.props.loading ? this.renderEditorTab(): <LoadingIndicator />} } />
        <Route exact path={`${match.path}/`}  render={()=>
        <div>
          <H2>Pick a way of contributing</H2>
          
          <TileWrapper >
            <Tile to={`${match.url}/attributes`} icon="address-card" title="Attributes" text={<span>You had experience with <b>alternatives</b> to this topic</span>} />
            <Tile to={`${match.url}/structure`} icon="align-center" title="Structure" text={<span>You know about the <b>structure & hierarchy</b> of subtopics</span>} />
            <Tile to={`${match.url}/stats`} icon="chart-bar" title="Stats" text={<span>You know about the <b>importance & workload</b> of subtopics</span>} />
            <Tile to={`${match.url}/text`} icon="pencil-alt" title="Text" text={<span>You have general experience and want to <b> write</b> about it </span>}/>
            <Tile to={`${match.url}/other`} icon="hands-helping" title="Other" text={<span>You want to contribute in another way</span>} />
          </TileWrapper>
          </div>
        }>
        </Route>
        
        
      </Wrapper>
    );
  }
}

EditorPage.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectData(),
  topicName: makeSelectTopicName(),
  tabName: makeSelectTabName(),
  alternatives: makeSelectNameAlternatives(),
  loading: makeSelectLoading(),
  checking: makeSelectChecking(),  
});

function mapDispatchToProps(dispatch) {
  return {
    changeTopicName: (val,direct=false)=>{
      dispatch(changeTopicName(val))
      clearTimeout(checkTopicTimeout)
      if (!direct) {

        if (val.length > 0) {
          checkTopicTimeout = setTimeout(function(){
            dispatch(checkTopic())
          },200)
        }
      } else {
        dispatch(loadEditorTab())        
      }
    },
    onTabChange: (key,newValues)=>dispatch(updateTab(key,newValues))
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'editor', reducer });
const withSaga = injectSaga({ key: 'editor', saga });

export default compose(
  withReducer,
  withConnect,  
  withSaga,
  withRouter
)(EditorPage);
