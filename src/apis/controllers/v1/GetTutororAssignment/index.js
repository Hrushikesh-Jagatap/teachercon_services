const Gettutordata = require('@services/v1/GetTutororAssignment');

const { HttpResponseHandler } = require('intelli-utility');


const tutor = async (req, res) => {
  try {
    const data = await Gettutordata.getTutorData(req.params.want);

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