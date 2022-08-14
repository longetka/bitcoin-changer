import NaviLinkStyled from "./NaviLink.styles";

const NaviLink = (props) => {
  return (
    <NaviLinkStyled to={props.link} onClick={props.clickHandler}>
      {props.text}
    </NaviLinkStyled>
  );
};

export default NaviLink;
