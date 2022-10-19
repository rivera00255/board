import React, { useMemo, useState } from 'react';
import Review from 'src/components/Review/indext';
import StyledReviewList from './StyledReviewList';
import { useQuery } from '@tanstack/react-query';
import { getPostList } from 'src/hooks/queries/posts';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import ReviewBoardModal from 'src/components/ReviewBoardModal';

export interface ReviewType {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const ReviewList = () => {
  const user = useSelector((state: RootState) => state.user);

  const [popup, setPopup] = useState(false);

  const { data: postData } = useQuery(['post'], getPostList);

  const posts = useMemo(() => postData?.data, [postData]);

  return (
    <section css={StyledReviewList}>
      {popup === true && <ReviewBoardModal popup={popup} setPopup={setPopup} />}
      <div className="container">
        {user.auth !== '' && <button onClick={() => setPopup(true)}>작성하기</button>}
        <div className="title">구매 후기</div>
        <div className="list">
          {posts?.map((item: ReviewType, i: number) => (
            <Review key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewList;
