
const UserService = require('@root/src/apis/services/v1/CreateUser');
const { HttpResponseHandler } = require('intelli-utility');
const checkmailandpassword = require('@root/src/apis/services/v1/getmailandpassword');
// Controller function to create a new student
const createUser = async (req, res, next) => {
    try {
        let email=req.body.email;
        // let password=req.body.password;
        // const exstingUser = await checkmailandpassword.getmailandpassword(email, password);
            const exstingUser = await checkmailandpassword.getmailandpassword(email);

        if(!exstingUser)
        {
        const newUser = await UserService.createuser(req.body);

        if (!newUser) {
            return HttpResponseHandler.success(req, res, newUser);
        }
        return HttpResponseHandler.success(req, res, newUser);
    }
    else{
       return HttpResponseHandler.success(req, res, "already Used Email");

    }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createUser
};
