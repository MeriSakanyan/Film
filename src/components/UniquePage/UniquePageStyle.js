import styled from "styled-components";

export default styled.div`
        height: 1581px;
        width: 760px;
        margin: 0 auto;
    .UniquePage-section {
        height: 335px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    img {
        width: 223px;
        height: 334px;
    }
    ul {
        width: 476px;
        height: 300px;
        list-style-type: none;
        padding: 0px 15px;
    }
    ul li {
        color: ${(props) => props.theme.colors.DetailsDesc};
        height: 30px;
        padding: 8px 16px;
    }
    ul li span {
       color: ${(props) => props.theme.colors.DetailText};
    }
   .Details_bg {
       background-color: ${(props) => props.theme.colors.DetailsBg};
   }
   .movie-description {
       font-size: 16px;
       background-color: ${(props) => props.theme.colors.DetailsAboutBg};
       color: ${(props) => props.theme.colors.DetailsAbotText};
    }
    h5 {
       font-size: 22px;
       padding: 5px;
    }
   .movie-rating {
       display: flex;
       justify-content: space-between;
       height: 54px;
    }
   .ant-rate  {
     display: flex;
     font-size: 20px;
   }
   .Movie-votes {
    color: ${(props) => props.theme.colors.DetailsAbotText};
   }
   /* .movie-video {
    width: 100%;
    height: 400px;
    background-color: gray;
    margin-top: 50px;
   } */
   /* Spinner */
.lds-facebook {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  width: 100%;
  height: 400px;
  background-color: gray;
  margin-top: 50px;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #fff;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}

`