import styled from 'styled-components';

const Wrapper = styled.span`
    position: absolute;
    display: block;
    pointer-events: none;
    transition: all .2s ease;
    font-size: .875rem;
    color: grey;
    bottom: 0.8rem;
    left: 0;
    &.focused {
        color: #22b8eb;
        font-size: .6rem;
        bottom: 2.9rem;
    }

`;

export default Wrapper;
