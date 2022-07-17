import styled from 'styled-components';

const ContainerStyle = styled.div`
    width: 100%;
    height: ${props => props.height};
    display: flex;
    justify-content: center;
    padding: ${props => props.padding};
`;

export default ContainerStyle;
