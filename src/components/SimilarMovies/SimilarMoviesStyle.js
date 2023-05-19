import styled from "styled-components";

export default styled.div`
     box-sizing: border-box;
     margin-top: 10px;
     background-color:${(props) => props.theme.colors.SimilarMoviesBgColor}; 
    .slick-prev:before, .slick-next:before {
      display: none;
    } 
     h1 {
      color: white;
      font-size: 20px;
      padding: 16px 16px 0px;
     }

     img {
      width: 100%;
      height: 100%;
     }
`