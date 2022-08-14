import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NaviLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-family: var(--font-main);
  font-size: 1.125rem;
  font-weight: 400;

  padding: 9px 20px;
  border-radius: 2px;

  &.active {
    background-color: #d1fff4;
  }

  ${this}:hover {
    background-color: #d1fff4;
  }

  &:active {
    transform: scale(0.98);
  }

  @media only screen and (min-width: 320px) and (max-width: 500px) {
    width: 100%;
    text-align: center;
  }
`;

export default NaviLinkStyled;
