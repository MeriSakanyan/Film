import styled from "styled-components";

export default styled.div`
      display: flex;
      justify-content: space-between;
      width: 1140px;
      margin: 0 auto;
      margin-top: 50px;

     @media (max-Width:1124px){
      width: 900px;
     }

     @media (max-Width:991px){
      width: 700px;
      display: flex;
      flex-direction: column;
      margin-left: 190px;
     }
`