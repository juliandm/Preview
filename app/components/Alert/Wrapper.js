import styled from 'styled-components';

const Wrapper = styled.div`
    flex: 1;
    position: relative;
    margin: 6px 5% 6px 5%;
    min-width: 88px;
    line-height: 32px;
    min-height: 32px;
    border: 1px solid transparent;
    border-radius: .1rem;
    text-align: center;
    &.primary {
        color: #004085;
        background-color: #cce5ff;
        border-color: #b8daff;
    }
    &.success {
        color: #155724;
        background-color: #d4edda;
        border-color: #c3e6cb;
    }
    &.danger {
        color: #721c24;
        background-color: #f8d7da;
        border-color: #f5c6cb;
    }
    &.warning {
        color: #856404;
        background-color: #fff3cd;
        border-color: #ffeeba;
    }
    &.info {
        color: #0c5460;
        background-color: #d1ecf1;
        border-color: #bee5eb;
    }
`;

export default Wrapper;
