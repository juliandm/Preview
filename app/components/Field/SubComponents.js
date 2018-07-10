import styled from 'styled-components';

export const FloatLabel = styled.span`
    position: absolute;
    display: block;
    pointer-events: none;
    transition: all .2s ease;
    font-size: ${props=>props.focused ? "0.6rem" : "0.875rem"};
    bottom: ${props=>props.focused ? "#22b8eb" : "grey"};
    left: 0;
`;
export const Placeholder = styled.span`
    position: absolute;
    display: block;
    pointer-events: none;
    transition: all .2s ease;
    opacity: ${props=>props.focused ? "0" : "1"};
    color: #445d6e;
    left: 25px;
`;

export const FloatIcon = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    width: 40px;
    pointer-events: none;
    transition: all 0.2s ease;
    color:#445d6e;
    
    left: ${props=>props.focused ? "calc(100% - 40px)" : "0px"};
    opacity: ${props=>props.focused ? "1" : "0.3"};
    
`

export const SearchResultsWrapper = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    color: white;
    transition: all 0.3s ease;
    border-radius: 1px;
    background: ${({expanded})=> expanded?"rgba(68,93,110,0.9)": "transparent"};
    opacity: ${({expanded})=> expanded? "1": "0"};
    z-index: ${({expanded})=> expanded? "200": "-100"};
`
export const SearchResult = styled.div`
    padding: 2px;
    cursor: pointer;
    transition: all 0.02s; 
    display: flex;
    z-index: 2;

    &:hover {
        background: #22b8eb;
    }
`
export const SearchResultHeader = styled.div`
    padding: 2px;
    cursor: pointer;
    transition: all 0.05s;
    font-size: 1.2rem;
`
export const Bar = styled.span`
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
    
    ${({focused,active,warning, error, expandRight})=>`
        ${focused && `
            &:after,&:before {            
                background: #22b8eb;
            }
        `}
        ${focused && `
            &:after {
                width: ${expandRight ? "0%" : "50%"};   
                right: ${expandRight ? "0%" : "50%"};
            }
            &:before {
                width: ${expandRight ? "100%" : "50%"};   
                left: ${expandRight ? "0%" : "50%"};
            }
        }
        `}
        ${warning && `
            &:after, &:before {
                background: #ffa700;
            }
        `}
        ${warning && `
            &:after, &:before {
                background: #eb5815;
            }
        `}
    `}
`;
