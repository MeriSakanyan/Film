import styled from "styled-components";

export default styled.div`
      display: flex;
      justify-content: space-between;
      width: 1200px;
      height: 3050px;
      margin: 0 auto;
      margin-top: 50px;
      @media (max-Width:991px){
      display: flex;
      justify-content: space-between;
      width: 1000px;
      height: 3050px;
      margin: 0 auto;
      margin-top: 50px;
        
}
@media (max-Width:767px){
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 900px;
      height: 3050px;
      margin-left: 200px;
      margin-top: 1800px;
}
 @media (max-Width: 767px){
      .MoviesList {
            margin-left: 100px;
      }
 }
`