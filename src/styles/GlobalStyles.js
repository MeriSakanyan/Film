import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.bgcolor};
    box-sizing: border-box;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;    
    /* width: 1920px; */
  }
`