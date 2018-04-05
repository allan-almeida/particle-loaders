import React from 'react'
import styled, { withTheme } from 'styled-components'
import { media } from '../styles'
import Burger from './Burger'
import brandIcon from '../images/brand/brandIcon.png'

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFF;
  z-index: 2;
  flex-wrap: wrap;
  transition: ${props => props.theme.transitions.navbarScroll};
  padding: ${props => props.scrolled ? `1.5em 12.5vw` : `3em 12.5vw`};
  background: ${props => props.scrolled ? `#FFF` : `transparent`};
  box-shadow: ${props => props.scrolled ? `4px 4px 11px 0 rgba(0,0,0,.14)` : ``};
  ${media.phone`
    box-shadow: 4px 4px 11px 0 rgba(0,0,0,.14);
    padding: 1em 12.5vw;
  `}
`

const List = styled.ul`
  margin: 0;
  display: flex;
  align-items: center;
  list-style: none;
  background: transparent;
  padding-left: 0;
  ${media.phone`
    flex-direction: column;
  `}
`

const ListContainer = styled.div`
  display: block;
  transition: ${props => props.theme.transitions.navbarToggle};
  ${media.phone`
    max-height: ${props => props.visible ? `202px` : `0px`};
    flex-basis: 100%;
    overflow: hidden;
  `}
`

const Toggler = styled.button`
  background: #FFF;
  display: none;
  border: none;
  cursor: pointer;
  outline: none;
  height: 48px;
  ${media.phone`display: block`}
`

const ListItem = styled.li`
  padding-left: 3em;
  ${media.phone`
    padding: 16px 0;
  `}
  > a {
    font-weight: normal;
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`

const Title = styled.h1`
  font-size: 3em;
  font-weight: 100;
`

class Navbar extends React.Component {
  // animate nav so when user scrolls down, background changes from transparent to white, vertical padding reduces
  // and a box shadow appears
  constructor (props) {
    super(props)
    this.state = {
      scrolled: false,
      showMenu: false
    }
  }
  componentDidMount () {
    // Add listener for when user is scrolling
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    // Remove listener for user scrolling
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    // TODO setInterval to not track every change in y pos
    var y = event.target.documentElement.scrollTop || event.target.body.scrollTop
    const trigger = 80
    // change className according to y position
    if (y > trigger) {
      this.switchIn()
    } else {
      this.switchOut()
    }
  }

  switchIn = () => {
    this.setState({
      scrolled: true
    })
  }

  switchOut = () => {
    this.setState({
      scrolled: false
    })
  }

  toggle = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render () {
    return (
      <Container scrolled={this.state.scrolled}>
        <a to='/'>
          <Title>Allan Almeida</Title>
          <img src={brandIcon} alt='brand' />
        </a>
        <Toggler onClick={this.toggle}>
          <Burger animate={this.state.showMenu}/>
        </Toggler>
        <ListContainer visible={this.state.showMenu}>
          <List>
            <ListItem><a>Link 1</a></ListItem>
            <ListItem><a>Link 2</a></ListItem>
            <ListItem><a>Link 3</a></ListItem>
          </List>
        </ListContainer>
      </Container>
    )
  }
}

export default withTheme(Navbar)
