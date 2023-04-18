import React from 'react'
import SwitchMode from '../SwitchMode/SwitchMode'
import Styles from './RightSideStyle'
import SearchElement from '../SearchElement/SearchElement'



function RightSide() {
  return (
     <Styles>
      <SearchElement />
      <SwitchMode />   
     </Styles>
    
  
  )
}

export default RightSide