import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './infracstructure/styles/Globals'
import { theme } from './infracstructure/theme/theme'
import { Home } from './pages/index'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
