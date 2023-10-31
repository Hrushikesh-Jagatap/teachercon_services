const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email:{
        type: String
    },
    name:{
        type:String
    },
    password:{
        type:String
    },
    usertype:{
        type:String
    },    
    is_login:{
        type:Boolean,
        default:false,
    }
  },
  { timestamps: { createdAt: true, updatedAt: true }




}
  );

const Student = mongoose.model('user', userSchema);

module.exports = Student;
