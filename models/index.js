const Blog = require('./Blog');
const User = require('./User');
const Comment = require('./Comment');

Blog.belongsTo(User, {
  foreignKey: 'userId',
});

User.hasMany(Blog, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Blog.hasMany(Comment, {
  foreignKey: 'blogId',
  as: 'comments',
});

Comment.hasOne(Blog, {
  foreignKey: 'blogId',
});

Comment.hasOne(User, {
  foreignKey: 'userId',
});



module.exports = {
  Blog,
  User,
};