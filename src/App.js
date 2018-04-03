import React, { Component } from 'react';
import logo from './logo.svg';
import brand from './images/AMPP_logo.svg'
// import './App.css';
// Components
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Navbar />
          <img src={brand} />
        </div>
      </div>
    );
  }
}

export default App;
