const Getlogout = require('@services/v1/Getlogout');
const { HttpResponseHandler } = require('intelli-utility');
const UserData = require('@models/user');
// Controller function to get a single student by userID
const logout = async (req, res, next) => {
    try {
        console.log(req.params)
        const user = await Getlogout.logout(req.params.email);
        // console.log(user);

        // if (!user) {
        //       return HttpResponseHandler.success(req, res, "Invaild email ,password");
        //     //return HttpResponseHandler.success(req, res, user);
        // }
        //    await checklogin.findOneAndUpdate({ email:  req.body.email}, { is_login: true });
        
        // const Response = await Getlogin.login(req.body.email,req.body.password);
const Response = await UserData.findOne({email:req.params.email});

         return HttpResponseHandler.success(req, res, Response);

    } catch (error) {
        next(error);
    }
};


module.exports = {
    logout,
}  