import React, { useMemo } from 'react';
import Post from 'src/components/Post/indext';
import StyledPostList from './StyledPostList';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getPostList } from 'src/hooks/queries/posts';

export interface PostType {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const PostList = () => {
  const { data: postData } = useQuery(['post'], getPostList);

  const posts = useMemo(() => postData?.data, [postData]);

  return (
    <section css={StyledPostList}>
      <div className="container">
        <div className="title">구매 후기</div>
        <div className="list">
          {posts?.map((item: PostType, i: number) => (
            <Post key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostList;
