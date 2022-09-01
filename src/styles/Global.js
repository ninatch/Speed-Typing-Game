import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto Mono', monospace;
        background-color: darkgrey;
    }

    p {
        font-size: 2rem;
        font-weight: 600;
    }

    button {
        font-family: 'Roboto Mono', monospace;
        font-weight: 500;
        margin: 2rem;
        width: 8rem;
        height: 2rem;
        border-radius: 2rem;
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`