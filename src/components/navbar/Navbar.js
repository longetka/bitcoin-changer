import NavbarStyled from "./Navbar.styles";
import { List, ListItem, NaviLink } from "../index";
import MenuButton from "../menuButton/MenuButton";

const Navbar = (props) => {
  const renderList = props.items.map((item, index) => {
    return (
      <ListItem key={index}>
        <NaviLink className="active" link={item.link} text={item.text} />
      </ListItem>
    );
  });

  return (
    <NavbarStyled width="70%" mt="20px" mb="40px">
      <MenuButton />
      <List type="none" flex justify="space-evenly" width="100%">
        {renderList}
      </List>
    </NavbarStyled>
  );
};
export default Navbar;
