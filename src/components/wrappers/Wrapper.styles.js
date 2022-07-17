import styled from "styled-components";

const WrapperStyles = styled.div`
    width: ${props => props.width};
    display: ${props => props.flex ? "flex" : "block"};
    flex-direction: ${props => props.column ? "column" : "row"};
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    flex-wrap: ${props => props.wrap ? 'wrap' : 'no-wrap'};
    gap: ${props => props.gap};

    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
`;

export default WrapperStyles;
