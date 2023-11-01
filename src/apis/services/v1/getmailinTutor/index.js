const UserData = require('@root/src/apis/models/tutor');

// Service function to get a single user by ID

  const getmail = async (email) => {
    // const getmailandpassword = async (email,password) => {
    try {
          const user = await UserData.find({email:email});

          if(!user){
            return "null";
          }
      // const user = await UserData.findOne({email:email,password:password});
      return user;
    } catch (error) {
      throw new Error('Failed to get user By UserId');
    }
  };

module.exports = {
  getmail,
}  