const GetOnlineOrHome = require('@services/v1/GetOnlineOrHome');

const { HttpResponseHandler } = require('intelli-utility');


const tutor = async (req, res) => {
  try {
    const data = await GetOnlineOrHome.getTutorData(req.params.Meeting_options);

    if (!data) {
      return HttpResponseHandler.success(req, res, data);
    }
    return HttpResponseHandler.success(req, res, data);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  tutor
}  