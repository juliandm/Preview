/**
*
* Sidebar
*
*/

import React from 'react';
import styled from 'styled-components';
import cn from "classnames"
import Bar from "components/InputBar"
const Wrapper = styled.div`
position: relative;
margin: 0px 5px;
margin-bottom: 10px;
`

const Input = styled.input`
    height: 40px;
    width: 100%;
    font-size: 1.5rem;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    &:focus{
        outline: none;
    }
`
const FloatIcon = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    width: 40px;
    opacity: 0.3;
    pointer-events: none;
    transition: all 0.2s ease;
    left: ${props=>props.focused ? "calc(100% - 40px)" : "0px"};
`

const SearchResultsWrapper = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    color: white;
    transition: all 0.3s ease;
    border-radius: 1px;
    background: ${({expanded})=> expanded?"rgba(68,93,110,0.9)": "transparent"};
    opacity: ${({expanded})=> expanded? "1": "0"};
    pointer-events: ${({expanded})=> expanded?"auto": "none"};
    z-index: 2;
`

const SearchResult = styled.div`
    padding: 2px;
    cursor: pointer;
    transition: all 0.05s;
    &:hover {
        background: #22b8eb;
    }
`
export class SearchInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {focused: false, value: ""}
    }
    render () {
        const {searchResults} = this.props
        const active = this.state.value.length > 0
        const {focused} = this.state 
        return (
            <Wrapper>
                <Input onChange={(e)=>this.setState({value: e.target.value})} onFocus={()=>this.setState({focused: true})} onBlur={()=>this.setState({focused: false})} />
                <FloatIcon focused={focused||active} > <i className="fas fa-search fa-1x" ></i>  </FloatIcon>
                <Bar expandRight focused={focused} active={active||focused} />
                <SearchResultsWrapper expanded={active && focused && this.props.searchResults.length> 0} >
                    {searchResults.map(result=>
                        <SearchResult type={result.type} > {result.value} </SearchResult>
                    )}
                </SearchResultsWrapper>
            </Wrapper>
        );
    }

}

export default SearchInput