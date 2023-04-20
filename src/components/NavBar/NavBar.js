import React, { useState } from 'react'
import Styles from './NavBarStyle'
import LeftSide from '../LeftSide/LeftSide'
import RightSide from '../RightSide/RightSide'
import Hamburger from 'hamburger-react'

function NavBar() {
  const [isOpen, setOpen] = useState(false)
  return (
    <Styles>
       <LeftSide />
       <RightSide />
       <Hamburger onToggle={toggled => {
          if (toggled) {
            // <LeftSide style={{display: 'block'}}/>
            console.log('menu');
          } else {
            // <LeftSide style={{display: 'none'}}/>
            console.log('menu');
          }
        }} 
        />
    </Styles>
  )
}

export default NavBar

