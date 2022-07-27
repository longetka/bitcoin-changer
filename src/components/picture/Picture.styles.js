import styled from 'styled-components';

const Picture = styled.img`
    width: ${props => props.setWidth};
    height: ${props => props.setHeight};

    align-self: ${props => props.align};

    margin: ${props => props.margin};
    z-index: ${props => props.zIndex};

    ${(props) => {
            switch (props.mode) {
                case 'logo':
                return `
                    width: 40%;
                `;
                default:
                return ``;
        }
    }}
`;

export default Picture;
