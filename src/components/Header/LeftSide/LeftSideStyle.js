import styled from "styled-components";

export default styled.div`
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    .ant-select {
      .ant-select-selection-item {
      color: ${(props) => props.theme.colors.languageColor};
      font-size: 16px;
      font-family: Arial;
    }
    .ant-select-arrow {
      color: ${(props) => props.theme.colors.languageColor};
      font-size: 10px;
      height: calc(0em + 0.5rem + 1px);
    }
    }  
    .ant-select-single:not(.ant-select-customize-input) .ant-select-selector  {
      background-color: inherit;
      border: none;
      font-size: 15px;
      color: white;
    }  
    @media screen and  (max-width:991px){
      width: 50%;
      display: flex;
      justify-content: space-between;
    }
`