import styled from 'styled-components';

const Wrapper = styled.span`
position: relative;
display: block;
color: #eee;

 &:before, :after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 0;
    position: absolute;
    background: #22b8eb;
    transition: all .2s ease;
 }
 &.focused {
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
    &:after {
        width: 50%;
        right: 50%;
    }
    &:before {
        width: 50%;
        left: 50%;
    }
 }

`;

export default Wrapper;
