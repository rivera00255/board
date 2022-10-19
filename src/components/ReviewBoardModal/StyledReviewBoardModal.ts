import { css } from '@emotion/react';

const StyledReviewBoardModal = css`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  .modal {
    width: 520px;
    height: 480px;
    background: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .close-button {
      position: absolute;
      top: 10px;
      right: -50px;
      padding: 4px;
    }
    .modal-head {
      text-align: center;
      margin: 40px 0 30px 0;
      font-weight: 700;
      font-size: 1.1rem;
    }
    .modal-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      textarea {
        border: 1px solid #ddd;
        border-radius: 5px;
        width: 360px;
        min-height: 240px;
        resize: none;
        padding: 8px;
        &:focus {
          outline: none;
        }
      }
      button {
        background: #ebebeb;
        padding: 4px 16px;
        border-radius: 5px;
        margin-top: 30px;
        &:hover {
          background: #dfdfdf;
        }
      }
    }
  }
`;

export default StyledReviewBoardModal;
