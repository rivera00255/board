import { css } from '@emotion/react';

const StyledMain = css`
  .container {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    color: #444;
    @media (max-width: 1200px) {
      width: 100vw;
    }
    h3 {
      font-size: 1.4rem;
      font-weight: bold;
      margin-top: 40px;
    }
    h4 {
      margin-bottom: 40px;
      color: #888;
    }
    h5 {
      margin-top: 20px;
      font-size: 0.9rem;
      color: #555;
      font-weight: bold;
    }
    .info {
      display: flex;
      justify-content: space-around;
    }
    .product-detail {
      width: 40%;
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
          width: 320px;
          height: auto;
          margin-left: calc(50% - 170px);
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
          padding: 0 4px;
          text-align: center;
          &::placeholder {
            color: #ddd;
            text-align: center;
            font-size: 0.8rem;
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
      input {
        border-bottom: 1px solid #888;
        padding: 4px;
        display: block;
        width: 90%;
        margin: 10px auto;
        &::placeholder {
          color: #888;
          font-size: 0.9rem;
        }
      }
      .row {
        width: 100%;
        display: flex;
        position: relative;
        .postcode-btn {
          background: #ebebeb;
          padding: 0.4rem 1rem;
          border-radius: 5px;
          position: absolute;
          top: 4px;
          right: 32px;
          font-size: 0.8rem;
        }
      }
      .postalcode-wrapper {
        width: 90%;
        margin: 0 auto;
        border: 1px solid #888;
      }
      > .error-message {
        color: #888;
        font-size: 0.8rem;
      }
      > button {
        background: #444;
        color: #fff;
        padding: 0.4rem 1rem;
        border-radius: 5px;
        margin-top: 20px;
        &:hover {
          background: #555;
        }
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
