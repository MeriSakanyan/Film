import styled from "styled-components";

export default styled.div`
     box-sizing: border-box;
     width: 100%;
     height: 400px;
     margin: 0 auto;
     margin: 0 auto;
    .slick-prev:before, .slick-next:before {
     color: white;
     font-size: 30px;
     opacity: 0.7;
     color: ${(props) => props.theme.colors.CarouselArrowColor}; 
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