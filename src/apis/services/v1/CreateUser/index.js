const UserData = require('@root/src/apis/models/user');

// Service function to create a new student
const createuser = async (userData) => {
  try {

    const newStudent = await UserData.create(userData);
    const response={
      _id: newStudent._id,
      email:newStudent.email,
      name:newStudent.name,
      usertype:newStudent.usertype,
      is_login:newStudent.is_login,
    
    }
    return response;
  } catch (error) {
    throw new Error('Failed to create student');
  }
};

module.exports = {
  createuser,
};
