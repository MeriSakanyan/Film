import styled from "styled-components";

export default styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;

         .search {
            display: flex;
         }
        .ant-input[type="text"] {
            margin-top: 7px;
            border: 0.1px solid ${(props) => props.theme.colors.InputBorderColor}; 
            border-radius: 20px;
            font-size: 16px;
            height: calc(1.5em + 0.5rem + 2px);
            outline: 0;
            width: 204px;
            background-color: ${(props) => props.theme.colors.inputBgColor};
            color: ${(props) => props.theme.colors.InputTextColor};
        }
        .ant-input[type="text"]:focus {
            outline: 0;
            border-color: rgb(254, 121, 0);
       }
        .ant-input::placeholder {
           font-size:16px;
           color: ${(props) => props.theme.colors.InputTextColor};
           padding: 10px;
        }
       .ant-btn {
           display: inline-block;
           background-color: rgb(254, 121, 0);
           width: 60px;
           height: 30px;
           margin-top: 10px;
           margin-left: 10px;
           margin-bottom: 5px;    
        span {
           background-color: rgb(254, 121, 0);
           color: white;
           font-size: 16px;
        }
        }
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
          font-size: 16px;
          color: ${(props) => props.theme.colors.textColor};
          margin-top: 25px;
        }
       .random {
           margin-left: 400px;
           margin-bottom: 18px;
       }
       .hamburger-react {
               color: rgb(254, 121, 0);   
             
       }



         @media (min-Width:992px){
            .hamburger-react {
                 display: none;
             }       
         } 

                 @media screen and  (max-Width:991px){

                .elements {
               display: none;
               } 
               .hamburgerelements{
               display: flex;
               flex-direction: column;
               align-items: flex-end;
               align-content: flex-end;
               float: right;

               } 
               .hamburger-react {
                margin-left: 270px;
               }
        }

`

