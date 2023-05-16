import styled from "styled-components";

export default styled.div`
     width: 350px;
     height: 1516px;
     h1 {
      color: ${(props) => props.theme.colors.TopMovies}; 
     }

     @media screen and  (max-Width:1124px){
      .cinema {
        margin-top: 50px;
      }
    }
      @media screen and  (max-Width:991px){
      .cinema {
        width: 500px;
        margin-left: 200px;
      }
    }
`