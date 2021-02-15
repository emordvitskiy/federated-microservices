const data = require('./data');

module.exports.resolvers = {
  Query: {
    posts: () => data.posts,
  },
};
