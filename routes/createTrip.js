
const express = require('express');
const trip = require('../controllers/createTrip');

const router = express.Router();
router.post('/addTrip', trip.creatTrip);
router.get('/trips', trip.getAllTrips);

module.exports = router;
