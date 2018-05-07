import React from 'react'
import styled from 'styled-components'
import { media } from '../../styles'

const Background = styled.div`
  height: 100vh;
  background: linear-gradient(to left top, #ECE9E6, #FFF);
`

const LeftColumn = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  height: 100%;
  width: ${100 / 3}vw;
  ${media.desktop`
    width: 100vw;
    align-items: center;
  `}
`

const HeroTitle = styled.h1`
  font-size: 3em;
  font-weight: 100;
  margin: 0;
`

const SubTitle = styled.h2`
  font-weight: 100;
`

const MailLink = styled.a`
  text-decoration: none;
  color: black;
`

class Home extends React.Component {
  render () {
    return (
      <Background>
        <LeftColumn>
          <HeroTitle>Allan Almeida</HeroTitle>
          <SubTitle>Web Development</SubTitle>
          <MailLink href="mailto:allan.almeida91@gmail.com?Subject=Contact%20Allan" target="_top">Contact</MailLink>
        </LeftColumn>
      </Background>
    )
  }
}

export default Home
