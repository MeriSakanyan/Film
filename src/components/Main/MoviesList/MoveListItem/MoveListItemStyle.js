import styled from "styled-components";

export default styled.div`
    /* display: flex;
    flex-direction: column; */
    /* height: 427px; */
    width: 253px;

    img {
     height: 100%;
     width: 233.33px;
     
    }
    
    p {
     color: ${(props) => props.theme.colors.MoviesNameColor};
     text-align: center;
     font-size: 16px;
    }
    .css-dev-only-do-not-override-htwhyh {
     width: 223px;
     font-size: 15px;
     text-align: center;
     margin-top: 8px;
    }

    .ant-rate-star-half,
    .ant-rate-star-full {
      color: red;
    }
    .ant-rate-star-zero {
      color: green;
    }
     @media screen and (max-Width: 991px) {
      img {
        width: 350px
      }
    } 
`