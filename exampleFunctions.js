const getTotalLikes = user => {
  return user.blogs.reduce((acc, blog) => {
    return acc + blog.likes;
  }, 0);
};
const getMostPopularBlog = user => {
  return user.blogs.reduce((mostPopularBlog, currentBlog) => {
    return mostPopularBlog.likes < currentBlog.likes
      ? currentBlog
      : mostPopularBlog;
  }, user.blogs[0]);
};
module.exports = { getTotalLikes, getMostPopularBlog };
