import styled from "styled-components";

export default styled.div`
        display: flex;
        justify-content: space-between;
        /* flex: 1 1 150px; */
        align-items: center;
        /* .search {
            display: flex;
            flex-direction: row;
        } */
        /* .ant-input[type="text"] {
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
        } */
       .switch {
           display: flex;
           flex-direction: row;
           align-items: center;
           margin-left: 15px;
        }
       .ant-switch {
           display: flex;
           margin-bottom: 5px;
           align-items: center;
           margin-top: 18px;
           margin-right: 20px;
       .ant-switch-inner {
          background-color: ${(props) => props.theme.colors.switchColor};   
        }
       .ant-switch-handle {
          border-radius: 50px;
          width: 13px;
          height: 13px;
        } 
        }
       .random, .mode {   
          margin-bottom: 10%;
          font-size: 20px;
          color: ${(props) => props.theme.colors.textColor};
          margin-top: 25px;
        }
       .random {
           margin-left: 400px;
           margin-bottom: 18px;
       }
       .hamburger-react {
               color: rgb(254, 121, 0);   
               margin: 0px -125px 32px 0px;
       }
       @media screen and  (max-Width:991px){
               flex-direction: column;
               align-items: flex-end;
               align-content: flex-end;
               float: right;
               margin-top:40px;
               margin-right: 100px;
               .elements {
               display: none;
               } 
               .hamburgerelements{
               display: flex;
               }
        }
        @media (min-Width:991px){
            .hamburger-react {
                 display: none;
             }
             .hamburgerelements{
                 display: block;
             }
             .elements {
                 display: flex;
             }      
         }
`

