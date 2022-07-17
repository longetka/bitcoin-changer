import styled from 'styled-components';

const TitleStyled = styled.h3`
    font-family: Montserrat, sans-serif;
    font-size: 18px;
    font-weight: 800;
    background-color: transparent;
    padding: ${props => props.padding};
    text-align: ${props => props.textCenter ? 'center' : ''};
`;

export default TitleStyled;
