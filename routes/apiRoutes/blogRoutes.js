const router = require('express').Router();
const { User, Blog, Comment } = require('../../models');

// /api/blog routes

// Route to post a new blog
router.post('/post', async (req, res) => {
    try {
        const newBlog = await Blog.create({
            title: req.body.title,
            blog: req.body.blog,
            userId: req.session.user.id,
        });
        res.status(200).json(newBlog);
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
});

module.exports = router;