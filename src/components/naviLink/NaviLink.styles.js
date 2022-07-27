import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NaviLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-family: var(--font-main);
    font-size: 1.125rem;
    font-weight: 400;

    padding: 9px 20px;
    border-radius: 2px;

    &.active {
        background-color: #D1FFF4;
    }

    ${this}:hover {
        background-color: #D1FFF4;
    }

    &:active {
        transform: scale(.98);
    }

`;

export default NaviLinkStyled;
