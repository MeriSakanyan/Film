import styled from "styled-components";

export default styled.div`
      margin-top: 24px;
      .ant-card {
         display: flex;
         background-color: ${(props) => props.theme.colors.cardBgColor};
         border:  ${(props) => props.theme.colors.cardBgColor};
      }
      img {
        height: 120px;
        border-radius: 0 !important;
      }
      .ant-card-bordered {
        border-radius: 0;
      }
      .ant-card .ant-card-body {
        padding: 10px;
      }
       span, strong{
        color: ${(props) => props.theme.colors.cardTitleColor};
      }
      p{
        color: ${(props) => props.theme.colors.cardDescColor};
      }
      .Top-movies-desc {
        /* width: 265px; */
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      .vote_average {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: #fe7900;
        color: #EEEEEE;
        font-size: 18px;
        font-weight: 700;
        margin: -16px 0px 0px 215px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: sticky;
      }

       @media screen and (max-Width:991px){
        margin-top: 50px;
        .ant-card {
        width: 100%;
        height: 191px;
      }
      img {
        height: 191px;
      }
      .vote_average {
        display: none;
        
      }
    }  
`
