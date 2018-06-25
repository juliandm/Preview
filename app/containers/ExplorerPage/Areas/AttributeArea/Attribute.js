/**
*
* Sidebar
*
*/

import React from 'react';
import styled from 'styled-components';
import GroupTransition from "components/GroupTransition"

const AttributeWrapper = styled.div`
    width: 100%;
    min-height: 80px;
    display: flex;
    flex-direction: column;
`
const AttributeLabel = styled.div`
    width: 100%;
    text-align: center;
    align-items: center;
    padding-left: 5px;
    font-size: 0.8rem;
`
const AttributeValuesWrapper = styled.div`
    flex: 1;
    display: flex; 
    justify-content: space-around;
`
const AttributeValue = styled.div`
    margin: 5px;
    background: black;
    color: white;
    height: 100%;
`
export default class Attribute extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state= {
    //         input: props.name
    //     }
    // }
    
    render () {

        const {name,values, id} = this.props
        const activeValues = values.filter(value=>value.active)
        const calculatedWidth = 100/activeValues.length - 5
        console.log(calculatedWidth)
        return (
            <AttributeWrapper >
              
            <AttributeLabel>{name}</AttributeLabel>
            <AttributeValuesWrapper>
                <GroupTransition childWrapperStyles={{}} wrapperStyles={{  }} attributes={["opacity","scale"]} data={[[0,0.98],[0,1.2],[1,1]]} >
                    {values.map(value=> value.active && 
                        <AttributeValue key={id + value.id} id={value.id}> 
                            {value.name}
                        </AttributeValue>
                    )}
                </GroupTransition>    
            </AttributeValuesWrapper>
            </AttributeWrapper>
    
        )
    }



}

