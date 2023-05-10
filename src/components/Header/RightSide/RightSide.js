import React, { useState } from 'react';
import Styles from './RightSideStyle';
import { Input, Switch, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { Turn  as Hamburger } from 'hamburger-react';
import { useNavigate } from 'react-router-dom';

function RightSide({toggleTheme, isDarkThem}) {  
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false)
  const { t } = useTranslation()
  const [isToggled, setIsToggled] = useState(isDarkThem);

  const onToggle =()=>{
    setIsToggled(!isToggled);
    toggleTheme();
  }
  
  const searchSubmitHandler = () => {
    navigate('/search')
  }

  return (
     <Styles>
        <Hamburger toggled={isOpen} toggle={setOpen} />
         {isOpen && 
          <> 
          <div className='search hamburgerelements'>
          <Input  placeholder="Search" type='text' />
          <Button size='small' type="search" onClick={searchSubmitHandler}>{t("header.searchButton")}</Button>
          </div>
          <div className='random hamburgerelements'>
            <span>{t("header.random")}</span>
          </div>
          <div className='switch hamburgerelements'>
            <Switch size='small' checked={isToggled} onChange={onToggle} /> 
            <span className='mode'>{t("header.mode")}</span>
          </div>
          </>
        }

          <div className='search elements'>
            <Input  placeholder="search" type='text' />
            <Button size='small' type="search"  onClick={searchSubmitHandler}>{t("header.searchButton")}</Button>
          </div>
          <div className='random  elements'>
            <span>{t("header.random")}</span>
          </div>
          <div className='switch elements'>
            <Switch size='small' checked={isToggled} onChange={onToggle} />   
            <span className='mode'>{t("header.mode")}</span>
          </div>
     </Styles>
  )
}

export default RightSide