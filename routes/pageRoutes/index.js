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
        console.log(blogPostsFromDb);
        const blogPosts = blogPostsFromDb.map(post => post.get({plain:true}));
        console.log(blogPosts);
        res.render('homePage', {
            isLoggedIn: req.session.isLoggedIn || false,
            blogPosts,
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
        // req.session.user.id,
    })
});

module.exports = router;