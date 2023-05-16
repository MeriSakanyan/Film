import styled from "styled-components";

export default styled.div`
      display: flex;
      justify-content: space-between;
      width: 1140px;
      margin: 0 auto;
      margin-top: 50px;

     @media (max-Width:1124px){
      width: 960px;
     }

     @media (max-Width:991px){
      width: 540;
      display: flex;
      flex-direction: column;
      /* margin-left: 190px; */
     }
`


// @media screen and (max-Width:1200px){
//       width: 960px;
//       margin-top: 1000px;
//      }

//      @media screen and  (max-Width:1000px){
//       width: 540px;
//       flex-direction: column;
//       /* margin-left: 190px; */
//      }