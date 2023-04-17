import styled from "styled-components";

export default styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      .ant-input[type="text"] {
  margin-top: 8px;
  padding: 0.5em;
  border: 0.1px solid white; 
  border-radius: 20px;
  font-family: inherit;
  font-size: 10px;
  height: 15px;
  outline: 0;
  width: 50%;
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
  font-size: 0.5em;
  text-transform: lowercase;
  color: white;
}

     .ant-btn {
      background-color: rgb(254, 121, 0);
      span {
        background-color: rgb(254, 121, 0);
        color: white;
      }
     }
`

