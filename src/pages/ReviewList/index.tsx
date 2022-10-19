import React, { useMemo } from 'react';
import Post from 'src/components/Review/indext';
import StyledReviewList from './StyledReviewList';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getPostList } from 'src/hooks/queries/posts';

export interface ReviewType {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const ReviewList = () => {
  const { data: postData } = useQuery(['post'], getPostList);

  const posts = useMemo(() => postData?.data, [postData]);

  return (
    <section css={StyledReviewList}>
      <div className="container">
        <div className="title">구매 후기</div>
        <div className="list">
          {posts?.map((item: ReviewType, i: number) => (
            <Post key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewList;
