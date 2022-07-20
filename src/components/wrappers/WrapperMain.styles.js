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
    @media (max-width: 1280px) {
        width: 80%;
    }
`;

export default WrapperMainStyled;
