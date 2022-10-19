import React, { Dispatch, SetStateAction } from 'react';
import StyledReviewBoardModal from './StyledReviewBoardModal';
import { ReactComponent as CloseIcon } from '../../assets/icon/cross.svg';

const ReviewBoardModal = (props: { popup: boolean; setPopup: Dispatch<SetStateAction<boolean>> }) => {
  const { popup, setPopup } = props;

  return (
    <section css={StyledReviewBoardModal}>
      <div className="modal">
        <button className="close-button" onClick={() => setPopup(false)}>
          <CloseIcon width="20px" height="20px" fill="#fff" />
        </button>
        <div className="modal-content">
          <div className="modal-head">
            <h3>구매후기 작성</h3>
          </div>
          <div className="modal-body">
            <textarea />
            <button>글쓰기</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewBoardModal;
