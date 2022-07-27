import { createGlobalStyle } from 'styled-components';

const Globals = createGlobalStyle`
    :root {
        --font-main: Montserrat, sans-serif;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 16px;
    }
    body {
        background-color: #F4FBFF;
    }
    
    @media only screen and (min-width: 768px) {
        html {
            font-size: 12px;
    }
    }
`;

export default Globals;
