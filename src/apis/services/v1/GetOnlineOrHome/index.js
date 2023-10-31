const TutorData = require('@models/tutor');


const getTutorData = async (Meeting_options) => {

  try {
    
    const Data = await TutorData.find({Meeting_options:Meeting_options })

    if (!Data) {
      return "Data not found"
    }

   

  

    return Data;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getTutorData,
};
