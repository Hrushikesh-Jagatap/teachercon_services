const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    name:{
        type:String
    },
    // author:{
    //     type:String
    // },
    profileimage:{
        type:String
    },    
    description:{
        type:String
    },
    location:{
        type:String,
    },
    amount:{
        type:String,
    },
    exerince_in_field:{
        type:String,
    },
    total_exerince:{
        type:String,
    }
  },
  { timestamps: { createdAt: true, updatedAt: true }
});

const Student = mongoose.model('blog', blogSchema);

module.exports = Student;
