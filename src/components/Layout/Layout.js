import React, { useState } from 'react'
import Header from '../Header/Header';
import MainCarousel from '../MainCarousel/MainCarousel';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import GlobalStyles from '../../styles/GlobalStyles';
import {ThemeProvider}  from 'styled-components';
import {dark, light} from '../../Theme/Theme'
import UniquePage from '../UniquePage/UniquePage';

function Layout({children}) {
    const [theme, setTheme] = useState("dark");
    const isDarkThem = theme === "dark";
    const toggleTheme = () => {
      setTheme(isDarkThem ? "light" : "dark");
    }
   
  return (
    <ThemeProvider theme = {isDarkThem ? dark : light}>
        <GlobalStyles />
        <Header toggleTheme = { toggleTheme } isDarkThem = { isDarkThem }/>
        <MainCarousel/>
        <Main>
            {/* <UniquePage /> */}
            {children}
        </Main>
        {/* <Footer /> */}
    </ThemeProvider>
  )
}

export default Layout