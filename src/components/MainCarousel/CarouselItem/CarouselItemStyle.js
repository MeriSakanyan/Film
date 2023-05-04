import styled from "styled-components";

export default styled.div`
     img {
        height: 309px;
        width: 206px;
        margin: 15px;
     }
     p {
      color: #adb5bd;
      text-align: center;
     }
     @media (max-Width:991px){
       img {
         height: 249px;
         width: 166px;
       }
        
}
     @media (max-Width:767px){
       img {
         /* height: 527px;
         width: 351px; */
         height: 613px;
         width: 428px;
       }
        
}
`