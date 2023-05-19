import styled from "styled-components";

export default styled.div`
     .carousel_item {
       padding: 16px !important;
     }
     img {
         height: 100%;
         width: 100%;
         vertical-align: middle;
         margin-top: 20px;
     }
     p {
      color: #adb5bd;
      text-align: center;
     }

     @media screen and (max-Width:767px){
       img {
         height: 451px;
         width: 301px;
         
       }
      } 
`