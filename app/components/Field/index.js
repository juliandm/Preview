/**
*
* Input
*
*/

import React from 'react';
import styled from 'styled-components';
import { Field as ReduxField } from 'redux-form'
import {FloatIcon, FloatLabel, Bar, SearchResult, SearchResultHeader, SearchResultsWrapper} from "./SubComponents"
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Wrapper from "./Wrapper"
import Input from "components/Input"
import cn from "classnames"
import Error from "./Error"
import Warning from "./Warning"
import Button from "components/Button"
import LoadingIndicator from "components/LoadingIndicator"
const LoadingWrapper = styled.div`
  right: 0;
  top: 0;
  height: 100%; 
  position: absolute;
  width: 40px;
`
const renderField = ({
  input,
  label,
  icon,
  type,
  expandRight,
  searchResults,
  onAddTopic,
  loading=false,
  meta: { touched, error, warning, active },
  ...rest
}) => {
  const filled = input.value.length > 0 
  return (
  <Wrapper>
    {label && <FloatLabel focused={active||filled} >{label}</FloatLabel>}
    {!loading && icon && <FloatIcon focused={active||filled} > <i className={`fas fa-${icon}`} ></i>  </FloatIcon>}
    <LoadingWrapper > 
      <LoadingIndicator active={loading} small /> 
    </LoadingWrapper>
    <Input {...input} placeholder={""} type={type}  />
    <Bar 
      expandRight={expandRight} 
      focused={active||warning||error} 
      warning={touched && warning}
      error={touched && error} 
    />
    {touched &&
      ((error && <Error>{error}</Error>) ||
        (warning && <Warning>{warning}</Warning>))}
    
    {searchResults &&  <SearchResultsWrapper  expanded={active && searchResults.length > 0} >
          {searchResults.map(result=>
              <SearchResult key={result._id} > <span style={{flex:1}} >{result.name}</span> 
              <Button size="s" disabled={rest.MAX_TOPICS_REACHED||rest.activeTopicIds.includes(result._id)} onClick={()=>{return onAddTopic({id:result._id, name:result.name})} } >+</Button>
              </SearchResult>
          )}
      </SearchResultsWrapper>
   }
  </Wrapper>
)}

function Field(props) {
  return (
      <ReduxField {...props} component={renderField} />
  );
}

export default Field;
