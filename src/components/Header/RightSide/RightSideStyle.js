import styled from "styled-components";

export default styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        flex: 1 1 150px;
        align-items: center;
        .search {
            display: flex;
            flex-direction: row;
        }

        .ant-input[type="text"] {
        margin-top: 7px;
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
       margin-left: 10px;
       border-radius: 7px;
       margin-bottom: 5px;
      
     
span {
        background-color: rgb(254, 121, 0);
        color: white;
        font-size: 13px;
        text-align: center;
      }
}


.switch {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.ant-switch {
        background-color: rgb(254, 121, 0);    
        display: flex;
        margin-top: 2px;
        align-items: center;
        margin-top: 18px;
        margin-right: 20px;
        .css-dev-only-do-not-override-htwhyh .ant-select-single {
            color: red;
        }
    .ant-switch-inner {
        background-color: rgb(254, 121, 0);
        
    }
    .ant-switch-handle {
        background-color: rgb(254, 121, 0);
        border-radius: 50px;
        width: 13px;
        height: 13px;
    
    }
    
    
}
.random, .mode {
    border: 1px solid #1b1e20;
    margin-bottom: 10%;
    font-size: 18px;
    color: white;
    margin-top: 28px;
}
.random {
    margin-left: 400px;
    margin-bottom: 18px;
}

.hamburger-react {
          color: rgb(254, 121, 0);
          right: 13%;
}

@media (max-Width:991px){
        flex-direction: column;
        align-items: flex-end;
        align-content: end;
        float: right;
        margin-top: 170px;
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
        display: none;
    }
    .elements {
        display: flex;
    }      
}
`

