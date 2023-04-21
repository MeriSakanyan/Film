import React, { useState } from 'react'
import Styles from './RightSideStyle'
import { Input, Switch, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { Turn  as Hamburger } from 'hamburger-react'

function RightSide() {
  const [isOpen, setOpen] = useState(false)
  const { t } = useTranslation()

  // Theme 
  let clickedClass = "clicked";
    const body = document.body;
    const  lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    if(localStorage) {
        theme = localStorage.getItem("theme");
        console.log(theme)
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme)
    } else {
        body.classList.add(lightTheme)
    }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
        } else {
            body.classList.replace(lightTheme, darkTheme);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
        }
    };

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
            <Switch size='small' defaultChecked onChange={(e) => switchTheme(e)}
             className={theme === "dark" ? clickedClass : ""}
             id="darkMode"
            /> 
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
            <Switch size='small' defaultChecked onChange={(e) => switchTheme(e)}
             className={theme === "dark" ? clickedClass : ""}
             id="darkMode"
            /> 
            <span className='mode'>{t("header.mode")}</span>
          </div>
          
     </Styles>
  )
}

export default RightSide