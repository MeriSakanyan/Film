import styled from "styled-components";

export default styled.div`
    background-color: ${(props) => props.theme.colors.CarouselBgColor}; 
    width: 1800px;
    height: 400px;
    margin: 0 auto;
    .slick-prev:before, .slick-next:before {
     color: white;
     font-size: 25px;
     opacity: 2.25;
    } 
`