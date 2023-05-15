import styled from "styled-components";

export default styled.div`
     box-sizing: border-box;
     overflow: hidden;
     height: 279px;
     margin: 0 auto;
     margin-top: 50px;
     height: auto;
     background-color:${(props) => props.theme.colors.CarouselBgColor}; 
    .slick-prev:before, .slick-next:before {
      display: none;
    } 
     h1 {
      color: white;
      font-size: 20px;
      padding: 8px 16px;
     }
     img {
      width: 150px;
      height: 225px;
     }
    @media (max-Width:991px){
       width: 1100px;
       margin: 0 auto;
    }
    
    @media (max-Width:767px){
       width: 900px; 
       margin-left: 100px;
    }
`