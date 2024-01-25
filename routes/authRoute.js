
const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();


// POST /auth/login
router.post('/login', authController.login);
// POST /auth/signup
router.post('/signup', authController.signup);
// get all user 
router.get('/getAll', authController.getUsers);
module.exports = router;
