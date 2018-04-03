import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles'
// Components
import Navbar from './components/Navbar'

class App extends React.Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    )
  }
}

export default App
