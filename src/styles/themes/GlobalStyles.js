import { createGlobalStyle } from 'styled-components'
import { fonts } from '../config/fonts'
import { colors } from '../config/colors'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: ${fonts.primaryFont};
  }
  
  *, *::before, *::after {
          box-sizing: inherit;
  }
  
  ul, li, h1, h2, h3, p, button {
          margin: 0;
          padding: 0;
  }

  ul {
          list-style: none;
  }

  button {
          background: transparent;
          border: 0;
          outline: 0;
  }

  body {
          background: ${colors.backgroundColor};
          min-height: 100vh;
          height: 100%;
          margin: 0 auto;
          max-width: 100%;
          width: 100%;
  }

  #app {
          overflow-x: hidden;
          min-height: 100vh;
  }
`
