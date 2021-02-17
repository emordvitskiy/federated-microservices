import React from 'react';
import styled from 'styled-components';

import Comment from './Comment';

const Container = styled.div`
  margin-bottom: 32px;
  color: #121212;
`;

const Title = styled.h2`
  margin: 4px 0;
`

const Author = styled.div`
  font-size: 12px;
  color: #3d3d3d;
`;

const CommentsList = styled.ul`
  padding: 0 6px 0 22px;
  list-style: none;
`;

export default function Post({ title, text, author, comments }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Author>by {author}</Author>
      <p>{text}</p>
      {comments.length > 0 && (
        <CommentsList>
          {comments.map(comment => (
            <Comment key={comment.id} {...comment} />
          ))}
        </CommentsList>
      )}
    </Container>
  );
}
