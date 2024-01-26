
const express = require('express');
const authController = require('../controllers/authController');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();


// POST /auth/login
// POST /auth/signup
router.post('/signup', authController.signup);
// get all user 
router.get('/getAll',verifyToken, authController.getUsers);
module.exports = router;
