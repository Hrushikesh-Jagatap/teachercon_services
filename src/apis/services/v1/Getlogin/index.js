const UserData = require('@root/src/apis/models/user');

// Service function to get a single user by ID
const login = async (email,password) => {
    try {
      const user = await UserData.findOne({email:email, password:password});
      if(!user){
        return null;
      }
      console.log(user);
        const response={
      // _id: user._id,
      email:user.email,
      name:user.name,
      usertype:user.usertype,
      is_login:user.is_login,
    
    }
      return response;
    } catch (error) {
      throw new Error('Failed to get user By UserId');
    }
  };

module.exports = {
  login,
}  