import React from 'react'
import styled from 'styled-components'
import BrandLogo from './BrandLogo'
import Particles from './Particles'

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export default class LoadingScreen extends React.Component {
  render () {
    return (
      <Screen>
        <Particles />
        <BrandLogo />
      </Screen>
    )
  }
}
