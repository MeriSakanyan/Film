import styled from "styled-components";

export default styled.div`
      overflow: hidden;
      .carousel_container {
         background-color: ${(props) => props.theme.colors.CarouselBgColor} !important;
         box-sizing: border-box;
         
      }
      .slick-list {
         width: 100%;
         flex-shrink: 0;
      }
`