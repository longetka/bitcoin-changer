import styled from 'styled-components';
import WrapperStyles from '../wrappers/Wrapper.styles';
import MenuButtonStyled from '../menuButton/MenuButton.styles';
import ListStyle from '../list/List.styles';

const NavbarStyled = styled(WrapperStyles)`
    @media only screen and (min-width: 320px) and (max-width: 500px) {
        & ${MenuButtonStyled} {
            display: block;
        }
        & ${ListStyle} {
            display: none;
        }
    }
`;

export default NavbarStyled;
