import styled from 'styled-components';

const ReceiptLabelStyled = styled.label`
    font-family: var(--font-main);
    font-size: 1rem;
    font-weight: 400;

    display: flex;
    flex-direction: ${props => props.column ? 'column' : 'row'};
    align-items: ${props => props.align};
    flex-wrap: wrap;

    width: ${props => props.width};
`;

export default ReceiptLabelStyled;
