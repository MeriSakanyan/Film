import styled from "styled-components";

export default styled.div`

overflow: hidden;
     .carousel_container {
           background-color: ${(props) => props.theme.colors.CarouselBgColor} !important;
          box-sizing: border-box;
          /* width: 100%; */
          
    
     min-height: 300px;
     }
    .slick-list {
      width: 100%;
      /* width: 1900px; */
      flex-shrink: 0;
    }
    .slick-prev:before, .slick-next:before {
     /* color: white;
     font-size: 30px;
     opacity: 0.7;
     color: ${(props) => props.theme.colors.CarouselArrowColor};  */
     display: none;
    } 

    @media screen and (max-Width:1023px){
       width: 1023px;
       margin: 0 auto;
    }

    @media screen and (max-Width:767px){
       width: 900px; 
      
    } 
`