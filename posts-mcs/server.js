const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { resolvers } = require('./resolvers');
const { POSTS_MCS_PORT } = require('../config');

const server = new ApolloServer({ typeDefs, resolvers });

server
  .listen({ port: POSTS_MCS_PORT })
  .then(({ url }) => {
    console.log(`🚀  Posts server ready at ${url}`);
  });
