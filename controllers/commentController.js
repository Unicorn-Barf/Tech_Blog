const { User, Blog, Comment } = require("../models");

const postComment = async (req, res) => {
    try {
        const newComment = await Comment.create({
            comment: req.body.comment,
            blogId: req.params.blogId,
            userId: req.session.user.id,
        });
        res.status(200).json(newComment);
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
};

module.exports = {
    postComment,
  };