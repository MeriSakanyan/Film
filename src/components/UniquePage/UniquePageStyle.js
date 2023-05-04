import styled from "styled-components";

export default styled.div`
    height: 1581px;
    width: 760px;
    margin: 0 auto;
    img {
        width: 223px;
        height: 335px;
    }
    .UniquePage {
        display: flex;
        justify-content: space-between;
    }

    ul {
        width: 476px;
        height: 334px;
        list-style-type: none;
        border: 1px solid #adb5bd;
   }

    ul li {
        height: 30px;
        padding: 8px 16px;
        border-bottom: 1px solid #adb5bd;
   }

   ul li:last-child {
       border-bottom: none
   }
   h5 {
    font-size: 1.25rem;
   }
   .film-description {
    height: 100px;
    width: 760px;
    font-size: 1.25rem;
   }
   .film-video {
    width: 730px;
    height: 370px;
    border: 1px solid #adb5bd;
    margin-top: 100px;
   }
`