import React from 'react';
import styled from 'styled-components';

const Container = styled.li`
  padding: 8px 10px;
  box-shadow: 0 5px 10px -10px rgba(0,0,0,0.5);
  color: #121212;
`;

const Content = styled.p`
  margin: 0 0 4px;
`;

const Author = styled.div`
  text-align: right;
  color: #7e7e7e;
  font-size: 12px;
`;

export default function Comment({ text, author }) {
  return (
    <Container>
      <Author>{author}</Author>
      <Content>{text}</Content>
    </Container>
  );
}
