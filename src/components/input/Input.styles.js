import styled from 'styled-components';

const InputStyled = styled.input`
    padding: 14px;
    border-radius: 10px;
    border: 1px solid #646464;
    ${(props) => {
            switch (props.mode) {
                case "column":
                return `
                    margin: 10px 0px;
                `;
                case "bottom":
                return `
                    margin-top: 20px;
                    margin-bottom: 10px;
                `;
                default:
                return `
                    margin: 20px 0px;
                `;
        }
    }}
    outline: none;

    font-family: Montserrat, sans-serif;
    font-size: 16px;
    font-weight: 400;

    width: ${props => props.width};

    &:focus {
        box-shadow: 0px 0px 5px 0px #000000;
    }

`;

export default InputStyled;
