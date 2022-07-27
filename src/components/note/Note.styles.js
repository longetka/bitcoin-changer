import styled from 'styled-components';

const NoteStyled = styled.p`
    text-align: center;
    & a, & {
        color: rgba(0, 0, 0, .78);
        font-family: var(--font-main);
        font-size: .75rem;
        font-weight: 400;
    }
`;

export default NoteStyled;
