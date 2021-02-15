const data = require('./data');

module.exports.resolvers = {
  Query: {
    comments: () => data.comments,
  },
};
