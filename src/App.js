import React from 'react'
import Loader from './components/Loader'
import Routes from './routes'

class App extends React.Component {
  state = {
    finishedLoading: true
  }
  render () {
    return this.state.finishedLoading ? <Routes /> : <Loader />
  }
}

export default App
