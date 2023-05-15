import styled from "styled-components";

export default styled.div`
    width: 253.33px;
    height: 427px;
    .moviesItem_container {
      width: 233.33px;
      margin: 0 auto;
    }
    img {
     height: 335px;
     width: 223px;
     margin: 0 auto;
     transition: all .3s ease;
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

    .ant-rate-star-half,
    .ant-rate-star-full {
      color: rgb(254, 121, 0);
    }
`