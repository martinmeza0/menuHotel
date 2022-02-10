import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        /* @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai+Looped:wght@400;600&display=swap'); */
        background: #ccc;
        color: #fff;
        font-family: 'IBM Plex Sans Thai Looped', sans-serif;
    }
`

export default GlobalStyle