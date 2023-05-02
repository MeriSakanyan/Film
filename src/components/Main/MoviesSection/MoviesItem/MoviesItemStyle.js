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
`
