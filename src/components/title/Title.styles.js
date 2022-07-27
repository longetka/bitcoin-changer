import styled from 'styled-components';

const TitleStyled = styled.h3`
    font-family: var(--font-main);
    font-size: 1.125rem;
    font-weight: 800;
    background-color: transparent;
    padding: ${props => props.padding};
    text-align: ${props => props.textCenter ? 'center' : ''};
    width: ${props => props.width};
`;

export default TitleStyled;
