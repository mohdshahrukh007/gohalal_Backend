// controllers/authController.js
const tripData = require('../models/createTrip');
    async function creatTrip(req, res) {
        try {
            const newUser = new tripData(req.body);
            // // Save the new user
            await newUser.save().then(e=>{
              res.status(200).json({status:200, message: 'trip Created' ,data:e});
            }).catch(error=>{
              res.status(404).json({status:404, message: 'not Signup successful' });
            })
        } catch (error) {
          console.error(error);
          res.status(500).json({status:500, message: 'Internal server error' });
        // }
      }
    }

    
async function getAllTrips(req, res) {
    try {
        const allTrips = await tripData.find({});
        // Convert to a plain JavaScript object without circular references
        const tripsData = JSON.parse(JSON.stringify(allTrips));
        res.status(200).json({ status: 200, message: 'Trips retrieved successfully', data: tripsData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 500, message: 'Internal server error' });
    }
}
async function addTrip(req,res){
    try {
        const { username, password } = req.body;
        const existingUser = await tripData.findOne(req.body.id);
        if (existingUser) {
        //   res.redirect('/auth/login')
          return res.status(200).json({status:200, message: 'data already exists' ,data:existingUser});
        }else{
          const newUser = new tripData(req.body);
          // // Save the new user
          await newUser.save().then(e=>{
            res.status(200).json({status:200, message: 'data added successfully' });
          }).catch(error=>{
            res.status(404).json({status:404, message: 'request Failed' });
          })
        }
        //  // Create a new user in the database using Mongoose
        
      } catch (error) {
        console.error(error);
        res.status(500).json({status:500, message: 'Internal server error' });
      }
}


      module.exports = {creatTrip,getAllTrips};
      