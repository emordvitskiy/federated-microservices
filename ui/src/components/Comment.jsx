import React from 'react';
import styled from 'styled-components';

import Author from './Author';

const Container = styled.li`
  padding: 8px 10px;
  box-shadow: 0 5px 10px -10px rgba(0,0,0,0.5);
  color: #121212;
`;

const Content = styled.p`
  margin: 0 0 4px;
`;

const AuthorInComment = styled(Author)`
  text-align: right;
  color: ${props => props.theme.textColor};
  font-size: 12px;
`;

export default function Comment({ text, author }) {
  return (
    <Container>
      <AuthorInComment>{author}</AuthorInComment>
      <Content>{text}</Content>
    </Container>
  );
}
