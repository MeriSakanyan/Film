import styled from "styled-components";

export default styled.div`
        display: flex;
        align-items: center;

.ant-input[type="text"] {
        margin-top: 4px;
        padding: 0.5em;
        border: 0.1px solid white; 
        border-radius: 20px;
        font-family: inherit;
        font-size: 10px;
        height: 34px;
        outline: 0;
        width: 201px;
        background-color: #1b1e20;
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
       font-size:13px;
       color: white;
}

.ant-btn {
       background-color: rgb(254, 121, 0);
       width: 53px;
       height: 30px;
       display: flex;
       align-items: center;
       margin-top: 10px;
       margin-left: 5px;
       border-radius: 7px;
       margin-bottom: 5px;
      
     
span {
        background-color: rgb(254, 121, 0);
        color: white;
        font-size: 13px;
        text-align: center;
      }
}
`

