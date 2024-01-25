// controllers/authController.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const logginDetails = require('../models/loginData');
const config = require('../config');
const db = require('../db');


async function login(req, res) {
  try {
    const { username, password } = req.body;
   
  // const user = await LoginData1.findOne({"password":password});
  //   if (!user ){
  //     const newUser = new LoginData1({ username, password })
  //     await newUser.save().then(d=>{
  //       console.log("d",d);
  //       res.status(200).json({ message: 'Logged In and saved ',data:data});
  //     }).catch(err =>{
  //   console.error('Error during new login:', error);
  //     return res.status(401).json({ message: 'Invalid credentials' });
  //     })
  //   }else{
  //   res.status(200).json({ message: 'Logged In ',data:user});
  //   }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
} 


// Signup endpoint
// app.post('/signup', async (req, res) => {
async function signup(req, res) {
  try {
    const x= {  idToken,
      name,
      email,
      photoUrl,
      firstName,
      lastName,
      provider,} = req.body;
      var existingUser =null
      try {
              existingUser = await logginDetails.findOne({'email':x.email}) ;
          } catch (error) {
            console.error(error);
          }
      if (existingUser) {
      // res.redirect('/auth/login')
      return res.status(200).json({status:200, message: 'Username already exists' ,data:existingUser});
    }else{
      const newUser = new logginDetails({
        idToken,
        name,
        email,
        photoUrl,
        firstName,
        lastName,
        provider,
      });
      // // Save the new user
      await newUser.save().then(e=>{
        res.status(200).json({status:200, message: 'Signup successful' ,data:e});
      }).catch(error=>{
        console.log(error);
        res.status(404).json({status:404, message: 'not Signup successful', errorStack:error  });
      })
    }
    //  // Create a new user in the database using Mongoose
    
  } catch (error) {
    console.error(error);
    res.status(500).json({status:500, message: 'Internal server error' });
  }
}
async function getUsers(req, res) {
  var existingUser = await logginDetails.find({}).then(response => {
    res.status(200).json({ message: 'all Users',data:response });
  }).catch(e=>{console.log(e);}) ;
  console.log(existingUser);

}


module.exports = { login ,signup,getUsers};
