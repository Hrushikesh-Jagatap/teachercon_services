const GetSubjectandlocation = require('@services/v1/GetSubjectandlocation');

const { HttpResponseHandler } = require('intelli-utility');


const Getsubjectandlocation = async (req, res) => {
  try {
    console.log(req.query)
            const queryParameters = req.query;

            const data = await GetSubjectandlocation.Getsubjectandlocation(queryParameters);

    // const data = await GetSubjectandlocation.Getsubjectandlocation(req.query.subject,req.query.location);

    if (!data) {
      return HttpResponseHandler.success(req, res, data);
    }
    return HttpResponseHandler.success(req, res, data);

  } catch (error) {
    next(error);
  }
};

module.exports = {
  Getsubjectandlocation
}  