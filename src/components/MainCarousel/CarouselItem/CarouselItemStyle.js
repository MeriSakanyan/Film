import styled from "styled-components";

export default styled.div`
.carousel_item {
  padding: 16px !important;
  margin: 0 auto;
}
     img {
         height: 308px;
         width: 205px;
         vertical-align: middle;
         margin-top: 20px;
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