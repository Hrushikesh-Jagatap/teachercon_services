
const TutorService = require('@root/src/apis/services/v1/CreateTutor');
const { HttpResponseHandler } = require('intelli-utility');
const checkmail = require('@root/src/apis/services/v1/getmailinTutor');
const checkmailandpassword = require('@root/src/apis/services/v1/getmailandpassword');
// Controller function to create a new student
const createTutor = async (req, res, next) => {
    try {
        let email=req.body.email;
       // let password=req.body.password;
        const exstingUser = await checkmail.getmail(email);

        if(exstingUser == "null" || exstingUser.length<=0)
        {
        const newUser = await TutorService.createTutor(req.body);

        if (!newUser) {
            return HttpResponseHandler.success(req, res, newUser);
        }
        return HttpResponseHandler.success(req, res, newUser);
    }
    else{
        
        const data = await checkmailandpassword.getmailandpassword(email);
        console.log(data.is_login);
        if(data.is_login)
        {
        const newTutor = await TutorService.createTutor(req.body);
         return HttpResponseHandler.success(req, res, newTutor);

        }
 
        return HttpResponseHandler.success(req, res, "Login needed");

    }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createTutor
};
