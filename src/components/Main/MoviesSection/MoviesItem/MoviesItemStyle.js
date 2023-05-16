import styled from "styled-components";

export default styled.div`
      display: flex;
      margin-top: 24px;
      flex-direction: column;
      .ant-card {
         display: flex;
         background-color: ${(props) => props.theme.colors.cardBgColor};
         border:  ${(props) => props.theme.colors.cardBgColor};
         text-align: 'center';
      }
      img {
        /* height: 131px; */
        height: 100%;
        width: 100%;
        border-radius: 0 !important;
      }
      .ant-card-bordered {
        border-radius: 0;
      }
      .ant-card .ant-card-body {
        padding: 7px;
      }
       span, strong{
        color: ${(props) => props.theme.colors.cardTitleColor};
      }
      p{
        color: ${(props) => props.theme.colors.cardDescColor};
      }
      .Top-movies-desc {
        width: 265px;
        display: flex;
        flex-direction: column;
      }
      .vote_average {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: #fe7900;
        color: #EEEEEE;
        font-size: 16px;
        font-weight: 700;
        margin: -30px 20px 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      @media screen and (max-Width:991px){
        margin-top: 50px;
        margin-left: 200px;
        .ant-card {
        width: 510px;
        height: 191px;
      }
      img {
        height: 191px;
        width: 100%;
        border-radius: 0 !important;
      }
      .vote_average {
        margin: 59px -98px 0px auto;
      }
    } 
`
