
const express = require('express');
const mosque = require('../controllers/mosque');

const router = express.Router();
router.post('/getAllMosque', mosque.getAllMosque);

module.exports = router;
