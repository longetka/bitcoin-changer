import styled from 'styled-components';

const ListItemStyle = styled.li`
    display: flex;
    align-items: center;
    position: relative;
    padding: ${props => props.padding};
`;

export default ListItemStyle;
