import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: column;
    height: 426px;
    width: 253px;
   img {
    height: 335px;
    width: 233.33px;
    margin-left: 10px;
   }
   p {
    color: ${(props) => props.theme.colors.MoviesNameColor};
    text-align: center;
    font-size: 17px;
   }
   .css-dev-only-do-not-override-htwhyh  {
    width: 730px;
    height: 53px;
    font-size: 16px;
    font-size: 15px;
    margin-left: 13px;
   }
`