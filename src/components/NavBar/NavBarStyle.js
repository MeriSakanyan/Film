import styled from "styled-components";

export default styled.div`
     width: 1110px;
     margin: 0 auto;
     display: flex;
     flex-direction: row;
     align-items: center;
     height: 82px;

          .hamburger-react {
          color: rgb(254, 121, 0);
          right: 13%;
     }
          @media (min-Width:1000px){
               .hamburger-react {
                    display: none;
               }
          }
`;
