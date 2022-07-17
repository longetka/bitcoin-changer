import styled from 'styled-components';

const ButtonStyled = styled.button`
    background-color: #B1FFA5;
    border: none;
    border-radius: 10px;
    padding: ${props => props.padding};
    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-weight: 400;

    margin: ${props => props.margin};

    &:hover {
        background-color: #6EFF56;
        transform: scale(1.02);
        cursor: pointer;
    }

    &:active {
        transform: scale(.97);
    }
`;

export default ButtonStyled;
