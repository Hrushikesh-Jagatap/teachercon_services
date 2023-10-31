const TutorData = require('@root/src/apis/models/tutor');

// Service function to create a new student
const createTutor = async (tutorData) => {
  try {

    const newStudent = await TutorData.create(tutorData);
    return newStudent;
  } catch (error) {
    throw new Error('Failed to create student');
  }
};

module.exports = {
  createTutor,
};
