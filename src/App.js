import './App.css';
import Header from './components/Header/Header'
import MainCarousel from './components/MainCarousel/MainCarousel'
import {ThemeProvider}  from 'styled-components';
import {light, dark} from './Theme/Theme'
import { useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import FilmDetails from './components/FilmDetails/FilmDetails';
import { Routes, Route } from 'react-router-dom';

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
        <MainCarousel/>
        <Main />
        {/* <FilmDetails /> */}
        <Footer />
    </ThemeProvider>
  );
}

export default App;
