const { gql } = require('apollo-server');

const typeDefs = gql`
  type Comment {
    author: String!
    text: String!
  }

  type Query {
    comments: [Comment]
  }
`;

module.exports = typeDefs;
