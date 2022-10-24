import React, { Dispatch, SetStateAction, useState } from 'react';
import StyledReviewBoardModal from './StyledReviewBoardModal';
import { ReactComponent as CloseIcon } from '../../assets/icon/cross.svg';
import { useMutation } from '@tanstack/react-query';
import { postReview } from 'src/hooks/queries/posts';

const ReviewBoardModal = (props: { popup: boolean; setPopup: Dispatch<SetStateAction<boolean>> }) => {
  const { popup, setPopup } = props;

  const [review, setReview] = useState('');

  const { mutate: reviewMutate } = useMutation(postReview, {
    onSuccess: () => {
      alert('구매후기 작성이 완료되었습니다.');
      setReview('');
      setPopup(false);
    },
    onError: (err) => {
      console.log(err);
    },
  });

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
            <textarea
              onChange={(e) => {
                setReview(e.target.value);
              }}
            />
            <button
              onClick={() => {
                review !== '' &&
                  reviewMutate({
                    body: review,
                  });
              }}
            >
              글쓰기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewBoardModal;
