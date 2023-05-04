import styled from "styled-components";

export default styled.div`
    height: 1581px;
    /* width: 760px; */
    margin: 0 auto;
    /* display: flex; */
    /* flex-wrap: wrap; */
    /* margin-right: -15px;
    margin-left: -15px; */
    img {
        width: 223px;
        height: 334px;
    
    }
    .UniquePage-section {
        height: 335px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

    }

    ul {
        width: 476px;
        height: 300px;
        list-style-type: none;
        padding: 0px 15px;
   }

    ul li {
        color: ${(props) => props.theme.colors.DetailsDesc};
        height: 25px;
        padding: 8px 16px;
   }

   ul li span {
    color: ${(props) => props.theme.colors.DetailText};
   }

   .Details_bg {
    background-color: ${(props) => props.theme.colors.DetailsBg};
   }

   .film-description {
    height: 200px;
    width: 760px;
    font-size: 1.25rem;
    background-color: ${(props) => props.theme.colors.DetailsAboutBg};
   color: ${(props) => props.theme.colors.DetailsAbotText};
   }
   h5 {
    font-size: 22px;
    padding: 5px;
   }
   p {
   height: 152px;
   width: 730px;
   }
   .css-dev-only-do-not-override-htwhyh  {
    height: 53px;
    font-size: 45px;
    display: flex;
   }
   .film-video {
    width: 730px;
    height: 370px;
    border: 1px solid #adb5bd;
    margin-top: 100px;
   }
`