import React from 'react'
import { Switch } from 'antd';
import Styles from './SwitchModeStyle'

const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };


function SwitchMode() {
  return (
    <Styles>
      <div className='random'><h3>Random</h3></div>
      <Switch size='small' defaultChecked onChange={onChange} />
      <div className='mode'><h3>Night mode</h3></div>
    </Styles>
  )
}

export default SwitchMode