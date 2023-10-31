const TutorData = require('@models/tutor');


const getTutorData = async (want) => {

  try {
    
    const tutor = await TutorData.find({i_Want:want })

    if (!tutor) {
      return "Tutor not found"
    }

   

  

    return tutor;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getTutorData,
};
