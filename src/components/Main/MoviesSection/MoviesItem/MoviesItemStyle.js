import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: column;
     .ant-card   {
          display: flex;
          height: 131px;
          width: 350px;
          background-color: ${(props) => props.theme.colors.cardBgColor};
          border: 1px solid ${(props) => props.theme.colors.cardBgColor};
          width: '25%';
         text-align: 'center';
     }
     img {
        height: 131px;
        width: 87px;
        border-radius: 0 !important;
     }
     .ant-card-bordered {
        border-radius: 0;
     }
     .ant-card .ant-card-body {
        padding: 7px;
     }
     div.ant-card-meta-title{
        color: ${(props) => props.theme.colors.cardTitleColor};
     }
     .ant-card-meta-description {
        color: ${(props) => props.theme.colors.cardDescColor};
     }
     .Top-movies-desc {
      width: 265px;
     }
     .vote_average {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #fe7900;
      color: #EEEEEE;
      text-align: center;
      font-size: 16px;
      font-weight: 700;
      margin: 0 0 0 auto;
     }
     @media (max-Width:767px){
      .ant-card {
         width: 509px;
      }
   }
`
