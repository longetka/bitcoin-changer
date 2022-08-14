import ListStyle from "./List.styles";

const List = (props) => {
  return (
    <ListStyle
      type={props.type}
      flex={props.flex}
      column={props.column}
      justify={props.justify}
      width={props.width}
      bg={props.bg}
      borderR={props.borderR}
      mode={props.mode}
      toggle={props.toggle}
    >
      {props.children}
    </ListStyle>
  );
};

export default List;
