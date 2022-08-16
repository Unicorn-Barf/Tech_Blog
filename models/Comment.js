const {Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection');


class Comment extends Model {
}

Comment.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        len: [1,50],
      }
    },
    blogId: {
        type: DataTypes.UUID,
        references: {
          model: 'blogs',
          key: 'id',
        },
      },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: 'users',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    modelName: 'comments',
  }
);

module.exports = Comment;