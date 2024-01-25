// models/user.js

const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
  
  idToken: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,

    },
    firstName: {
        type: String,
        required: true,
      },
    photoUrl: {
      type: String,
    },
    provider: {
      type: String,
      required: false,
    },
  
  // Add other relevant user data fields here
  // Example: dateOfBirth, address, phone, etc.
});

const User = mongoose.model('UserDetails',   userSchema);
module.exports = User;
