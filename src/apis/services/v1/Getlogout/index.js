const UserData = require('@root/src/apis/models/user');

// Service function to get a single user by ID
const logout = async (email) => {
    try {
      const user = await UserData.findOne({email:email});

      if(user){
 const logoutuser= await UserData.findOneAndUpdate({ email:email}, { is_login: false });

      console.log(logoutuser);
        const response={
      _id: logoutuser._id,
      email:logoutuser.email,
      name:logoutuser.name,
      usertype:logoutuser.usertype,
      is_login:logoutuser.is_login,
    
    }
      return response;
}
else{
    return "user not found";
}
    } catch (error) {
      throw new Error('Failed to get user By UserId');
    }
  };

module.exports = {
  logout,
}  