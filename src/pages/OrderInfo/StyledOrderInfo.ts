import { css } from '@emotion/react';

const StyledOrderInfo = css`
  .container {
    width: 1200px;
    margin: 0 auto;
    padding: 40px 0;
    .title {
      text-align: center;
      font-size: 1.2rem;
      font-weight: bold;
    }
    input[type='text'] {
      border: 1px solid #ddd;
      padding: 0.4rem;
      width: 256px;
      border-radius: 5px;
      display: block;
      margin-bottom: 8px;
      &::placeholder {
        font-size: 14px;
      }
    }
    > .input-form {
      width: 90%;
      margin: 40px auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      button {
        background: #444;
        color: #fff;
        padding: 4px 16px;
        border-radius: 5px;
        margin-top: 16px;
        &:hover {
          background: #555;
        }
      }
    }
    .result {
      width: 100%;
      .order-info-card {
        width: 520px;
        margin: 0 auto;
        background: #f5f5f5;
        border-radius: 5px;
        padding: 1rem;
        position: relative;
        font-size: 14px;
        line-height: 25px;
        > div > p > strong {
          display: inline-block;
          margin-bottom: 8px;
        }
        > p {
          color: #888;
        }
        > button {
          background: #ddd;
          border-radius: 5px;
          padding: 4px 8px;
          font-size: 13px;
          color: #444;
          position: absolute;
          right: 1rem;
          top: 1rem;
        }
      }
    }
  }
`;

export default StyledOrderInfo;
