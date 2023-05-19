import styled from "styled-components";

export default styled.div`
    width: 253.33px;
    height: 427px;
    margin-top: 10px;
    .moviesItem_container {
      width: 233.33px;
      margin: 0 auto;
      position: absolute;
      z-index: 1;
    }
    img {
     height: 100%;
     width: 100%;
     margin: 0 auto;
     transition: transform 0.3s;
    }
    .moviesItem_container:hover img  {
     transform: scale(1.1);
    }
    p {
     color: ${(props) => props.theme.colors.moviesNameColor};
     text-align: center;
     font-size: 16px;
    }
    .css-dev-only-do-not-override-htwhyh {
     width: 100%;
     font-size: 15px;
     text-align: center;
     margin-top: 8px;
    }
    .ant-rate-star-first, .ant-rate-star-second {
     color:  ${(props) => props.theme.colors.starsRate} !important;
    }
    .ant-rate-star-full {
        .ant-rate-star-first, .ant-rate-star-second{
            color: rgb(254, 121, 0) !important;
        } 
    }
    .ant-rate-star-half {
    .ant-rate-star-first{
        color: rgb(254, 121, 0) !important;
        }
   }
`