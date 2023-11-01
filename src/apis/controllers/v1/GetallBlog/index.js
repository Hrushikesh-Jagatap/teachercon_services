const Getblogdata = require('@services/v1/CreateBlog');

const { HttpResponseHandler } = require('intelli-utility');


const blog = async (req, res) => {
  try {
    const data = await Getblogdata.getAllBlogs();

    if (!data) {
      return HttpResponseHandler.success(req, res, data);
    }
    return HttpResponseHandler.success(req, res, data);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  blog
}  