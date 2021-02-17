import { gql } from '@apollo/client';

export const POSTS = gql`
  query GetPosts {
    posts {
      title
      text
      author
      comments {
        id
        text
        author
      }
    }
  }
`;
