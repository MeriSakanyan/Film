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

   /* .ant-rate-star.ant-rate-star-full,
  .ant-rate-star.ant-rate-star-zero,
  .ant-rate-star.ant-rate-star-half.ant-rate-star-active {
      transition: transform 0s;
  }

  .ant-rate-star.ant-rate-star-half.ant-rate-star-active:hover {
      transform: scale(0.91);
  }

  .ant-rate-star.ant-rate-star-full:hover {
      transform: scale(0.91);
  }

  .ant-rate-star.ant-rate-star-zero:hover {
      transform: scale(0.91);
  } */
   
`