const data = require('./data');

module.exports.resolvers = {
  Post: {
    comments(post) {
      return post.comments.map(id => ({ __typenmame: 'Comment', id }));
    },
  },
  Query: {
    posts: () => data.posts,
  },
};
