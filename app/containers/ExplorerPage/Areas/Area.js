/**
*
* Sidebar
*
*/

import React from 'react';
import styled from 'styled-components';
import cn from "classnames"

const Expanded = styled.div`

`
const TitleBar = styled.div`
    position: absolute;
    z-index: 4;
    left: 0;
    height: 100%;
    background: #254356;
    background: rgba(68,93,110,0.6);
    color: white;

    border-radius: 1px;
    cursor: pointer;
    transition: all ease 0.15s;
    box-shadow: 1px 1px 1px transparent;
    width: ${({expanded})=>expanded ? "100%": "25px"};
    ${({expanded})=>expanded && "box-shadow: #585858 0px 1px 11px 0px"};
    
    overflow: hidden;
    &:hover {
        box-shadow: #585858 0px 1px 11px 0px
    }
`
const Title = styled.div`
font-family: Open Sans,sans-serif;
font-weight: 600;
font-size: 14px;
letter-spacing: 1px;
position: absolute;
transform: translateX(-50%) translateY(-50%) rotate(-90deg);
top: 50%;
left: 12px;
`

const Wrapper = styled.div`
padding-top: 2px;
    position: relative;
    display: flex;
    border-bottom: dotted 1px rgba(68,93,110,0.6);
    margin-bottom: 8px;
`;
const Settings = styled.div`
position: absolute;
left: 25px;
`;
const ChildrenWrapper = styled.div`
margin-left: 25px;
padding: 0 10px;
min-height: 80px;
width: 100%;
transition: all ease 0.2s;
${({blurred})=>blurred && "filter: blur(3px);"}

`;


export default class Area extends React.Component {
    constructor(props) {
        super(props)
        this.state={settingsActive: false}
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({settingsActive: !this.state.settingsActive})
    }
    render () {
        const {children, title} = this.props
        return (<Wrapper>
            <TitleBar expanded={this.state.settingsActive}  onClick={this.handleClick} >
                <Title >{title}</Title>
                <Settings > Hallo</Settings>
            </TitleBar>
            <ChildrenWrapper blurred={this.state.settingsActive} >
                {children}
            </ChildrenWrapper>
            </Wrapper>
        );
    }

}
