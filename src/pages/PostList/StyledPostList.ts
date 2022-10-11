import { css } from '@emotion/react';

const StyledPostList = css`
  .container {
    width: 1200px;
    margin: 0 auto;
    padding: 40px;
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

export default StyledPostList;
