import React, { useState } from 'react'
import SelectLanguage from '../SelectLanguage/SelectLanguage'
import Styles from './LeftSideStyle'
import Logo from '../Logo/Logo'
import Hamburger from 'hamburger-react'

function LeftSide() {
  const [isOpen, setOpen] = useState(false)
  return (
    <Styles>
         <Logo /><SelectLanguage/>
         {/*<SelectLanguage />
          <Hamburger onToggle={toggled => {
          if (toggled) {
             console.log("open menu")
          } else {
             console.log("close menu")
          }
        }} />  */}
    </Styles>
  )
}

export default LeftSide