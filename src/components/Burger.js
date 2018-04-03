import React from 'react'
import styled from 'styled-components'

const InlineSvg = styled.svg`
  display: inline-block;
  outline: none;
`
const Top = styled.path`
  transform: rotate(0) translateY(0) translateX(0);
  opacity: 1;
  transform-origin: 18px 5px;
  transition: ${props => props.theme.transitions.navbarToggle};
  transform: ${props => props.move ? `rotate(-45deg) translateY(0em) translateX(0em)` : ``};
`

const Middle = styled.path`
  transform: rotate(0) translateY(0) translateX(0);
  opacity: 1;
  transform-origin: 18px 10px;
  transition: transform 0.35s ease-in-out, opacity 0.15s ease-in-out;
  opacity: ${props => props.move ? 0 : 1};
`

const Bottom = styled.path`
  transform: rotate(0) translateY(0) translateX(0);
  opacity: 1;
  transform-origin: 17px 12px;
  transition: ${props => props.theme.transitions.navbarToggle};
  transform: ${props => props.move ? `rotate(45deg) translateY(0em) translateX(0em)` : ``};
`

export default class Burger extends React.Component {
  render () {
    return (
      <InlineSvg width='25px' height='22px' viewBox='0 0 19 16' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
        <defs>
          <linearGradient x1='0%' y1='3.49499954%' x2='100%' y2='76.4715281%' id='linearGradient-1'>
            <stop stopColor='#3CC7FD' offset='0%' />
            <stop stopColor='#2077FB' offset='100%' />
          </linearGradient>
        </defs>
        <g className='svg-menu-toggle' fill='url(#linearGradient-1)'>
          <Top move={this.props.animate} d='M18.945,1.75 C18.945,2.44 18.445,3 17.828,3 L1.141,3 C0.524,3 0.023,2.44 0.023,1.75 C0.023,1.06 0.523,0.5 1.141,0.5 L17.829,0.5 C18.445,0.5 18.945,1.06 18.945,1.75 Z' id='Shape' />
          <Middle move={this.props.animate} d='M18.923,8 C18.923,8.689 18.422,9.25 17.805,9.25 L1.118,9.25 C0.5,9.25 0,8.689 0,8 C0,7.311 0.5,6.75 1.118,6.75 L17.805,6.75 C18.422,6.75 18.923,7.311 18.923,8 Z' id='Shape' />
          <Bottom move={this.props.animate} d='M18.969,14.25 C18.969,14.939 18.469,15.5 17.852,15.5 L1.164,15.5 C0.547,15.5 0.046,14.939 0.046,14.25 C0.046,13.561 0.546,13 1.164,13 L17.852,13 C18.469,13 18.969,13.561 18.969,14.25 Z' id='Shape' />
        </g>
      </InlineSvg>
    )
  }
}
