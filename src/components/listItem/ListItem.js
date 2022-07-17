import ListItemStyle from './ListItem.styles';

const ListItem = (props) => {
    return (
        <ListItemStyle padding={props.padding}>
            {props.children}
        </ListItemStyle>
    );
};

export default ListItem;
