import React from 'react';
import { PostType } from 'src/pages/PostList';
import StyledPost from './StyledPost';

const Post = (props: { item: PostType }) => {
  return (
    <div css={StyledPost}>
      {/* <div className="info">{props.item.userId}</div> */}
      <div className="title">{props.item.title}</div>
      <div className="content">{props.item.body}</div>
    </div>
  );
};

export default Post;
