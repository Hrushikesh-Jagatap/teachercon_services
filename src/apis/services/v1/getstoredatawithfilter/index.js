// const StoreData = require('@models/store');


// // const Getsubjectandlocation = async (subject,location) => {
// const getstoredata = async (query) => {

//   try {
//       const { subject,level, product_type,tag } = query;
//       const filter = {};
      
//       if (subject) {
//       filter["subject"] = subject;
//     }
     
//       if (level) {
//       filter["level"] = level;
//     }
//     if (product_type) {
//       filter["product_type"] = product_type;
//     }
//     if (tag) {
//       filter["tag"] = tag;
//     }
//       const Data = await StoreData.find(filter)
//     //   .select("")
//     //   .lean().exec();
// //     let Data;
// //    // const Data = await TutorData.find({subject:subject})
// //     if(location !="undefined"){
// //      Data = await TutorData.find({subject:subject,location:location})
// //     return Data;

// //     }
// //     else{
// //             const Data = await TutorData.find({subject:subject})
// //                 return Data;


// //     }
    

//      if (!Data) {
//       return "Data not found"
//     } 
    
//     return Data;
//   } catch (error) {
//     throw error;
//   }
// };

// module.exports = {
//   getstoredata,
// };
const StoreData = require('@models/store');

const getstoredata = async (query) => {
  try {
    const { subject, level, product_type, tag } = query;
    const filter = {};

    if (subject) {
      filter["subject"] = subject;
    }

    if (level) {
      filter["level"] = level;
    }

    if (product_type && product_type.length > 0) {
      filter["product_type"] = { $in: product_type };
    }

    if (tag && tag.length > 0) {
      filter["tag"] = { $in: tag };
    }

    const Data = await StoreData.find(filter).exec();

    if (Data.length === 0) {
      return "Data not found";
    }

    return Data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getstoredata,
};
