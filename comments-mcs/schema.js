const { gql } = require('apollo-server');

const typeDefs = gql`
  type Comment @key(fields: "id") {
    id: ID!
    author: String!
    text: String!
  }

  extend type Query {
    comments: [Comment]
  }
`;

module.exports = typeDefs;
