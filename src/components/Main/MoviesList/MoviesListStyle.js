import styled from "styled-components";

export default styled.div`
        .MoviesList {
           display: grid;
           grid-template-columns: 1fr 1fr 1fr;
           margin-top: 24px;
         
        }
        .ant-pagination {
           text-align: center;
           margin-top: 24px;
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
        .anticon-left, .anticon-right  {
           color: ${(props) => props.theme.colors.paginationArrowColor};
        }
        .ant-pagination-item-ellipsis {
           color: ${(props) => props.theme.colors.paginationEllipsisColor} !important;
        }

        
        @media screen and (max-Width:1124px){
         .MoviesList {
           grid-template-columns: 1fr 1fr ; 
        }
          .ant-pagination {
            margin-right: 20px;
            padding-right: 70px;
          }
        }
        @media (max-Width:1124px){
          width: 600px;
          margin: 0 auto;
        }
`
