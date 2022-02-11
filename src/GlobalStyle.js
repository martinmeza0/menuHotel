import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background: #ccc;
        color: #fff;
        font-family: 'IBM Plex Sans Thai Looped', sans-serif;
    }
`;

export default GlobalStyle