import React from 'react'
import Styles from './HeaderStyle'
import LeftSide from '../Header/LeftSide/LeftSide'
import RightSide from '../Header/RightSide/RightSide'

function Header({toggleTheme, isDarkThem}) {
  return (
    <Styles>
       <LeftSide isDarkThem={isDarkThem}/>
       <RightSide  toggleTheme={toggleTheme} isDarkThem={isDarkThem}/>
    </Styles>
  )
}

export default Header

