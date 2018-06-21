import styled from 'styled-components';

const Wrapper = styled.span`
position: relative;
display: block;
color: #eee;

 &:before, :after {
    content: "";
    width: 0;
    bottom: 0;
    height: 2px;
    transition: all .2s ease;
    
    position: absolute;
    background: rgba(0,0,0,0.2);
    background: #254356;
    background: #1488c6;

 }
    ${({focused})=> focused && `
        &:after,&:before {            
            background: #22b8eb;
        }
    `}
    ${({active, expandRight})=> active && `
        &:after {
            width: ${expandRight ? "0%" : "50%"};   
            left: ${expandRight ? "0%" : "50%"};
        }
        &:before {
            width: ${expandRight ? "100%" : "50%"};   
            left: ${expandRight ? "0%" : "50%"};
        }
    }
    `}
    &.warning {
        &:after, &:before {
            background: #ffa700;
        }
    }
    &.error {
        &:after, &:before {
            background: #eb5815;
        }
    }

    

`;

export default Wrapper;
