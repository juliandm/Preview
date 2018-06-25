/**
*
* Sidebar
*
*/

import React from 'react';
import styled from 'styled-components';
import cn from "classnames"
import { reduxForm } from 'redux-form'
import Field from "components/Field"
import LoadingIndicator from "components/LoadingIndicator"
const Wrapper = styled.div`
position: relative;
margin: 0px 5px;
margin-bottom: 10px;
`


var timeout;
export class SearchInput extends React.Component {
    constructor(props) {
        super(props)
        this.triggerSearch = this.triggerSearch.bind(this)
    }
    triggerSearch() {
        clearTimeout(timeout)
        timeout = setTimeout(function(){
            this.props.onSearch()
        }.bind(this),800)
    }
    render () {
        const {searching,activeTopicIds, searchResults, MAX_TOPICS_REACHED, onAddTopic, onSearch} = this.props

        return (
            <Wrapper>
                <Field 
                    name="searchInput" 
                    type="search"
                    onChange={(e)=>this.triggerSearch()} 
                    MAX_TOPICS_REACHED={MAX_TOPICS_REACHED}
                    searchResults={searchResults}
                    icon="search"
                    onAddTopic={onAddTopic}
                    activeTopicIds={activeTopicIds}
                    loading={searching}
                />
            </Wrapper>
        );
    }

}

const withReduxForm = reduxForm({
    form:"explorerSearch"
  })
export default withReduxForm(SearchInput)