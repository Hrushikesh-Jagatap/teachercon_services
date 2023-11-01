const Getlogin = require('@services/v1/Getlogin');
// const authController = require('@controllers/v1/auth/authCtrl');
const { HttpResponseHandler } = require('intelli-utility');
const checklogin = require('@models/user');
// Controller function to get a single student by userID
const login = async (req, res, next) => {
    try {
        console.log(req.query)
        const user = await Getlogin.login(req.query.email,req.query.password);
        console.log(user);

        if (!user) {
              return HttpResponseHandler.success(req, res, "Invaild email ,password");
            //return HttpResponseHandler.success(req, res, user);
        }
           await checklogin.findOneAndUpdate({ email:  req.query.email}, { is_login: true });
        
        const Response = await Getlogin.login(req.query.email,req.query.password);


        return HttpResponseHandler.success(req, res, Response);

    } catch (error) {
        next(error);
    }
};


module.exports = {
    login,
}  