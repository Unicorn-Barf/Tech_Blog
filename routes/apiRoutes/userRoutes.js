const router = require('express').Router();
const { userControllers } = require('../../controllers');

// /api/user appended to these Routes

// User sign in route
router.post('/signin', userControllers.signIn);
// User sign up route
router.post('/signup', userControllers.signUp);
// Destroys the session when a user signs out.
router.get('/signout', userControllers.signOut);


module.exports = router;
