import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors.bgcolor};
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;    
    line-height: 1.5;
  }
`