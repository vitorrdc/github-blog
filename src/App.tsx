import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { UserProvider } from './context/UserContext'
import { IssuesProvider } from './context/IssuesContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UserProvider>
        <IssuesProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </IssuesProvider>
      </UserProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
