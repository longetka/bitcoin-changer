import MenuButtonStyled from "./MenuButton.styles";

const MenuButton = ({ toggleHandler }) => {
  return (
    <MenuButtonStyled onClick={(e) => toggleHandler(e)}>Меню</MenuButtonStyled>
  );
};

export default MenuButton;
