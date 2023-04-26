import './App.css';
import Header from './components/Header/Header'
import MainCarousel from './components/MainCarousel/MainCarousel'
import styled, {ThemeProvider}  from 'styled-components';
import {light, dark} from './Theme/Theme'
import { useState } from 'react';
// import './index.css';
import GlobalStyles from './styles/GlobalStyles';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


function App() {
  const [theme, setTheme] = useState("dark");
  const isDarkThem = theme === "dark";
  const toggleTheme = () => {
    setTheme(isDarkThem ? "light" : "dark");
  }
 
  return (
    <ThemeProvider theme = {isDarkThem ? dark : light}>
         <GlobalStyles />
        <Header toggleTheme = { toggleTheme } isDarkThem = { isDarkThem }/>
        <MainCarousel />
        <Main />
        <Footer />
    </ThemeProvider>
  );
}

export default App;
