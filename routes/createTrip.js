
const express = require('express');
const trip = require('../controllers/createTrip');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();
router.post('/addTrip',verifyToken, trip.creatTrip);
router.get('/trips',verifyToken, trip.getAllTrips);

module.exports = router;
