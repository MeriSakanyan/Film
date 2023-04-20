import styled from "styled-components";
   
export default styled.div`
display: flex;
align-items: center;
    .ant-select {
        .ant-select-selection-item {
            background-color: #1b1e20;
            /* margin-top: 5px; */
            color: white;
        }

    .ant-select-arrow {
        color: white;
        font-size: 9px;
        /* margin-top: 1px; */
    }
   
    }
   
    .ant-select-single:not(.ant-select-customize-input) .ant-select-selector  {
       background-color: #1b1e20;
       border: none;
       font-size: 15px;
       color: white;
    }   
    @media (max-Width:1000px){
              margin-left: 350px;
          }

          /* @media (max-Width:1000px){
              .ant-select-arrow{
                 font-size: 19px;
              }
          } */
          @media (max-Width:1000px){
            .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
                font-size: 20px;
            }
          }
`