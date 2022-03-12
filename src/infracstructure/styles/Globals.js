import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  font-size: 62.5%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  line-height: 1.6;
  font-weight: 300;
  font-family: ${(props) => props.theme.typography.fonts.primaryFont};
  color: ${(props) => props.theme.colors.neutral[100]};
  padding: 3rem;
  min-height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

main {
  width: 90%;
  margin: 0 auto;
}
`
