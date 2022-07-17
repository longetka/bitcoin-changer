import { Wrapper, List, ListItem, NaviLink } from '../index';

const Navbar = (props) => {
    const renderList = props.items.map((item, index) => {
        return (
            <ListItem key={index}>
                <NaviLink className="active" link={item.link} text={item.text} />
            </ListItem>
        )
    });

    return (
        <Wrapper width="70%" mt="20px" mb="40px">
            <List type="none" flex justify="space-evenly" width="100%">
                {renderList}
            </List>
        </Wrapper>
    )
}
export default Navbar;