const UserData = require('@root/src/apis/models/user');

// Service function to get a single user by ID

  const getmailandpassword = async (email) => {
    // const getmailandpassword = async (email,password) => {
    try {
          const user = await UserData.findOne({email:email});

      // const user = await UserData.findOne({email:email,password:password});
      return user;
    } catch (error) {
      throw new Error('Failed to get user By UserId');
    }
  };

module.exports = {
  getmailandpassword,
}  