import styled from 'styled-components';
import OptionStyled from '../option/Option.styles';
import InputStyled from '../input/Input.styles';

const InputRadioStyled = styled(InputStyled)`
    visibility: hidden;
    ${(props) => {
            switch (props.mode) {
                case 'sent':
                return `
                    &:checked + ${OptionStyled} {
                        background-color: #FFB6B1;
                    }
                `;
                case 'receive':
                return `
                    &:checked + ${OptionStyled} {
                        background-color: #FFF6A9;
                    }
                `;
                default:
                return `

                `
        }
    }}
`;

export default InputRadioStyled;
