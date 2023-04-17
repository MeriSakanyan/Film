import React from 'react'
import { Switch } from 'antd';
import Styles from './SwitchModeStyle'

const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };


function SwitchMode() {
  return (
    <Styles>
      <Switch defaultChecked onChange={onChange} />
    </Styles>
  )
}

export default SwitchMode