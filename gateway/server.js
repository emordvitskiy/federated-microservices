const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const { GATEWAY_PORT, POSTS_MCS_PORT, COMMENTS_MCS_PORT } = require('../config');

const gateway = new ApolloGateway({
  serviceList: [
    {
      name: 'posts',
      url: `http://localhost:${POSTS_MCS_PORT}`,
    },
    {
      name: 'comments',
      url: `http://localhost:${COMMENTS_MCS_PORT}`,
    },
  ],
});

const server = new ApolloServer({
  gateway,
  subscriptions: false,
});

server
  .listen({ port: GATEWAY_PORT })
  .then(({ url }) => {
    console.log(`🚀  Gateway server ready at ${url}`);
  });