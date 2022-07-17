import styled from 'styled-components';

const Picture = styled.img`
    width: ${props => props.setWidth};
    height: ${props => props.setHeight};

    align-self: ${props => props.align};

    margin: ${props => props.margin};
    z-index: ${props => props.zIndex};
`;

export default Picture;
