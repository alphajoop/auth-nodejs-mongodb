const express = require('express');
const router = express.Router();
const { Signup, Login } = require('../Controllers/authController');
const { userVerification } = require('../Middlewares/authMiddleware');

router.post('/auth/signup', Signup);
router.post('/auth/login', Login);
router.post('/auth/verify', userVerification);

module.exports = router;
