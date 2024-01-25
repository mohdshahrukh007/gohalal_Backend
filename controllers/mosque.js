const tripData = require('../models/createTrip');
async function getAllMosque(req,res){
    try {
          const newUser = new tripData(req.body);
          await newUser.save().then(e=>{
            res.status(200).json({status:200, message: 'data added successfully' });
          }).catch(error=>{
            res.status(404).json({status:404, message: 'request Failed' });
          })
      } catch (error) {
        console.error(error);
        res.status(500).json({status:500, message: 'Internal server error' });
      }
}
module.exports = {getAllMosque};
