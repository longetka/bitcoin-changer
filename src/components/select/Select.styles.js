import styled from 'styled-components';

const SelectStyled = styled.select`
    border: none;
    outline: none;
    padding: 13px 15px;
    border-radius: 10px;
    
    &:focus, &:hover {
        box-shadow: 0 0 6px rgba(0, 0, 0, .6);
    }
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 10px;
        margin: 10px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: black;
    }
`;

export default SelectStyled;
