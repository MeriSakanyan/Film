import styled from "styled-components";

export default styled.div`
        .search {
            display: flex;
        }
        .ant-input[type="text"] {
            margin-top: 7px;
            border: 0.1px solid ${(props) => props.theme.colors.InputBorderColor}; 
            border-radius: 20px;
            font-family: inherit;
            font-size: 10px;
            height: 34px;
            outline: 0;
            width: 201px;
            background-color: ${(props) => props.theme.colors.inputBgColor};
            color: white;
            user-select: none;
            transition: border-color 0.3s;
            overflow: visible;
        }
        .ant-input[type="text"]:focus {
            outline: 0;
            border-color: rgb(254, 121, 0);
       }
        .ant-input::placeholder {
           font-size:17px;
           color: ${(props) => props.theme.colors.InputTextColor};
           padding: 10px;
        }
       .ant-btn {
           background-color: rgb(254, 121, 0);
           width: 60px;
           height: 30px;
           display: flex;
           align-items: center;
           margin-top: 10px;
           margin-left: 10px;
           margin-bottom: 5px;    
        span {
           background-color: rgb(254, 121, 0);
           color: white;
           font-size: 16px;
           text-align: center;
        }
        }
`