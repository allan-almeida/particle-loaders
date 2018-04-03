import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles'
import Navbar from '../components/Navbar'

class Routes extends React.Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    )
  }
}

export default Routes
