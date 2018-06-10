import styled from 'styled-components';

const Wrapper = styled.input`

border-radius: 0;
background-color: transparent;
display: block;
font-family: inherit;
font-size: .875rem;
height: 2.3125rem;
padding: .5rem;
width: 100%;
box-sizing: border-box;
transition: border-color .15s linear,background .15s linear;
border: none;
border-bottom: 1px solid #cbcbcb;
margin: 0;
color: #465f77;
outline: none;

&.focused {
color: #555;
    
}

`;

export default Wrapper;
