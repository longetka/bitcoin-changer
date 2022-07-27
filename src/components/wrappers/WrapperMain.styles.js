import styled from 'styled-components';
import WrapperStyles from './Wrapper.styles';

const WrapperMainStyled = styled(WrapperStyles)`
    width: 90%;
    @media (max-width: 1920px) {
        width: 60%;
    }
    @media (max-width: 1700px) {
        width: 70%;
    }
    @media (max-width: 1450px) {
        width: 75%;
    }
    @media (min-width: 1025px) {
        width: 80%;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        width: 95%;
    }
    @media only screen and (min-width: 420px) and (max-width: 767px) {
        width: 95%;
    }
    
`;

export default WrapperMainStyled;
