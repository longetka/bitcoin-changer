import styled from "styled-components";

const WrapperStyles = styled.div`
    width: ${props => props.width};
    display: ${props => props.flex ? "flex" : "block"};
    flex-direction: ${props => props.column ? "column" : "row"};
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    flex-wrap: ${props => props.wrap ? 'wrap' : 'no-wrap'};
    ${(props) => {
        switch (props.mode) {
            case 'container':
                return `
                    gap: 3.4375rem;
                    
                    @media only screen and
                    (min-width: 420px) and
                    (max-width: 767px) {
                        gap: 1rem;
                        flex-wrap: wrap;
                        justify-content: center;
                    }

                    @media only screen and 
                    (min-width: 768px) and 
                    (max-width: 1023px) {
                        && {
                            gap: 2.143rem;
                            flex-wrap: wrap;
                            justify-content: center;
                        }
                    }
                    @media only screen and (min-width: 1024px) {
                        gap: 2.143rem;
                    }
                `;
            default:
                return ``;
            };
    }};


    margin-top: ${props => props.mt};
    margin-bottom: ${props => props.mb};
`;

export default WrapperStyles;
