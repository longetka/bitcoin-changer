import NaviLinkStyled from './NaviLink.styles';

const NaviLink = (props) => {
    return (
        <NaviLinkStyled 
            to={props.link}
        >
            {props.text}
        </NaviLinkStyled>
    );
};

export default NaviLink;
