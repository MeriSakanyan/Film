import React from 'react'
import Styles from './HeaderStyle'
import LeftSide from '../Header/LeftSide/LeftSide'
import RightSide from '../Header/RightSide/RightSide'

function Header() {
  return (
    <Styles>
       <LeftSide />
       <RightSide />
    </Styles>
  )
}

export default Header

