import styled from 'styled-components';

const OptionStyled = styled.label`
    font-family: var(--font-main);
    font-size: 1rem;
    font-weight: 400;

    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: ${props => props.gap};

    cursor: pointer;
    padding: 0px 10px;
`;

export default OptionStyled;
