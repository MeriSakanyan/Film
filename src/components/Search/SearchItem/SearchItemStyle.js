import styled from "styled-components";

export default styled.div`
      display: flex;
      margin-top: 24px;
      flex-direction: column;
      .ant-card   {
         display: flex;
         height: 202px;
         width: 540px;
         background-color: ${(props) => props.theme.colors.cardBgColor};
         border: 1px solid ${(props) => props.theme.colors.cardBgColor};
         text-align: 'center';
      }
      img {
         height: 202px;
         border-radius: 0 !important;
      }
      .ant-card-bordered {
          border-radius: 0;
      }
      div.ant-card-meta-title{
         color: ${(props) => props.theme.colors.cardTitleColor};
         padding: 0;
      }
      .ant-card-meta-description {
         color: ${(props) => props.theme.colors.cardDescColor};
      }
      .card_description {
         width: 338px;
         height: 57px;
      }
      p {
         color: ${(props) => props.theme.colors.cardTitleColor};
      }
      .card_rate {
         width: 354px;
         height: 48px;
         margin-top: 40px;
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
         margin: -35px 0 0 auto;
     }
     @media (max-Width:767px){
       .ant-card {
         width: 509px;
       }
     }
`
