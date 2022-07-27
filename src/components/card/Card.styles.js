import styled from 'styled-components';
import WrapperStyles from '../wrappers/Wrapper.styles';

const CardStyled = styled(WrapperStyles)`
    height: ${props => props.height};
    background-color: rgba(246, 246, 246, .6);
    box-shadow: 0px 0px 10px 0px rgba(156, 156, 156, .5);
    border-radius: 10px;
    padding: 22px;
    ${(props) => {
            switch (props.mode) {
                case 'card':
                return `
                    @media only screen and
                    (min-width: 420px) and
                    (max-width: 767px) {
                        width: 100%;
                    }
                    @media only screen and
                    (min-width: 768px) and
                    (max-width: 1024px) {
                        width: 40%
                    }
                `;
                default:
                return `
                    @media only screen and
                    (min-width: 420px) and
                    (max-width: 767px) {
                        width: 100%;
                        height: 50%;
                    }
                `;
            };
    }}
`;

export default CardStyled;
