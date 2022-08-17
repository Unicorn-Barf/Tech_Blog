const router = require('express').Router();
const { postComment, updateComment, deleteComment } = require('../../controllers/commentController');

// /api/comment routes

// Create a Comment Route
router.post('/:blogId', postComment);

// Update and Delete comment Route
router.route('/:commentId')
    .put(updateComment)
    .delete(deleteComment);

module.exports = router;