import './App.css';
import Header from './components/Header/Header'
import MainCarousel from './components/MainCarousel/MainCarousel'
import styled, {ThemeProvider}  from 'styled-components';
import {light, dark} from './Theme/Theme'
import { useState } from 'react';
// import './index.css';

const  Container = styled.div `
background-color: ${(props) => props.theme.colors.bgcolor};
box-sizing: border-box;
`;

function App() {
  const [theme, setTheme] = useState("dark");
  const isDarkThem = theme === "dark";
  const toggleTheme = () => {
    setTheme(isDarkThem ? "light" : "dark");
  }
  
  return (
    <ThemeProvider theme = {isDarkThem ? dark : light}>
      <Container>
        <Header toggleTheme = { toggleTheme } isDarkThem = { isDarkThem }/>
        <MainCarousel />
      </Container>
    </ThemeProvider>
  );
}

export default App;
