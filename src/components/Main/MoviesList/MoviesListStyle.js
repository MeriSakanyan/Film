import styled from "styled-components";

export default styled.div`
        width: 760px;
        margin-top: 24px;
       .MoviesList {
           display: flex;
           flex-wrap: wrap;
       }
        .ant-pagination {
           text-align: center;
           margin-top: 24px;
       }
        .css-dev-only-do-not-override-htwhyh {
           width: 730px;
           height: 53px;
       }

        .ant-pagination-item a {
           color: ${(props) => props.theme.colors.paginationColor};
           font-size: 16px;
       }
        .ant-pagination-item-active {
           background-color: #fe7900;
           border-color: #fe7900;
        &:hover {
           border-color: #fe7900;
         }
       }  
       .ant-pagination-item-active a {
           color: white;
           &:hover {
           color: white;
        }
       }
       .ant-select-selector, .ant-pagination-options {
           display: none;
       }
       path {
           color: ${(props) => props.theme.colors.paginationArrowColor};
      }
      .ant-pagination-item-ellipsis {
           color: ${(props) => props.theme.colors.paginationEllipsisColor} !important;
       }
       @media (max-Width:767px){
         width: 750px;
   }
`
