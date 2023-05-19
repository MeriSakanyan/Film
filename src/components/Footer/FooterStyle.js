import styled from "styled-components";

export default styled.div` 
    background: ${(props) => (`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) center no-repeat,
    ${props?.src && `url("https://image.tmdb.org/t/p/original${props?.src}")`} center no-repeat, rebeccapurple`)};
    border: 1px solid #000;
    min-height: 650px;
    background-position: 50%;
    background-size: cover;
    background-attachment: fixed;
    transition: all .5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;

    margin: 50px auto;
    width: 100%;
    iframe {

        box-shadow: 0 19px 38px rgba(0,0,0,.3), 0 15px 12px rgba(0,0,0,.22);
        font-family: 12px Roboto, Arial, sans-serif;
        background-color: #000;
        color: #fff;
        height: 50%;
        width: 50%;
        overflow: hidden;
        position: absolute;
        margin: 0 auto;
        padding: 0;
    }
    p {
        position: absolute;
        color: white;
        margin-top: 600px;
    }

    @media screen and  (max-Width:991px){
        width: 100%;
     }
`
