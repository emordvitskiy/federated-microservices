const { gql } = require('apollo-server');

const typeDefs = gql`
  type Post {
    title: String!
    text: String
    author: String!
    comments: [Comment]
  }

  extend type Comment @key(fields: "id") {
    id: ID! @external
  }

  type Query {
    posts: [Post]
  }
`;

module.exports = typeDefs;
