const data = require('./data');

module.exports.resolvers = {
  Comment: {
    __resolveReference(ref) {
      return data.comments.find(comment => comment.id == ref.id);
    },
  },
  Query: {
    comments: () => data.comments,
  },
};
