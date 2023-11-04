// models/user.js
const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
  email: String,
  name: String,
  location: String,
  phone: String,
  Details_of_your_requirement: String,
  subject: String,
  level: String,
  i_Want: String,
  Meeting_options: String,
  canYou: String,
  Kilometers: String,
  budget: String,
  Gender: String,
  Tutors_wanted:String,
  I_need_someone:String,
  
  language: String,
   upload: [String], 
   
   isactive:{
    type:Boolean,
    default: true,
   },
   //isopen:Boolean,
  // islogin:Boolean,
  // is_verfiy_otp:false
},
 { timestamps: true }
);

module.exports = mongoose.model('Tutor', tutorSchema);
