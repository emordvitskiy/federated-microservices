import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 16px;
  width: 100%;
  max-width: 960px;
  height: 100%;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
`;

const Title = styled.h1`
  margin: 0 0 24px;
`;

export default function PostsWrapper({ children }) {
  return (
    <Wrapper>
      <Title>Posts</Title>
      {children}
    </Wrapper>
  );
}
