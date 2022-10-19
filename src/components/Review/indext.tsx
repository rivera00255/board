import React from 'react';
import { ReviewType } from 'src/pages/ReviewList';
import StyledReview from './StyledReview';

const Review = (props: { item: ReviewType }) => {
  return (
    <div css={StyledReview}>
      {/* <div className="info">{props.item.userId}</div> */}
      <div className="title">{props.item.title}</div>
      <div className="content">{props.item.body}</div>
    </div>
  );
};

export default Review;
