import React from 'react'
import styled from 'styled-components'
import { Container } from '../Container/Container';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
import Styles from './NavBarStyle'

function NavBar() {
  return (
    <Styles>
       <LeftSide />
       <RightSide />
    </Styles>
  )
}

export default NavBar

