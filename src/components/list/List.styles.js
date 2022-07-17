import styled from "styled-components";

const ListStyle = styled.ul`
    list-style-type: ${props => props.type};
    display: ${props => props.flex ? 'flex' : 'block'};
    flex-direction: ${props => props.column ? 'column' : 'row'};
    justify-content: ${props => props.justify};
    width: ${props => props.width};
    background-color: ${props => props.bg};
    border-radius: ${props => props.borderR};
    padding: ${props => props.padding};

    ${(props) => {
        switch (props.mode) {
            case 'card':
            return `
                overflow-y: scroll;
                ::-webkit-scrollbar {
                    width: 3px;
                    margin-right: 5px;
                }
                ::-webkit-scrollbar-track {
                    background-color: transparent;
                }
                ::-webkit-scrollbar-thumb {
                    background-color: black;
                    border-radius: 10px;
                }
            `;
            default:
            return ``;
        }
    }}
`;

export default ListStyle;
