import styled from "styled-components";

export default styled.div`
     box-sizing: border-box;
     display: flex;
     flex-direction: row; 
     justify-content: space-between;
     width: 1110px;
     height: 82px; 
     margin: 0 auto;
     padding: 0 !important; 
     align-items: center; 
     @media screen and (max-width: 1023px) {
        width: 930px;
     }
     @media screen and (max-width: 767px) {
        width: 500px;
     }

`
