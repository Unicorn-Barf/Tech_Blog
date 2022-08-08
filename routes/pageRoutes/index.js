const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homePage', {
        isLoggedIn: req.session.isLoggedIn || false,
    })
});

router.get('/dashboard', async (req, res) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/');
    };
    res.render('dashboard', {
        isLoggedIn: req.session.isLoggedIn || false,
        req.session.user.id,
    })
});

module.exports = router;