import React from 'react';
import { useQuery } from '@apollo/client';

import { POSTS } from '../queries/posts';
import PostsWrapper from '../components/PostsWrapper';
import Post from '../components/Post';

export default function PostsContainer() {
  const { loading, error, data } = useQuery(POSTS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  return (
    <PostsWrapper>
      {data.posts.map(post => (
        <Post key={post.title} {...post} />
      ))}
    </PostsWrapper>
  );
}
