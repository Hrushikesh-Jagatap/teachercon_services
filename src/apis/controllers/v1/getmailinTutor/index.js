const GetmailinTutor = require('@services/v1/getmailinTutor');

const { HttpResponseHandler } = require('intelli-utility');


const mailintutor = async (req, res) => {
  try {
    const data = await GetmailinTutor.getmail(req.params.email);

    if (!data) {
      return HttpResponseHandler.success(req, res, data);
    }
    return HttpResponseHandler.success(req, res, data);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  mailintutor
}  