const TutorData = require('@models/tutor');


// const Getsubjectandlocation = async (subject,location) => {
const Getsubjectandlocation = async (query) => {

  try {
      const { subject,location  } = query;
      const filter = {};
      
      if (subject) {
      filter["subject"] = subject;
    }
     
      if (location) {
      filter["location"] = location;
    }
      const Data = await TutorData.find(filter)
    //   .select("")
    //   .lean().exec();
//     let Data;
//    // const Data = await TutorData.find({subject:subject})
//     if(location !="undefined"){
//      Data = await TutorData.find({subject:subject,location:location})
//     return Data;

//     }
//     else{
//             const Data = await TutorData.find({subject:subject})
//                 return Data;


//     }
    

     if (!Data) {
      return "Data not found"
    } 
    
    return Data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  Getsubjectandlocation,
};
