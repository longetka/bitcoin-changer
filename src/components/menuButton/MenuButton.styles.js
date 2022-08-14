import styled from 'styled-components';

const MenuButtonStyled = styled.button`
    display: none;
    font-family: var(--font-main);
    font-size: 1.25rem;
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
    padding: 1rem 0;

    &:hover {
        border-bottom: 1px solid black;
    }
`;

export default MenuButtonStyled;
