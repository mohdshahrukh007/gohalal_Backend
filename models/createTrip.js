const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    TripType: { type: String },
    location: { type: String },
    destination: { type: String },
    TravelFrom: { type: Date },
    TravelTo: { type: Date },
    tripName: { type: String },
    description: { type: String },
    image: { type: String },
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
