

const CreateBlog = require('@root/src/apis/services/v1/CreateBlog');
const { HttpResponseHandler } = require('intelli-utility');

// Controller function to create a new student
const createBlog = async (req, res, next) => {
    try {
      
            const blogData = req.body;
             const newBlog = await CreateBlog.createBlog(blogData);
             if(newBlog)
             {
            return HttpResponseHandler.success(req, res, newBlog);
             }
             else{
                return HttpResponseHandler.success(req, res, "null");

             }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createBlog
};
