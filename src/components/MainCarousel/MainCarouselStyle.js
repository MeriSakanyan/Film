import styled from "styled-components";

export default styled.div`
    box-sizing: border-box;
    /* background-color: ${(props) => props.theme.colors.CarouselBgColor};  */
    width: 1800px;
    height: 400px;
    margin: 0 auto;
    .slick-prev:before, .slick-next:before {
     color: white;
     font-size: 30px;
     opacity: 0.7;
     color: ${(props) => props.theme.colors.CarouselArrowColor};
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