import { css } from '@emotion/react';

const StyledReviewList = css`
  .container {
    width: 1200px;
    margin: 0 auto;
    padding: 40px;
    position: relative;
    button {
      font-size: 0.8rem;
      font-weight: 400;
      background: #ebebeb;
      padding: 8px 16px;
      border-radius: 5px;
      position: absolute;
      top: 20px;
      right: 80px;
      &:hover {
        background: #dfdfdf;
      }
    }
    .title {
      text-align: center;
      font-size: 1.2rem;
      font-weight: bold;
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      margin: 20px 0;
    }
  }
`;

export default StyledReviewList;
