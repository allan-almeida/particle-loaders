import React from 'react'
import styled, { withTheme } from 'styled-components'
import { media } from '../styles'
// import Dropdown from './Dropdown'
import Burger from '../components/Burger'

console.log(media)
// const TRANSITION = `transform 0.2s ease-in-out, opacity 0.2s ease-in-out`
const TRANSITION = `all 400ms cubic-bezier(0.39, 0.575, 0.565, 1)`
const NAVTRANSITION = `all 250ms cubic-bezier(0.39, 0.575, 0.565, 1)`

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
  transition: ${NAVTRANSITION};
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
  transition: ${TRANSITION};
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
    font-family: 'Montserrat', Arial, sans-serif;
    font-size: 14px;
    font-weight: normal;
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
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

  _linkMedium = () => {
    console.info('analytics')
    console.info('link to medium @brightnetwork')
  }

  _linkWhitePaper = () => {
    console.info('analytics')
    console.info('link to whitepaper @brightnetwork')
  }

  _linkTelegram = () => {
    console.info('analytics')
    console.info('link to telegram t.me/brightnetwork')
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
          <h1>brand</h1>
        </a>
        <Toggler onClick={this.toggle}>
          <Burger animate={this.state.showMenu}/>
        </Toggler>
        <ListContainer visible={this.state.showMenu}>
          <List>
            <ListItem><a onClick={this._linkWhitePaper}>Whitepaper</a></ListItem>
            <ListItem><a onClick={this._linkMedium}>Blog</a></ListItem>
          </List>
        </ListContainer>
      </Container>
    )
  }
}

export default withTheme(Navbar)
