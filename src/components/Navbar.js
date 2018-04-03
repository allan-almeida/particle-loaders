import React from 'react'

class Navbar extends React.Component {
  render () {
    return (
      <div className='nav navbar navbar-fixed-top'>
        <div className='navbar-brand'>
          Allan Almeida
        </div>
        <ul className='nav nav-pills'>
          <li>About</li>
          <li>Contact</li>
          <li>Projects</li>
        </ul>
      </div>
    )
  }
}

export default Navbar
