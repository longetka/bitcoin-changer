import styled from 'styled-components';

const SubtitleStyled = styled.h5`
    font-family: var(--font-main);
    font-size: 1rem;
    font-weight: 400;
    padding: ${props => props.padding};
`;

export default SubtitleStyled;
