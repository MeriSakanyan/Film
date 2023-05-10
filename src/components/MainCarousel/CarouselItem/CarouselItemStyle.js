import styled from "styled-components";

export default styled.div`
     img {
         height: 308px;
         width: 205px;
         margin: 0 auto;
     }
     p {
      color: #adb5bd;
      text-align: center;
     }

     @media screen and (max-Width:991px){
       img {
         height: 249px;
         width: 166px;
       }
      }
     @media screen and (max-Width:767px){
       img {
         height: 613px;
         width: 428px;
       }
      }
`