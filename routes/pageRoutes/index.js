const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');


// Homepage route
router.get('/', async (req, res) => {

    try {
        const blogPostsFromDb = await Blog.findAll({
            order: [
                ['createdAt', 'DESC'],
            ],
            include: {
                model: User,
                attributes: ['username'],
            }
        });

        const blogPosts = blogPostsFromDb.map(post => post.get({ plain: true }));
        res.render('homePage', {
            isLoggedIn: req.session.isLoggedIn || false,
            blogPosts,
            user: req.session.user,
        });

    } catch (error) {
        res.status(500).json(error);
    }
});

// Route to serve a user's dashboard
router.get('/dashboard', async (req, res) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/');
    };

    try {
        const userBlogsFromDb = await Blog.findAll({
            where: {
                userId: req.session.user.id,
            },
            order: [
                ['createdAt', 'DESC'],
            ],
            include: {
                model: User,
                attributes: ['username', 'id'],
            },
        });
        const blogPosts = userBlogsFromDb.map(blog => blog.get({ plain: true }));
        res.render('dashboard', {
            isLoggedIn: req.session.isLoggedIn || false,
            user: req.session.user,
            blogPosts,
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

// Route to view and comment on a single post
router.get('/post/:blogId', async (req, res) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/');
    };
    try {
        // get the current blog and comments
        const blogFromDb = await Blog.findOne({
            where: {
                id: req.params.blogId,
            },
            include: [
                {
                    model: User,
                    attributes: ['username', 'id'],
                },
                {
                    model: Comment,
                    separate: true,
                    order: [
                        ['createdAt', 'DESC'],
                    ],
                    include: [{
                        model: User,
                        attributes: ['username'],
                    }]
                },
            ]
        });
        const blogPost = blogFromDb.get({ plain: true });
        console.log(blogPost);
        // create boolean if user is viewing their post
        req.session.user.id === blogPost.userId ? blogPost.edit = true : blogPost.edit = false;
        res.render('blog', {
            isLoggedIn: req.session.isLoggedIn || false,
            blogPost,
            user: req.session.user,
        });

    } catch (error) {
        console.log(error);
        res.status(404).json(error);
    };
});

module.exports = router;