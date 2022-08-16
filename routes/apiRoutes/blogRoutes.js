const router = require('express').Router();
const { postBlog } = require('../../controllers/blogController');
const { User, Blog, Comment } = require('../../models');

// /api/blog routes

// Route to post a new blog
router.post('/post', postBlog);

module.exports = router;