import React from 'react'
import Styles from './RightSideStyle'
import SearchElement from '../SearchElement/SearchElement'
import SwitchMode from '../SwitchMode/SwitchMode'

function RightSide() {
  return (
     <Styles>
      <SearchElement />
      <SwitchMode />   
     </Styles>
  )
}

export default RightSide