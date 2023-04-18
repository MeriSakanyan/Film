import React from 'react'
// import styled from 'styled-components'
import SelectLanguage from '../SelectLanguage/SelectLanguage'
import Styles from './LeftSideStyle'
import Logo from '../Logo/Logo'

// const Logo = styled.img.attrs(({src}) => ({
//     src: 'https://ifilm-f71a6.web.app/images/ifilm-dark-mode.png',
//     alt: 'Image'
// }))`
//    width: 50px;
//    height: 20px;
//    margin-top: 5px;
// `

function LeftSide() {
  return (
    <Styles>
    <Logo />
    <SelectLanguage />
    </Styles>
  )
}

export default LeftSide