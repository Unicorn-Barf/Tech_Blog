const router = require('express').Router();
const { postComment } = require('../../controllers/commentController');
const { User, Blog, Comment } = require('../../models');

// /api/comment routes

router.post('/:blogId', postComment);

module.exports = router;