const router = require('express').Router();
const { Blog, User } =require('../../models');

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

        const blogPosts = blogPostsFromDb.map(post => post.get({plain:true}));
        res.render('homePage', {
            isLoggedIn: req.session.isLoggedIn || false,
            blogPosts,
            user: req.session.user,
        });

    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/dashboard', async (req, res) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/');
    };
    res.render('dashboard', {
        isLoggedIn: req.session.isLoggedIn || false,
        user: req.session.user,
    })
});

router.get('/post/:blogId', async (req, res) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/');
    };
    try {
        const blogFromDb = await Blog.findOne({
            where: {
                id: req.params.blogId,
            },
            include: {
                model: User,
                attributes: ['username'],
            },
        });
        const blogPost = blogFromDb.get({plain:true});
        console.log(blogPost);
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