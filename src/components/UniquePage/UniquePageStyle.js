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


    .details_list {
        width: 476px;
        height: 300px;
        list-style-type: none;
        padding: 0;
    }
    .details_list li {
        color: ${(props) => props.theme.colors.detailsDesc};
        height: 45px;
        padding: 8px 16px;
    }
    .details_list li span {
       color: ${(props) => props.theme.colors.detailText};
    }

    
   .Details_bg {
       background-color: ${(props) => props.theme.colors.detailsBg};
   }
   .movie-description {
       font-size: 16px;
       background-color: ${(props) => props.theme.colors.detailsAboutBg};
       color: ${(props) => props.theme.colors.detailsAbotText};
       height: auto;
       padding: 5px;
       margin-top: 20px;
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

   .css-dev-only-do-not-override-htwhyh {
     width: 223px;
     font-size: 15px;
     text-align: center;
     margin-top: 8px;
    }
  

   .ant-rate-star-first, .ant-rate-star-second {
    color:  ${(props) => props.theme.colors.starsRate} !important;
   }

    .ant-rate-star-full {
        .ant-rate-star-first, .ant-rate-star-second{
            color: rgb(254, 121, 0) !important;
        }
        
    }
    
   .ant-rate-star-half {
    .ant-rate-star-first{
        color: rgb(254, 121, 0) !important;
        }
   }
   

    .Movie-votes {
    color: ${(props) => props.theme.colors.detailText};
   }
   .movie-video {
    width: 100%;
    height: 400px;
    margin-top: 50px;
    background-color: #343a40;
    background: #2A3440 url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiIGNsYXNzPSJ1aWwtc3BpcmFsIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgY2xhc3M9ImJrIiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTU0LjUgODkuOWMtOS42IDAtMTguNi0zLjktMjUuNC0xMSAtNi44LTcuMS0xMC41LTE2LjYtMTAuNS0yNi43IDAtOC45IDMuMy0xNy4yIDkuMi0yMy41UzQxLjcgMTkgNTAuMiAxOWM4LjQgMCAxNi40IDMuNCAyMi4zIDkuNyA2IDYuMyA5LjIgMTQuNiA5LjIgMjMuNSAwIDE1LjgtMTIuMiAyOC43LTI3LjMgMjguNyAtMTUgMC0yNy4zLTEyLjktMjcuMy0yOC43IDAtMTMuMyAxMC4zLTI0LjIgMjMtMjQuMnMyMyAxMC44IDIzIDI0LjJjMCAxMC44LTguNCAxOS42LTE4LjcgMTkuNiAtMTAuMyAwLTE4LjctOC44LTE4LjctMTkuNiAwLTguMyA2LjUtMTUuMSAxNC40LTE1LjEgNy45IDAgMTQuNCA2LjggMTQuNCAxNS4xIDAgNS44LTQuNSAxMC42LTEwLjEgMTAuNnMtMTAuMS00LjgtMTAuMS0xMC42YzAtMy40IDIuNi02LjEgNS44LTYuMSAzLjIgMCA1LjggMi43IDUuOCA2LjEgMCAwLjktMC43IDEuNi0xLjUgMS42IC0wLjggMC0xLjUtMC43LTEuNS0xLjYgMC0xLjYtMS4zLTIuOS0yLjgtMi45IC0xLjUgMC0yLjggMS4zLTIuOCAyLjkgMCA0LjEgMy4yIDcuNCA3LjEgNy40czcuMS0zLjMgNy4xLTcuNGMwLTYuNi01LjEtMTItMTEuNC0xMiAtNi4zIDAtMTEuNCA1LjQtMTEuNCAxMiAwIDkuMSA3IDE2LjUgMTUuNyAxNi41IDguNiAwIDE1LjctNy40IDE1LjctMTYuNSAwLTExLjYtOS0yMS0yMC0yMXMtMjAgOS40LTIwIDIxYzAgMTQuMSAxMC45IDI1LjUgMjQuMyAyNS41czI0LjMtMTEuNCAyNC4zLTI1LjVjMC0xNi42LTEyLjgtMzAtMjguNi0zMCAtMTUuOCAwLTI4LjYgMTMuNS0yOC42IDMwIDAgOS4yIDMuNCAxNy45IDkuNiAyNC40IDYuMiA2LjUgMTQuNSAxMC4xIDIzLjIgMTAuMXMxNy0zLjYgMjMuMi0xMC4xYzYuMi02LjUgOS42LTE1LjIgOS42LTI0LjQgMC0xMC40LTMuOS0yMC4yLTEwLjktMjcuNiAtNy03LjQtMTYuMy0xMS40LTI2LjMtMTEuNHMtMTkuMyA0LjEtMjYuMyAxMS40UzEzIDQxLjggMTMgNTIuMmMwIDAuOS0wLjcgMS42LTEuNSAxLjZTMTAgNTMuMSAxMCA1Mi4yYzAtMTEuMyA0LjItMjEuOSAxMS44LTI5LjkgNy42LTggMTcuNy0xMi40IDI4LjQtMTIuNCAxMC43IDAgMjAuOCA0LjQgMjguNCAxMi40IDcuNiA4IDExLjggMTguNiAxMS44IDI5LjkgMCAxMC4xLTMuNyAxOS41LTEwLjUgMjYuN0M3My4xIDg2IDY0LjEgODkuOSA1NC41IDg5Ljl6IiBmaWxsPSIjZmZmIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgZnJvbT0iMCA1MCA1MCIgdG89IjM2MCA1MCA1MCIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PC9zdmc+) 50% 50% no-repeat;
   } 
`