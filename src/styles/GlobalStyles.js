import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.bgcolor};
    cursor: pointer;
    line-height: 1.5;
    /* font-family: 'Montserrat', 
    sans-serif; */
    /* font-size: 16px;     */
  }
`