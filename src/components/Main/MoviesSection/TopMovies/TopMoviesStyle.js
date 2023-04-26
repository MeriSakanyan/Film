import styled from "styled-components";

export default styled.div`
           display: flex;
           flex-direction: column;
           justify-content: space-around;
           width: 350px;
           height: 1528px;
     h1 {
      color: ${(props) => props.theme.colors.TopMovies}; 
     }
`