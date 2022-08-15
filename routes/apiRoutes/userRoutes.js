const router = require('express').Router();
const { signIn, signUp, signOut } = require('../../controllers');

// /api/user appended to these Routes

// User sign in route
router.post('/signin', signIn);
// User sign up route
router.post('/signup', signUp);
// Destroys the session when a user signs out.
router.get('/signout', signOut);


module.exports = router;
