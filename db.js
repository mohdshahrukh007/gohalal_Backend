// db.js

const  mongoose  = require('mongoose');
const config = require('./config');
const { MongoClient } = require('mongodb');
require('dotenv').config(); // Load environment variables from .env file
// const uri =`mongodb+srv://gohalal:${encodeURIComponent(process.env.PASS)}@cluster0.pgvmzlp.mongodb.net/gohalal`
// console.log(uri);
const uri = `mongodb+srv://gohalal:${encodeURIComponent(process.env.PASS)}@cluster0.bjfl5.mongodb.net/?retryWrites=true&w=majority`
// const client = new MongoClient(uri);

const con = mongoose.connect(uri)
con.then(e=>{
  console.log("connected");
}).catch(e=>{
  console.log("connection failed");
  
})
// Export the client and the function to connect
module.exports = {
  con
};
