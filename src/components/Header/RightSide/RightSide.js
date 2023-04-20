import React, { useState } from 'react'
import Styles from './RightSideStyle'
import { Input, Switch, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { Turn  as Hamburger } from 'hamburger-react'

const onChangeTheme = (checked) => {
  console.log(`switch to ${checked}`);
};


function RightSide() {
  const [isOpen, setOpen] = useState(false)
  const { t } = useTranslation()
  return (
     <Styles>
        <Hamburger toggled={isOpen} toggle={setOpen} />
         {isOpen && 
          <> 
          <div className='search hamburgerelements'>
              <Input  placeholder="search" type='text' />
              <Button size='small' type="search">{t("header.searchButton")}</Button>
          </div>
          <div className='random hamburgerelements'>
            <span>{t("header.random")}</span>
          </div>
          <div className='switch hamburgerelements'>
            <Switch size='small' defaultChecked onChange={onChangeTheme} />
            <span className='mode'>{t("header.mode")}</span>
          </div>
          </>
        }

          <div className='search elements'>
              <Input  placeholder="search" type='text' />
              <Button size='small' type="search">{t("header.searchButton")}</Button>
          </div>
          <div className='random  elements'>
            <span>{t("header.random")}</span>
          </div>
          <div className='switch elements'>
            <Switch size='small' defaultChecked onChange={onChangeTheme} />
            <span className='mode'>{t("header.mode")}</span>
          </div>
          
     </Styles>
  )
}

export default RightSide