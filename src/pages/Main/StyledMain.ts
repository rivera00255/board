import { css } from '@emotion/react';

const StyledMain = css`
  .container {
    width: 1200px;
    margin: 0 auto;
    @media (max-width: 1200px) {
      width: 100vw;
    }
    h3 {
      text-align: center;
      font-size: 1.4rem;
      font-weight: bold;
      margin: 40px 0;
    }
    .info {
      display: flex;
      justify-content: space-around;
    }
    .product-detail {
      width: 40%;
      color: #444;
      text-align: center;
      .product-title {
        font-weight: bold;
      }
      .product-content {
        color: #888;
        > p:first-of-type {
          font-size: 0.8rem;
        }
        > p:last-of-type {
          color: #555;
          font-weight: bold;
          margin-bottom: 10px;
        }
        img {
          max-width: 320px;
          height: auto;
          margin-left: 50%;
          transform: translateX(-50%);
        }
      }
      .product-option {
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        label {
          margin: 4px 0;
        }
        input {
          width: 80px;
          border-bottom: 1px solid #888;
          margin-left: 4px;
          &::placeholder {
            color: #ddd;
            text-align: center;
          }
        }
      }
    }
    .order {
      width: 50%;
      margin: 40px auto;
      padding-top: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      > input {
        border-bottom: 1px solid #888;
        padding: 0 4px;
        display: block;
        width: 100%;
        margin: 10px 0;
      }
      button {
        background: #eee;
        padding: 0.4rem 1rem;
        border-radius: 5px;
        margin-top: 20px;
      }
    }
  }
  input {
    &:focus {
      outline: none;
    }
  }
`;

export default StyledMain;
