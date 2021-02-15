const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { resolvers } = require('./resolvers');
const { COMMENTS_MCS_PORT } = require('../config');

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({ port: COMMENTS_MCS_PORT })
  .then(({ url }) => {
    console.log(`🚀  Comments server ready at ${url}`);
  });
