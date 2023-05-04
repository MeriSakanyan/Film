import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.bgcolor};
    box-sizing: border-box;
    cursor: pointer;
  }
`