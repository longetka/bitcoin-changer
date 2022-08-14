import React, { useState } from "react";
import NavbarStyled from "./Navbar.styles";
import { List, ListItem, NaviLink } from "../index";
import MenuButton from "../menuButton/MenuButton";

const Navbar = (props) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = (event) => {
    event.preventDefault();
    setToggle(!toggle);
  };

  const navToggleHandler = () => {
    setToggle(false);
  };

  const renderList = props.items.map((item, index) => {
    return (
      <ListItem key={index}>
        <NaviLink
          className="active"
          link={item.link}
          text={item.text}
          clickHandler={navToggleHandler}
        />
      </ListItem>
    );
  });

  return (
    <NavbarStyled width="70%" mt="20px" mb="40px">
      <MenuButton toggleHandler={toggleHandler} />
      <List
        type="none"
        flex
        justify="space-evenly"
        width="100%"
        toggle={toggle}
      >
        {renderList}
      </List>
    </NavbarStyled>
  );
};
export default Navbar;
