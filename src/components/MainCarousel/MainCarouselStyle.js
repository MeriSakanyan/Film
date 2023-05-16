import styled from "styled-components";

export default styled.div`
      overflow: hidden;
      .carousel_container {
         background-color: ${(props) => props.theme.colors.CarouselBgColor} !important;
         box-sizing: border-box;
         min-height: 300px;
      }
      .slick-list {
         width: 100%;
         flex-shrink: 0;
      }
     .slick-prev:before, .slick-next:before {
         display: none;
      } 

      @media screen and (max-Width:767px){
         width: 1000px; 
      } 
`