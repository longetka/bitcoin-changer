import styled from "styled-components";

const ListItemStyle = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: ${(props) => props.padding};
  @media only screen and (min-width: 320px) and (max-width) {
    width: 100%;
  }
`;

export default ListItemStyle;
