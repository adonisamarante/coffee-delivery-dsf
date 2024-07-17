import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: none;
  }

  body {
    background: ${(props) => props.theme['background-color']};
    color: ${(props) => props.theme['base-title']};
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, textarea, button, span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
