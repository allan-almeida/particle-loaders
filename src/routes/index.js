import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles'
// routes
import Home from './Home'

class Routes extends React.Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    )
  }
}

export default Routes
