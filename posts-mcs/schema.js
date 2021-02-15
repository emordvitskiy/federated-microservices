const { gql } = require('apollo-server');

const typeDefs = gql`
  type Post {
    title: String!
    text: String
    author: String
  }

  type Query {
    posts: [Post]
  }
`;

module.exports = typeDefs;
