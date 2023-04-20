import React from 'react'
import { Switch } from 'antd';
import Styles from './SwitchModeStyle'
import { useTranslation } from 'react-i18next';

const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

function SwitchMode() {
  const { t } = useTranslation()
  return (
    <Styles>
      <div className='random'><span>{t("random")}</span></div>
     <div>
      <Switch   defaultChecked onChange={onChange} />
      {/* <span className='mode'>{t("mode")}</span> */}
     </div>
    </Styles>
  )
}

export default SwitchMode