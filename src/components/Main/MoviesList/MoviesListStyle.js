import styled from "styled-components";

export default styled.div`
       .MoviesList {
           display: flex;
           flex-wrap: wrap;
           margin-top: 24px;
       }
        .ant-pagination {
           text-align: center;
           margin-top: 24px;
       }
        /* .css-dev-only-do-not-override-htwhyh {
           width: 730px;
           height: 53px;
       } */

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
     
        .anticon-left, .anticon-right  {
           color: ${(props) => props.theme.colors.paginationArrowColor};
      }
  
      .ant-pagination-item-ellipsis {
           color: ${(props) => props.theme.colors.paginationEllipsisColor} !important;
       }
       @media scrren and (max-Width:991px){
     
            width: 600px;
        
      }
`
