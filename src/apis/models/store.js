const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    Title:{
        type:String
    },
    // author:{
    //     type:String
    // },
    Deatils_Of_your_product:{
        type:String
    },
    email:{
        type:String,
    },    
    price:{
        type:String
    },
    level:{
        type:String,
    },
    subject:{
        type:String,
    },
    product_type:[String],
    tag:[String],
    // :{
    //     type:String,
    // },
    image:{
        type:String,
    },
    file:{
        type:String,
    }
  },
  { timestamps: { createdAt: true, updatedAt: true }
});

const stores = mongoose.model('store', storeSchema);

module.exports = stores;
