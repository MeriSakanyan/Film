import styled from "styled-components";

export default styled.div`
           /* width: 350px; */
           /* height: 1528px; */
           /* background-color: white; */
           .Top-Movies-header {
             display: flex;
             justify-content: space-between;
           }
     h1 {
      color: ${(props) => props.theme.colors.TopMovies}; 

     }
     .update-btn {
      margin-top: 30px;
      color: ${(props) => props.theme.colors.updateBtnColor};
     }
     .Top_Movies_main {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
     }


`