import React from 'react'
import styled from 'styled-components'
import SwitchMode from '../SwitchMode/SwitchMode'
import Styles from './RightSideStyle'




function RightSide() {
  return (
     <Styles>
      <div className='random'>Random</div>
      <SwitchMode />
      <div className='mode'>Night mode</div>
     </Styles>
    
  
  )
}

export default RightSide